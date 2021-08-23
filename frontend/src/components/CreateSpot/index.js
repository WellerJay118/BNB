import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { createSpot } from "../../store/spots";


const CreateSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user); //can grab userId through here. if sessionUser === userId of spot page then they see an edit button

    const [guestCap, setGuestcap] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [spotName, setSpotName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if(!url.includes(".com")) errors.push("Please include an image URL, don't break my site");
        setValidationErrors(errors)
    }, [url]);


    const createGuestCap = (e) => setGuestcap(e.target.value);
    const createAddress = (e) => setAddress(e.target.value);
    const createCity = (e) => setCity(e.target.value);
    const createState = (e) => setState(e.target.value);
    const createSpotName = (e) => setSpotName(e.target.value);
    const createDescription = (e) => setDescription(e.target.value);
    const createPrice = (e) => setPrice(e.target.value);
    const createUrl = (e) => setUrl(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            userId: sessionUser.id,
            guestCap,
            address,
            city,
            state,
            spotName,
            description,
            price,
            url
        }
        let createdSpot = await dispatch(createSpot(payload));
        if(createdSpot) {
            history.push(`/spots/${createdSpot.id}`);
        }
    }

    const handleCancel = async(e) => {
        e.preventDefault();
        history.push("/spots");
    }


    return (
        <div className="createSpot__container">
                <div className="createSpot__banner">
                <h1>List your property</h1>
                </div>
            <div className="createSpot__wrapper">
                <div className="createSpot__form">
                <form onSubmit={handleSubmit}>
                        <label>Location name or title</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Property Name:"
                            type="text"
                            required
                            value={spotName}
                            onChange={createSpotName}
                            />
                        <label>Guests allowed</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Maximum Capacity:"
                            type="text"
                            required
                            value={guestCap}
                            onChange={createGuestCap}
                            />
                        <label>Cost</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Price Per Night:"
                            type="number"
                            required
                            value={price}
                            onChange={createPrice}
                            />
                        <label>Location</label>
                        {/* <label>Street Address</label> */}
                        <input
                            className="createSpot__input-field"
                            placeholder="Street Address:"
                            type="text"
                            required
                            value={address}
                            onChange={createAddress}
                            />
                        {/* <label>City</label> */}
                        <input
                            className="createSpot__input-field"
                            placeholder="City:"
                            type="text"
                            required
                            value={city}
                            onChange={createCity}
                            />
                        {/* <label>State</label> */}
                        <input
                            className="createSpot__input-field"
                            placeholder="State:"
                            type="text"
                            required
                            value={state}
                            onChange={createState}
                            />
                        <label>Photo</label>
                        <input
                        className="createSpot__input-field"
                            placeholder="Image URL:"
                            type="text"
                            value={url}
                            onChange={createUrl}
                            />
                        <label>Description</label>
                        <input
                            className="createSpot__input--description"
                            placeholder="Description:"
                            type="text"
                            required
                            value={description}
                            onChange={createDescription}
                        />
                    </form>
                        <div className="createSpot__button-container">
                        <button className="createSpot__button" disabled={validationErrors.length > 0}type="submit">List!</button>
                        <button className="createSpot__button" type='click' onClick={handleCancel}>Cancel</button>
                        </div>

                </div>

            </div>

        </div>
    );
}

export default CreateSpot;

//implement drop down for state...will have to seed or import state data somewhere.
