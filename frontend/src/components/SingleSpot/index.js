import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { getSpots } from "../../store/spots";
// import styles from "./SingleSpot.module.css"


// const SingleSpot = () => {
//     const dispatch = useDispatch();
//     const { spotId } = useParams();
//     const sessionUser = useSelector(state => state.session.user);

//     const spots = useSelector(state => Object.values(state.spots));

//     singleSpot = spots.filter(spot => Number(spot.id) === Number(spotId))
// }
