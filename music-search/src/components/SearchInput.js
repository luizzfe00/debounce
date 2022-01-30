import React, { useState } from "react";
import useDebounce from "./Debounce";
import '../styles/input.css';

const DebounceInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 1000);

    function handleChange(event) {
        const { value } = event.target;
        setDisplayValue(value);
        debouncedChange(value);
    }

    return (
        <>
            <input
                className="debounce-input"
                type="search"
                value={displayValue}
                onChange={handleChange}
            />
        </>
    );
};

export default DebounceInput;
