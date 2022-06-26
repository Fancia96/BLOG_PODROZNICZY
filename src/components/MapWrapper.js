import {Status, Wrapper} from "@googlemaps/react-wrapper";
import Map from "./Map";
import MapMarker from "./MapMarker";

const render = ({status}) => {
    if (status === Status.LOADING) return <h3>{status}</h3>;
    if (status === Status.FAILURE) return <h3>{status}</h3>;
    return null;
};

const MapWrapper = ({markers, onMarkerClick, onMapClick}) => {
    const center = { lat: 52, lng: 19.390191 };
    const zoom = 6;
    return (
        <Wrapper apiKey={"AIzaSyCsREJH_-KjUZ6Gnw3VIUYUzf6IV5lXlpo"} render={render}>
            <Map center={center} zoom={zoom} onClick={onMapClick}>
                {markers.map(m => <MapMarker position={m.position} onClick={onMarkerClick ? (e) => onMarkerClick(m) : null} key={m.id} />)}
            </Map>
        </Wrapper>
    )
}

export default MapWrapper;