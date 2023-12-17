import './App.css';
import Store from './Store/MainStore';
import Calender from './Pages/Calender';
import ResultCalender from './Pages/ResultScreen';
function App() {
  return (
    <Store>
      <div className="App">
        <Calender />
        <ResultCalender />
      </div>  
    </Store>
  );
}

export default App;
