import './App.css';
import TopStatics from './components/TopStatics';
import LastStatics from './components/LastStatics';
import Rolling from './components/Rolling';
import FlippingClock from './pages/FlippingClock';

function App() {
  return (
    <div className="App">
      {/* <TopStatics />
      <Rolling />
      <LastStatics /> */}
      <FlippingClock />
    </div>
  );
}

export default App;
