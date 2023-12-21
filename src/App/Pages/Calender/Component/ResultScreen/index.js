import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const ResultCalender = () => {
    const dateofbirth = useSelector(state => state.calender.date)
    const [dateob, setDateob] = useState(null)
    const [noOfDays, setNoOfDays] = useState(null)
    const noofDays = useCallback((endDate, startDate) => {
        return Math.round((endDate -startDate) / (1000 * 60 * 60 * 24));

    },[])
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
                setNoOfDays(noofDays(d1, d2));
            }  
        }, 500);
        
    },[dateofbirth, noofDays])
    return (
        <div className='text-center'>
            {(dateob && noOfDays) && <>
            <p className='spinning'>
                Your Age is
                <span>{` ${dateob?.y} Years ${dateob?.m} Months ${dateob?.d > 1 ? `${dateob?.d} Days` : `1 Day` }`}</span>
            </p>
            <p className='spinning'>
                No of Days
                <span>{` ${noOfDays}`}</span>
            </p>
            </>}
        </div>
    )
}
export default ResultCalender;