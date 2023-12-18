import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const ResultCalender = () => {
    const dateofbirth = useSelector(state => state.calender.date)
    const [dateob, setDateob] = useState(null)
    useEffect(() => {
        setDateob(null)
        setTimeout(() => {
            if(dateofbirth) {
                let d2 = new Date(dateofbirth);              
                let d1 = new Date();  
                var year = 0, month = 0, day = 0;
                if(d1.toDateString() !== d2.toDateString()) {
                    let diff = new Date(
                        d1.getFullYear()-d2.getFullYear(), 
                        d1.getMonth()-d2.getMonth(), 
                        d1.getDate()-d2.getDate()
                    );
                    year = diff.getYear() < 1 ? 0 : diff.getYear();
                    month = diff.getMonth();
                    day = diff.getDate();
                }
                setDateob({y: year, m: month, d: day})
            }  
        }, 500);
        
    },[dateofbirth])
    return (
        <div className='text-center'>
            {dateob && <p className='spinning'>Your Age is
                <span>{` ${dateob?.y} Years ${dateob?.m} Months ${dateob?.d > 1 ? `${dateob?.d} Days` : `1 Day` }`}</span>
            </p>}
        </div>
    )
}
export default ResultCalender;