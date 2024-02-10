import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const updateLabel = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
        <div class="custom-select">
            <label id="currencyLabel">Currency {newCurrency}</label>
                  <select id="currencyDropdown" onChange={updateLabel}>
                        <option value="$ Dollar" name="dollar">$ Dollar</option>
                        <option value="£ Pound" name="pound">£ Pound</option>
                        <option value="€ Euro" name="euro">€ Euro</option>
                        <option value="₹ Ruppee" name="ruppee">₹ Ruppee</option>
                  </select>

        </div>
    );
};

export default Currency;
