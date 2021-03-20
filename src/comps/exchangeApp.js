import { useEffect, useRef, useState } from "react";
import {doApiGet, URL_API} from "../services/api";
import Input from "./input";
import Score from "./score";


function ExchangeApp(props) {
    
    let [currencies, setCurr] = useState([]);
    let [date, setDate] = useState(0);
    let fromRef = useRef('usd');
    let toRef = useRef('ils');
    let fromValue = useRef(1);
    let toValue = useRef();
    

    useEffect(() => {
        doApiCurr();
        getDate();
    },[]);

    useEffect(() => {
        convertCrypto();
    },[currencies]);
    
    const getDate = () => {
        date = new Date();
        date = date.getDate() + "/" + (date.getMonth() + 1) + "/" +  date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        setDate(date);
    }

    const doApiCurr = async () => {
        let data = await doApiGet(URL_API);
        setCurr(data.quotes);
    }

    const convertCrypto = async () => {
        document.getElementById("fromCur").innerHTML = fromRef.current.value.toUpperCase();
        document.getElementById("toCur").innerHTML = toRef.current.value.toUpperCase();
        document.getElementById("fromValue").innerHTML = fromValue.current.value;
        let countResult = Number(currencies["USD" + toRef.current.value.toUpperCase()]) *
                          Number(fromValue.current.value) /
                          Number(currencies["USD" + fromRef.current.value.toUpperCase()]);
        console.log(countResult);
        document.getElementById("toValue").innerHTML = countResult;
    }

    return (
        <main className='container-fluid'>
            <div className='date container d-flex justify-content-center align-items-center'>
                <p id='date'>Date: {date}</p>
            </div>
            <div className='row justify-content-center'>
                <Input fromRef={fromRef} toRef={toRef} fromValue={fromValue} toValue={toValue} convertCrypto={convertCrypto}/>
                <Score fromRef={fromRef}  />
            </div>
        </main>
    );
  }
  
  export default ExchangeApp;
  


