import {useEffect, useState} from "react";

const MapMarker = (options) => {
    const [marker, setMarker] = useState();

    useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());
        }


        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            window.google.maps.event.clearListeners(marker, 'click')
            marker.setOptions({animation: window.google.maps.Animation.DROP, ...options});

            if(options.onClick){
                window.google.maps.event.addListener(marker, 'click', options.onClick);
            }
        }
    }, [marker, options]);

    return null;
};

export default MapMarker