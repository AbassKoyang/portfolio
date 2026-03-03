'use client';
import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [second, setSecond] = useState('')
    const [timezone, setTimezone] = useState('')
    useEffect(() => {
        const dateInterval = setInterval(() => {
            const date = Date.now();
            const hour = new Date(date).getHours().toString()
            const minute = new Date(date).getMinutes().toString()
            const second = new Date(date).getSeconds().toString()
            setHour(hour);
            setMinute(minute);
            setSecond(second);
        }, 1000);

        const timezone = getGMTOffset()
        setTimezone(timezone)

    
      return () => {
        clearInterval(dateInterval)
      }
    }, [])

    function getGMTOffset() {
        const offsetInMinutes = -new Date().getTimezoneOffset();
        const offsetInHours = offsetInMinutes / 60;
      
        const sign = offsetInHours >= 0 ? "+" : "-";
      
        return `GMT${sign}${Math.abs(offsetInHours)}`;
    }
          
  return (
    <div className="flex items-center gap-3">
        <p className='text-primary-white font-fragment-mono text-xs lg:text-sm'>{hour ? hour : '0'}:{minute ? Number(minute) < 10 ? `0${minute}` : minute : '00'}:{second ? Number(second) < 10 ? `0${second}` : second : '00' }</p>
        <p className='text-primary-white font-fragment-mono text-xs lg:text-sm'> {Number(hour) > 11 ? 'PM' : 'AM'}</p>
        <p className='text-primary-white font-fragment-mono text-xs lg:text-sm'>{timezone}</p>
    </div>
  )
}

export default Clock