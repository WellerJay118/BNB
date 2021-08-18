import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { getSpots } from "../../store/spots"
// import styles from "./SpotsPage.module.css"

const SpotsPage = () => {
    const dispatch = useDispatch();

    const spots = useSelector(state => Object.values(state.spots));

    useEffect (() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <>
            <h1> SPOTS PAGE</h1>
            {
                spots?.map((spot) =>
                <div key={spot.id}>
                    <div>
                        {/* <img src={spot?.Images[0].url} alt='' /> */}
                        <div>{spot?.spotName}</div>
                        <div>
                            Price {spot?.price}
                            Guests {spot?.guestCap}
                        </div>
                    </div>
                </div>
                )
            }
        </>
    )
}

export default SpotsPage;
