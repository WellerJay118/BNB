import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { getSpots } from "../../store/spots";
// import styles from "./SingleSpot.module.css"


const SingleSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
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
                {console.log(singleSpot)}
                {/* <img src={singleSpot?.Images[0].url} alt='' /> IMAGES[0] IS UNDEFINED IF THERE IS NO IMAGE, THIS CAUSES ISSUES */}
                <div>{singleSpot?.spotName}'s shack</div>
            {/* {console.log(singleSpot)} */}
            {/* {console.log('abc ' + sessionUser.id)} sessionUser.id we can use to verify if the logged in person is the same as the "owner" of the place. */}
            {/* <h1>{singleSpot?.spotName}</h1> */}
            {/* do a sessionUser.id === user.id as toggle for displaying button to edit */}
            {singleSpot?.userId === sessionUser?.id ? (
                <button onClick={(e) => history.push(`spots/${id}/edit`)}>Edit</button>
            ): null}
            </div>
            {/* Should be able to just render in the component of a review form or a booking form here, similar to App */}
</>

    )


}


export default SingleSpot;
