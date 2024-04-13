import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function LocationListener({ setLocation }) {
    const location = useLocation();

    useEffect(() => {
        setLocation(location);
    }, [location, setLocation]);

    return null;
}

export default LocationListener;