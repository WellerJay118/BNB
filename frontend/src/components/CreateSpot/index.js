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
    const [zip, setZip] = useState(null) //verify zipcode can be null
    const [state, setState] = useState('');
    const [spotName, setSpotName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('0');
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [country, setCountry] = useState('');

    const createGuestCap = (e) => setGuestcap(e.target.value);
    const createAddress = (e) => setAddress(e.target.value);
    const createCity = (e) => setCity(e.target.value);
    const createZip = (e) => setZip(e.target.value);
    const createState = (e) => setState(e.target.value);
    const createSpotName = (e) => setSpotName(e.target.value);
    const createDescription = (e) => setDescription(e.target.value);
    const createPrice = (e) => setPrice(e.target.value);
    const createLat = (e) => setLat(e.target.value);
    const createLng = (e) => setLng(e.target.value);
    const createCountry = (e) => setCountry(e.target.value);




return null;
}

export default CreateSpot;
