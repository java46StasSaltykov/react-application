import React, { useEffect } from "react";

type Props = {
    interval?: number;
    zone: string;
    timezone: string;
}
const Timer: React.FC<Props> = ({interval, zone, timezone}) => {
    const [time, setTime] = React.useState(new Date());
    function tic(): void {
        setTime(new Date());
    }
    useEffect(() => {
        setInterval(tic, interval || 1000);
    }, [interval])
    
    return <div style={{marginLeft: '50vw'}}>
        <h3>{zone}</h3>
        <label>{time.toLocaleTimeString('en-GB', {timeZone: timezone})}</label>
    </div>
    ;
}
export default Timer;