import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { deleteSpot, editSpot, getSpots } from "../../store/spots";

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
    const [guestCap, setGuestcap] = useState(toEdit?.guestCap);
    const [address, setAddress] = useState(toEdit?.address);
    const [city, setCity] = useState(toEdit?.city);
    const [state, setState] = useState(toEdit?.state);
    const [spotName, setSpotName] = useState(toEdit?.spotName);
    const [description, setDescription] = useState(toEdit?.description);
    const [price, setPrice] = useState(toEdit?.price);
    const [url, setUrl] = useState(toEdit?.Images[0].url);

    const updateGuestCap = (e) => setGuestcap(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateSpotName = (e) => setSpotName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateUrl = (e) => setUrl(e.target.value);

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
        let editedSpot = await dispatch(editSpot(id, payload));
        if(editedSpot) {
            history.push(`/spots/${editedSpot.id}`);
        }
    }
    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteSpot(id))
        history.push('/spots')
    }

    const handleCancel = async(e) => {
        e.preventDefault();
        history.push(`/spots/${id}`);
    }

    return (
        <div className="createSpot__container">
            <div className="createSpot__banner">
                <h1>Edit your Listing</h1>
            </div>
            <div className="createSpot__wrapper">
                <div className="createSpot__form">

                    <label>Location name or title</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Property Name"
                            type="text"
                            required
                            value={spotName}
                            onChange={updateSpotName}
                            />
                        <label>Guests allowed</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Maximum Capacity"
                            type="text"
                            required
                            value={guestCap}
                            onChange={updateGuestCap}
                            />
                        <label>Cost</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Price Per Night"
                            type="number"
                            required
                            value={price}
                            onChange={updatePrice}
                            />
                        <label>Location</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Street Address"
                            type="text"
                            required
                            value={address}
                            onChange={updateAddress}
                            />
                        <input
                            className="createSpot__input-field"
                            placeholder="City"
                            type="text"
                            required
                            value={city}
                            onChange={updateCity}
                            />
                        <input
                            className="createSpot__input-field"
                            placeholder="State"
                            type="text"
                            required
                            value={state}
                            onChange={updateState}
                            />
                        <label>Photo</label>
                        <input
                            className="createSpot__input-field"
                            placeholder="Image URL"
                            type="text"
                            value={url}
                            onChange={updateUrl}
                            />
                        <label>Description</label>
                        <textarea
                            className="createSpot__input--description"
                            placeholder="Description"
                            type="text"
                            required
                            value={description}
                            onChange={updateDescription}
                            />
                        <div className="createSpot__button-container">
                            <button className="createSpot__button" type="click" onClick={handleSubmit}>Update</button>
                            {/* should do validationErrors.length > 0 to disable/enable */}
                            {/* onClick={(e) => history.push(`/spots/${id}`)} */}
                            <button className="editSpot__button-delete" type='click' onClick={handleDelete}>Delete listing</button>
                            <button className="createSpot__button" type='click' onClick={handleCancel}>Cancel</button>
                        </div>

                </div>
           </div>
        </div>
    )

}

export default EditSpot;
