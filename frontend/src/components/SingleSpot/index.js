import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSpots } from "../../store/spots";
// import styles from "./SingleSpot.module.css"


const SingleSpot = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const spots = useSelector(state => Object.values(state.spots));
    // const spots = useSelector(state => state.spots)

    // const singleSpot = Object.values(spots)?.find((element) => {
    //     return element.id === parseInt(id)
    // })

    const singleSpot = spots?.find((element) => {
        return element.id === parseInt(id);
    })

    // const singleSpot = spots.filter(spot => Number(spot.id) === Number(id);

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
 <>
            <h1>SINGLE SPOT COMPONENT</h1>
            <div>
                <img src={singleSpot?.Images[0].url} alt='' />
                <div>{singleSpot?.spotName}'s shack</div>
            {/* {console.log(singleSpot)} */}
            {/* {console.log('abc ' + sessionUser.id)} sessionUser.id we can use to verify if the logged in person is the same as the "owner" of the place. */}
            {/* <h1>{singleSpot?.spotName}</h1> */}
            </div>
</>

    )


}


export default SingleSpot;
