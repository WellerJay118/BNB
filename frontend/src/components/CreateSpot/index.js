import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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
    const [price, setPrice] = useState(null);
    const [country, setCountry] = useState('');
    const [url, setUrl] = useState('');

    const createGuestCap = (e) => setGuestcap(e.target.value);
    const createAddress = (e) => setAddress(e.target.value);
    const createCity = (e) => setCity(e.target.value);
    const createState = (e) => setState(e.target.value);
    const createSpotName = (e) => setSpotName(e.target.value);
    const createDescription = (e) => setDescription(e.target.value);
    const createPrice = (e) => setPrice(e.target.value);
    const createCountry = (e) => setCountry(e.target.value);
    const createUrl = (e) => setUrl(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            userId: sessionUser.id,
            guestCap,
            address,
            city,
            state,
            country,
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


    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Street Address"
                    type="text"
                    required
                    value={address}
                    onChange={createAddress}
                />
                <input
                    placeholder="City"
                    type="text"
                    required
                    value={city}
                    onChange={createCity}
                />
                <input
                    placeholder="State"
                    type="text"
                    required
                    value={state}
                    onChange={createState}
                />
                <input
                    placeholder="Country"
                    type="text"
                    required
                    value={country}
                    onChange={createCountry}
                />
                <input
                    placeholder="Property Name"
                    type="text"
                    required
                    value={spotName}
                    onChange={createSpotName}
                />
                <input
                    placeholder="Maximum Capacity"
                    type="text"
                    required
                    value={guestCap}
                    onChange={createGuestCap}
                />
                <input
                    placeholder="Description"
                    type="text"
                    required
                    value={description}
                    onChange={createDescription}
                />
                <input
                    placeholder="Price Per Night"
                    type="number"
                    required
                    value={price}
                    onChange={createPrice}
                />
                <input
                    placeholder="Image URL"
                    type="text"
                    value={url}
                    onChange={createUrl}
                />
                <button type="submit">Create your own Listing</button>
            </form>
        </div>
        </>
    );
}

export default CreateSpot;
