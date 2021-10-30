import { timeSlots } from "./timeslots";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { createBooking } from "../../store/bookings";




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

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Check-in</label>
                    <input
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label>Check-out</label>
                    <input
                    type="datetime-local"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    />

                    <button type="submit">Book!</button>

                </form>
            </div>
        </div>
    )
}
export default BookingForm
