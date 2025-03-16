import React, { useEffect, useState } from 'react'
import {fetchAPI,submitAPI} from '../api'
import useScript from '../hooks/useScript'

export default function BookingTable() {
    return (
        <>
            <BookingForm></BookingForm>
        </>
    )
}
const BookingForm = () => {
    const newDate = new Date();
    let month = newDate.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    const [date,setDate] = useState(newDate.getFullYear() + '-' + month + '-' + newDate.getDate());
    const [time,setTime] = useState();
    const [numberOfGuest,setNumberOfGuest] = useState(1);
    const [occasion,setOccasion] = useState("Birthday");
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(submitAPI({date,time,numberOfGuest,occasion})){
            alert("Reservation done successfully");
            setDate(newDate.getFullYear() + '-' + month + '-' + newDate.getDate())
            fetchAvailableTimes(newDate)
            setNumberOfGuest(1)
            setOccasion("Birthday")
        }
    }
    const handleDateChange = (e) =>{
        setDate(e.target.value)
        fetchAvailableTimes(new Date(e.target.value))
    }
    const [times,setTimes] = useState([]);
    const fetchAvailableTimes = (date) => {
        setTimes(fetchAPI(date))
    }
    useEffect(()=>{
        fetchAvailableTimes(newDate)
    },[])
    useScript("https://raw.githubusercontent.com/courseraap/capstone/main/api.js");
    return (
        <form className='booking-table-form' onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {
                    times.map((time) => <option value={time} key={time}>{time}</option>)
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuest} onChange={e => setNumberOfGuest(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" className='btn primary' value="Make Your reservation" />
        </form>
    )
}