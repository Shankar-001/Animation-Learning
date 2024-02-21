import React, { useState, useEffect } from 'react';
import './Flipping.css';

const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainer = ({ digit, dig1 = 55, shuffle, unit }) => {
  let currentDigit = digit;
  let previousDigit = digit - 1;

  if (unit.endsWith('1')) {
    if (unit === 'hours1') {
      previousDigit = previousDigit === -1 ? 2 : previousDigit;
    } else {
      previousDigit = previousDigit === -1 ? 5 : previousDigit;
    }
  } else {
    if (unit === 'hours2' && digit === 0 && dig1 === 0) {
      previousDigit = 3;
    } else {
      previousDigit = previousDigit === -1 ? 9 : previousDigit;
    }
  }

  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className={'flipUnitContainer'}>
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
    </div>
  );
};

const FlippingClock = () => {
  const [time, setTime] = useState({
    hours1: 0,
    hours2: 0,
    hoursShuffle1: true,
    hoursShuffle2: true,
    minutes1: 0,
    minutes2: 0,
    minutesShuffle1: true,
    minutesShuffle2: true,
    seconds1: 0,
    seconds2: 0,
    secondsShuffle1: true,
    secondsShuffle2: true,
  });

  useEffect(() => {
    const timerID = setInterval(() => updateTime(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const updateTime = () => {
    const currentTime = new Date();
    const hours1 = Math.floor(currentTime.getHours() / 10);
    const hours2 = currentTime.getHours() % 10;
    const minutes1 = Math.floor(currentTime.getMinutes() / 10);
    const minutes2 = currentTime.getMinutes() % 10;
    const seconds1 = Math.floor(currentTime.getSeconds() / 10);
    const seconds2 = currentTime.getSeconds() % 10;

    setTime((prevTime) => ({
      ...prevTime,
      hours1: hours1 !== prevTime.hours1 ? hours1 : prevTime.hours1,
      hours2: hours2 !== prevTime.hours2 ? hours2 : prevTime.hours2,
      hoursShuffle1:
        hours1 !== prevTime.hours1
          ? !prevTime.hoursShuffle1
          : prevTime.hoursShuffle1,
      hoursShuffle2:
        hours2 !== prevTime.hours2
          ? !prevTime.hoursShuffle2
          : prevTime.hoursShuffle2,
      minutes1: minutes1 !== prevTime.minutes1 ? minutes1 : prevTime.minutes1,
      minutes2: minutes2 !== prevTime.minutes2 ? minutes2 : prevTime.minutes2,
      minutesShuffle1:
        minutes1 !== prevTime.minutes1
          ? !prevTime.minutesShuffle1
          : prevTime.minutesShuffle1,
      minutesShuffle2:
        minutes2 !== prevTime.minutes2
          ? !prevTime.minutesShuffle2
          : prevTime.minutesShuffle2,
      seconds1: seconds1 !== prevTime.seconds1 ? seconds1 : prevTime.seconds1,
      seconds2: seconds2 !== prevTime.seconds2 ? seconds2 : prevTime.seconds2,
      secondsShuffle1:
        seconds1 !== prevTime.seconds1
          ? !prevTime.secondsShuffle1
          : prevTime.secondsShuffle1,
      secondsShuffle2:
        seconds2 !== prevTime.seconds2
          ? !prevTime.secondsShuffle2
          : prevTime.secondsShuffle2,
    }));
  };

  const {
    hours1,
    hours2,
    minutes1,
    minutes2,
    seconds1,
    seconds2,
    hoursShuffle1,
    hoursShuffle2,
    minutesShuffle1,
    minutesShuffle2,
    secondsShuffle1,
    secondsShuffle2,
  } = time;

  return (
    <div className={'flipClock'}>
      <FlipUnitContainer
        unit={'hours'}
        digit={hours1}
        shuffle={hoursShuffle1}
      />
      <div style={{ width: '20px', fontSize: '55px' }}></div>
      <FlipUnitContainer
        unit={'hours'}
        digit={hours2}
        dig1={hours1}
        shuffle={hoursShuffle2}
      />
      <div style={{ width: '35px', fontSize: '55px' }}>:</div>
      <FlipUnitContainer
        unit={'minutes1'}
        digit={minutes1}
        shuffle={minutesShuffle1}
      />
      <div style={{ width: '20px', fontSize: '55px' }}></div>
      <FlipUnitContainer
        unit={'minutes2'}
        digit={minutes2}
        shuffle={minutesShuffle2}
      />
      <div style={{ width: '35px', fontSize: '55px' }}>:</div>
      <FlipUnitContainer
        unit={'seconds1'}
        digit={seconds1}
        shuffle={secondsShuffle1}
      />
      <div style={{ width: '20px', fontSize: '55px' }}></div>
      <FlipUnitContainer
        unit={'seconds2'}
        digit={seconds2}
        shuffle={secondsShuffle2}
      />
    </div>
  );
};

export default FlippingClock;
