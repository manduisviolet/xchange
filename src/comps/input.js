import React, { useEffect, useRef, useState } from 'react';
import CryptoItem from "./cryptoItem";


function Input(props) {
    let [cryptoList, setCrypto] = useState([
        {low:"usd", up:"USD"}, 
        {low:"ils", up:"ILS"}, 
        {low:"eur", up:"EUR"}, 
        {low:"btc", up:"BTC"}, 
        {low:"thb", up:"THB"}
    ]);

    const changeFromTo = () => {
        let tmp = props.fromRef.current.value;
        props.fromRef.current.value = props.toRef.current.value;
        props.toRef.current.value = tmp;
        props.convertCrypto();
    }

    return (
        <div className='convert container col-sm-6 col-lg-3 col-7'>
            <div className='d-flex mx-auto pt-4 justify-content-center align-items-center'>
                <select ref={props.fromRef} name="from" className="form-select" defaultValue="usd">
                    {cryptoList.map(item => {
                        return(
                            <CryptoItem crypto={item}/>
                        )
                    })}
                </select>
                <i className="fa fa-exchange mx-4" aria-hidden="true" onClick={changeFromTo}></i>
                <select ref={props.toRef} name="to" className="form-select" defaultValue="ils">
                    {cryptoList.map(item => {
                        return(
                            <CryptoItem crypto={item}/>
                        )
                    })}
                </select>
            </div>
            <label className='d-block text-center my-3'>Count:</label>
            <input className='form-control text-center' type='text' name='count' ref={props.fromValue} defaultValue='1' />
            <button className='my-3' onClick={props.convertCrypto}>CONVERT</button>
        </div>
    );
  }
  
  export default Input;
  