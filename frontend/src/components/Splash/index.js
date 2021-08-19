import { NavLink } from "react-router-dom";

const SplashPage = () => {
    //things and stuff

    return (
        <div className="splash-wrapper">
        {/* <div className="search-banner"> */}
            <div className="searchbar">
                <input className="search" type="text" placeholder="Search"></input>
                <input className="guests" type="number" placeholder="Guest Count"></input>
                <label>Check-in </label>
                <input className="start-dates" type="date"></input>
                <label>Check-out </label>
                <input className="end-dates" type="date"></input>
            </div>
        {/* </div> */}
        {/* <div className="adverts"> */}
            <div className="top-rated">
                <p>Top Rated spot</p>
            </div>
            <div className="extra-signup" >
                <NavLink style={{ textDecoration: 'none', color: 'black'}}to="/signup">
                <p>Join Us!</p>
                </NavLink>
            </div>
            <div className="last-booked">
                <p>Last booked!</p>
            </div>
        {/* </div> */}
        </div>
    )
}
export default SplashPage;
