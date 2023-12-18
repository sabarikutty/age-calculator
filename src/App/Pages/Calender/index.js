import DobPicker from "./Component/DatePicker";
import ResultCalender from "./Component/ResultScreen";
import './Calender.scss';
const Calender = () => {
  return (
    <div className="flex flex-col gap-2 page-container">      
      <div><h1>Age Calculator</h1></div>
      <div className="date-container">
        <DobPicker />
        <ResultCalender />
      </div>
    </div>
  )
}
export default Calender;