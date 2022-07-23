import React, { useState } from 'react'
import Combobox from "react-widgets/Combobox";
import './swappage.css'
import Popup from './Popup'
import Navbar from '../navbar/Nav'

function BuyCrypto() {
    const [value, setValue] = useState('');
    const [valueA, setValueA] = useState('');


    const handleChange = (event) => {
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
        console.log(value)
    };

    const handleChangeA = (event) => {
        const result = event.target.value.replace(/\D/g, '');
        setValueA(result);
        console.log(valueA)
    };
    return (
        <section id='Swap'>
            <div className='container-D'>
                <div className='header_name'>
                    SWAP CRYPTO
                </div>
                <Navbar />
                <div className='logo-button' />

                <div className='ksh'>
                    <Combobox className='combo'
                        disablePortal
                        defaultValue="Yellow"
                        data={["Red", "Yellow", "Blue", "Orange"]}
                    />

                    <div className='ksh-from'>from</div>
                    <div className='ksh-amount'>Amount</div>
                    <div><input type="text" placeholder="0" className="input-ksh-amount" value={value}
                        onChange={handleChange} /></div>
                </div>

                <div className='toCUSD'>
                    <div className='to-Text'>To</div>
                    <div className='CUSD-text'>CUSD</div>
                    <div className='cUSD-amount'>Amount</div>
                    <div><input type="text" placeholder="0" className="input-CUSD-amount" value={valueA}
                        onChange={handleChangeA} /></div>
                </div>

                <Popup />
            </div>
        </section>
    )
}

export default BuyCrypto
