
const SplashPage = () => {
    //things and stuff

    return (
            <div className="splash__wrapper">
                <div className="splash__searchbar-wrapper">
                    <div className="splash__searchbar-container">
                        <input className="splash__searchbar" type="text" placeholder="Search"></input>
                        <input className="splash__guests" type="number" placeholder="Guest Count"></input>
                        <label>Check-in</label>
                        <input className="splash__startdates" type="date"></input>
                        <label>Check-out</label>
                        <input className="splash__enddates" type="date"></input>
                    </div>
                </div>

                {/* <div className="splash__tisements-container">
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
                </div> */}
            </div>
    )
}
export default SplashPage;
