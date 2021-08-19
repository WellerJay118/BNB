import { NavLink } from "react-router-dom";

const SplashPage = () => {
    //things and stuff

    return (
            <div className="splash__wrapper">
                <div className="splash__searchbar-container">
                    <div className="splash__searchbar">
                        <input className="search" type="text" placeholder="Search"></input>
                        <input className="guests" type="number" placeholder="Guest Count"></input>
                        <label>Check-in </label>
                        <input className="start-dates" type="date"></input>
                        <label>Check-out </label>
                        <input className="end-dates" type="date"></input>
                    </div>
                </div>
                <div className="splash__tisements-container">
                    <div className="splash__tisements-container--toprated">
                        <p>Top Rated spot</p>
                    </div>
                    <div className="splash__tisements-container--signup" >
                        <NavLink style={{ textDecoration: 'none', color: 'black'}}to="/signup">
                        <p>Join Us!</p>
                        </NavLink>
                    </div>
                    <div className="splash__tisements-container--lastbooked">
                        <p>Last booked!</p>
                    </div>
                </div>
            </div>
    )
}
export default SplashPage;
