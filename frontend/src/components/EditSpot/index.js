import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { editSpot, getSpots } from "../../store/spots";

const EditSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const toEdit = useSelector(state => state.spots[id])

    useEffect(() => {
        dispatch(getSpots())
    },[dispatch])

    //set state to be what is already there from the backend
    const [guestCap, setGuestcap] = useState(toEdit.guestCap);
    const [address, setAddress] = useState(toEdit.address);
    const [city, setCity] = useState(toEdit.city);
    const [state, setState] = useState(toEdit.state);
    const [spotName, setSpotName] = useState(toEdit.spotName);
    const [description, setDescription] = useState(toEdit.description);
    const [price, setPrice] = useState(toEdit.price);
    const [country, setCountry] = useState(toEdit.country);
    const [url, setUrl] = useState(toEdit.Images[0].url);

    const updateGuestCap = (e) => setGuestcap(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateSpotName = (e) => setSpotName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateUrl = (e) => setUrl(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            userId: sessionUser.id,
            guestCap,
            address,
            city,
            state,
            // country,
            spotName,
            description,
            price,
            url
        }
        let editedSpot = await dispatch(editSpot(id, payload));
        if(editedSpot) {
            history.push(`/spots/${editedSpot.id}`);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Edit your Listing</h1>
                <input
                    placeholder="Street Address"
                    type="text"
                    required
                    value={address}
                    onChange={updateAddress}
                />
                <input
                    placeholder="City"
                    type="text"
                    required
                    value={city}
                    onChange={updateCity}
                />
                <input
                    placeholder="State"
                    type="text"
                    required
                    value={state}
                    onChange={updateState}
                />
                {/* <input
                    placeholder="Country"
                    type="text"
                    required
                    value={country}
                    onChange={updateCountry}
                /> */}
                <input
                    placeholder="Property Name"
                    type="text"
                    required
                    value={spotName}
                    onChange={updateSpotName}
                />
                <input
                    placeholder="Maximum Capacity"
                    type="text"
                    required
                    value={guestCap}
                    onChange={updateGuestCap}
                />
                <input
                    placeholder="Description"
                    type="text"
                    required
                    value={description}
                    onChange={updateDescription}
                />
                <input
                    placeholder="Price Per Night"
                    type="number"
                    required
                    value={price}
                    onChange={updatePrice}
                />
                <input
                    placeholder="Image URL"
                    type="text"
                    value={url}
                    onChange={updateUrl}
                />
                <button type="submit">Update</button>
                {/* should do validationErrors.length > 0 to disable/enable */}
                {/* onClick={(e) => history.push(`/spots/${id}`)} */}
            </form>
        </>
    )

}

export default EditSpot;
