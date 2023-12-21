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
         (dateob && noOfDays) && 
            <div className='result-screen'>
                <p className=''>
                    Your Age is&nbsp;
                    <span className='spinning'>
                        <span className='rotate'>{dateob?.y}</span> Years&nbsp;
                        <span className='rotate'>{dateob?.m}</span> Months&nbsp;
                        <span className='rotate'>{dateob?.d > 1 ? dateob?.d : 1}</span>Day(s)                   
                    </span>
                </p>
                <p className=''>
                    No of Days&nbsp;
                    <span className='spinning'>
                        <span className='rotate'>{noOfDays}</span>
                    </span>
                </p>            
            </div>
    )
}
export default ResultCalender;