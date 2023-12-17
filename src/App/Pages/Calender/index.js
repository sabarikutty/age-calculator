import { DatePicker } from "antd";
import { useDispatch } from 'react-redux'

const Calender = () => {
    const dispatch = useDispatch()
    const onChange = (date, dateString) => {
        dispatch({payload: dateString, type: 'calender/setCalenderDate',});
    } 
     return (
        <div className="flex">
            <DatePicker onChange={onChange} disabledDate={current => {
          return current && current >= new Date();
        }} />
        </div>
     )
}
export default Calender;