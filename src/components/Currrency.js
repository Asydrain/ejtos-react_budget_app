import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency  } = useContext(AppContext);
    const [name, setName] = useState('');
    return (
        <div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Currency (£ Pound)</option>
                        <option value="$ Dollar" name="dollar">$ Dollar</option>
                        <option value="£ Pound" name="pound">£ Pound</option>
                        <option value="€ Euro" name="euro">€ Euro</option>
                        <option value="U+20B9 Ruppee" name="ruppee">U+20B9 Ruppee</option>`
                  </select>

                </div>
                </div>

        </div>
    );
};

export default Currency;