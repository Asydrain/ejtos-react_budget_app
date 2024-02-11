import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const updateLabel = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
        <div className="input-group-text" style={{width: "fit-content", background: "rgb(120, 202, 120)", color: "white"}}>
            <label className="custom-select" id="currencyLabel" htmlFor="inputGroupSelect03">Currency </label>
                  <select className="custom-select" name="currencyDropdown" id="inputGroupSelect03" style={{background: "rgb(120, 202, 120)", color:"white", border: "transparent"}} onChange={updateLabel}>
                        <option style={{background: "rgb(120, 202, 120)", color: "black"}} value="$" name="dollar">$ Dollar</option>
                        <option style={{background: "rgb(120, 202, 120)", color: "black"}} value="£" name="pound" selected>£ Pound</option>
                        <option style={{background: "rgb(120, 202, 120)", color: "black"}} value="€" name="euro">€ Euro</option>
                        <option style={{background: "rgb(120, 202, 120)", color: "black"}} value="₹" name="ruppee">₹ Ruppee</option>
                  </select>

        </div>
    );
};

export default Currency;
