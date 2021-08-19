import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
                    <NavLink to={`/spots/${spot.id}`} style={{ textDecoration: 'none', color: 'black'}}>
                    <h3>{spot?.spotName}</h3>
                        <div>
                            {/* <img src={spot?.Images[0].url} alt='' /> */}
                            IMAGE HERE
                        </div>
                        <div>
                             Price {spot?.price}
                             Guests {spot?.guestCap}
                        </div>
                    </NavLink>
                </div>
                )
            }
        </>
    )
}

export default SpotsPage;
