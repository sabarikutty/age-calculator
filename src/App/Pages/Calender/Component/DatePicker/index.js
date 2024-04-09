import { DatePicker } from "antd";
import { useDispatch } from 'react-redux'

const DobPicker = () => {
    const dispatch = useDispatch()
    const onChange = (date, dateString) => {
        dispatch({payload: dateString, type: 'calender/setCalenderDate',});
    } 
     return (
        <div className="flex gap-3">
          <div>
            <DatePicker onChange={onChange} disabledDate={current => {
                return current && current >= new Date();
              }}
              inputReadOnly   />
          </div>
            
        </div>
     )
}
export default DobPicker;