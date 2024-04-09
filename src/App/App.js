import './App.css';
import Store from './Store/MainStore';
import Calender from './Pages/Calender';
function App() {
  return (
    <Store>
      <div className="App h-full">
        <Calender />
      </div>  
    </Store>
  );
}

export default App;
