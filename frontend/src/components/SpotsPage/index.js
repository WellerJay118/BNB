import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSpots } from "../../store/spots"

const SpotsPage = () => {
    const dispatch = useDispatch();

    const spots = useSelector((state) => state.spot.allSpots);

    useEffect (() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <>
            <h1> SPOTS PAGE</h1>
        </>
    )
}

export default SpotsPage;
