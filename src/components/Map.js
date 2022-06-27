import {Children, cloneElement, isValidElement, useEffect, useRef, useState} from "react";

const Map = ({center,  zoom, onClick, children, style})  => {
    const ref = useRef();
    const [map, setMap] = useState(null)


    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    useEffect(() => {
        if (map) {
            map.setOptions({center, zoom})
        }
    }, [map, center, zoom]);

    useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                window.google.maps.event.clearListeners(map, eventName)
            );

            if (onClick) {
                map.addListener("click", onClick);
            }
        }
    }, [map, onClick]);

    return (
        <div ref={ref} id="map" style={{height: '500px', ...style}}>
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child, {map});
                }
            })}
        </div>
    );
}

export default Map;