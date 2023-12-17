import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const ResultCalender = () => {
    const dateofbirth = useSelector(state => state.calender.date)
    const [dateob, setDateob] = useState({y:0, m:0, d:0})
    useEffect(() => {
        if(dateofbirth) {
            let d2 = new Date(dateofbirth);                // April 5, 2014
            let d1 = new Date();               // February 22, 2013
            let diff = new Date(
                d1.getFullYear()-d2.getFullYear(), 
                d1.getMonth()-d2.getMonth(), 
                d1.getDate()-d2.getDate()
            );
            setDateob({y: diff.getYear() < 1 ? 0 : diff.getYear(), m: diff.getMonth(), d: diff.getDate()})
        }
    },[dateofbirth])
    return (
        <div className='text-left'>{`Your Age is ${dateob?.y} Years ${dateob?.m} Months ${dateob?.d} Days`}</div>
    )
}
export default ResultCalender;