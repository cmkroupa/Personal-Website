import React from "react";
import "./Switch.css";

type SwitchProps = {
    checked: boolean;  // The checked state passed from parent
    onToggle: (checked: boolean) => void; // Function to handle state changes
};

export default function Switch({ checked, onToggle }: SwitchProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onToggle(event.target.checked); // Notify parent of state change
    };

    return (
        <div className="switch-container">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={checked}  // Use the checked prop to control the checkbox
                    onChange={handleChange}
                />
                <span className="slider"></span>
                
            </label>
            <div className="switch-category">
                {
                    (checked) ? (
                        <h5>In Progress</h5>
                    ) : (
                        <h5>Completed</h5>
                    )
                }
            </div>
        </div>
    );
}
