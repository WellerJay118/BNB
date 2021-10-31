import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createBooking } from "../../store/bookings";
import DatePicker from "react-datepicker";



const BookingForm = ({spotId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state?.session?.user);
    // const { spotId } = useParams();


    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [valErr, setValErr] = useState('');

    useEffect(() => {
        const errors = [];
        if(startDate < new Date()) errors.push("Choose a valid checkin date")
        if(endDate < new Date()) errors.push("Choose a valid checkout date")
        setValErr(errors)
    },[startDate, endDate])

    let userId;
    const handleSubmit = async(e) => {
        e.preventDefault();
        // const newDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}` //pain
        if(valErr > 0) return
        if(sessionUser) {
            userId = sessionUser.id
        } else {
            alert('Please login or signup to make a reservation')
            return
        }

        const bookingPayload = {
            spotId: +spotId,
            userId,
            startDate,
            endDate,
        }
        const booking = await dispatch(createBooking(bookingPayload))
        if (booking) history.push('/spots')
    }
    // let calendarToggle = true
    // const handleCancel = (e) => {
    //     e.preventDefault();
    //     setStartDate('')
    //     setEndDate('')
    //     calendarToggle = true
    // }

    // const handleStart = (e) => {
        //     setStartDate(e)
        //     calendarToggle = false
        // }
        const handleCancel = (e) => {
            e.preventDefault();
            setStartDate('')
            setEndDate('')

    }


    return (
        <div>
            <div className="booking__form-container">

                <div className="booking__startDate">
                    <DatePicker
                    placeholderText="Click to select a Checkin Date"
                    filterDate={date => {return new Date() < date}}
                    value={startDate}
                    selected={startDate}
                    dateFormat='yyyy-MM-dd'
                    inline
                    onChange={date => setStartDate(date)}
                    required
                    />
                {/* <label>1234</label> */}
                    <DatePicker
                    placeholderText="Click to select a Checkout Date"
                    value={endDate}
                    onChange={date => setEndDate(date)}
                    filterDate={date => {return new Date() < date}}
                    selected={endDate}
                    dateFormat='yyyy-MM-dd'
                    inline
                    required
                    />
                </div>
                <div className="booking__buttons">
                    <button onClick={handleSubmit}>Book!</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>

            </div>
        </div>
    )
}
export default BookingForm
