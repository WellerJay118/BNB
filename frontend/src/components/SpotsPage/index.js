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
        <div className="allSpots__wrapper">

            <div className="bannerAndSpots">

                <div className="allSpots__banner">
                <h1> SPOTS PAGE - RENDER BANNER COMPONENT HERE</h1>
                </div>

                <div className="allSpots__spots">
                    {spots?.map((spot) =>
                        <div key={spot.id} className="allSpots__indivSpot--container" >
                        <NavLink to={`/spots/${spot.id}`} style={{ textDecoration: 'none', color: 'black'}}>

                            <div className="allSpots__indivSpot--image-container">
                                <img className="allSpots__indivSpot--image" src={spot?.Images[0].url} alt='' />
                            </div>
                            
                            <h3>{spot?.spotName}'s stay</h3>

                            <div className="allSpots__indivSpot--location">
                                    <p>{spot?.city}, {spot?.state}</p>
                            </div>

                            <div className="allSpots__indivSpot--details">
                                <p>Price ${spot?.price} per night</p>
                                <p>Up to {spot?.guestCap} guests</p>
                            </div>

                        </NavLink>
                        </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default SpotsPage;
