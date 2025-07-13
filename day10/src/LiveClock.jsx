import { useEffect, useState } from "react";

export function Clock(){
    const [localclock, setClock] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setClock(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <>
   <h1>Time:</h1>
        <div style={{
            padding: '10px',
            border: '2px solid white',
            margin: '50px',
            borderRadius: '50%',
            height: '105px',
            width: '105px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
          {localclock}
      </div>
    </>
    );

}