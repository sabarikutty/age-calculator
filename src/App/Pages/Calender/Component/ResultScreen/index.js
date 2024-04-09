import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const ResultCalender = () => {
    const dateofbirth = useSelector(state => state.calender.date)
    const [dateob, setDateob] = useState(null)
    const [noOfDays, setNoOfDays] = useState(null)
    const [noOfMonths, setNoOfMonths] = useState(null)
    const [loading, setLoading] = useState(true)
    const getNoofDays = useCallback((endDate, startDate) => {
        return Math.round((endDate -startDate) / (1000 * 60 * 60 * 24));

    },[])
    const getNoofMonths = useCallback((endDate, startDate) => {
        var months;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth() + 1;
        months += endDate.getMonth() + 1;
        return months <= 0 ? 0 : months;

    },[])
    useEffect(() => {
        setLoading(false)
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
                setNoOfDays(getNoofDays(d1, d2));
                setNoOfMonths(getNoofMonths(d1, d2));
                setLoading(true);
            } else {
                setLoading(false);
            }
        }, 500);
        
    },[dateofbirth, getNoofDays, getNoofMonths])
    return (        
         (loading) && 
            <div className='result-screen flex flex-col gap-[2rem]'>
                <div className='spinning'>
                    <p className='holder'><span className='rotate'>{dateob?.y}</span> Years&nbsp;</p>
                    <p className='holder'><span className='rotate'>{dateob?.m}</span> Months&nbsp;</p>
                    <p className='holder'><span className='rotate'>{dateob?.d > 1 ? dateob?.d : 1}</span>Day(s) </p>                  
                </div>
                <div className='spinning'>
                    <p className='holder'><span className='rotate'>{noOfMonths}</span> Total Months&nbsp;</p>  
                    <p className='holder'><span className='rotate'>{noOfDays}</span> Total Days&nbsp;</p>             
                </div>
            </div>
    )
}
export default ResultCalender;