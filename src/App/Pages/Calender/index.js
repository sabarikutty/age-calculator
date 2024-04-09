import DobPicker from "./Component/DatePicker";
import ResultCalender from "./Component/ResultScreen";
import './Calender.scss';
const Calender = () => {
  return (
    <div className="flex flex-col gap-2 page-container">   
      <div className="date-container">
        <div>
          <h1>
            <span className="odd-ani">A</span>
            <span className="even-ani">g</span>
            <span className="odd-ani">e</span>&nbsp;&nbsp;
            <span className="even-ani">C</span>
            <span className="odd-ani">a</span>
            <span className="even-ani">l</span>
            <span className="odd-ani">c</span>
            <span className="even-ani">u</span>
            <span className="odd-ani">l</span>
            <span className="even-ani">a</span>
            <span className="odd-ani">t</span>
            <span className="even-ani">o</span>
            <span className="odd-ani">r</span>
          </h1>
        </div>
        <DobPicker />
        <div className="border"></div>
        <ResultCalender />
      </div>
    </div>
  )
}
export default Calender;