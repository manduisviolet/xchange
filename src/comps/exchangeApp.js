import { useEffect, useRef, useState } from "react";
import {doApiGet, URL_API} from "../services/api";
import Input from "./input";
import Score from "./score";


function ExchangeApp(props) {
    
    let [currencies, setCurr] = useState([]);
    let fromRef = useRef();
    let toRef = useRef();

    useEffect(() => {
        doApiCurr();
    },[]);
    
    const doApiCurr = async () => {
        let data = await doApiGet(URL_API);
        setCurr(data.quotes);
        
    }

    const convertCrypto = async () => {
        console.log(fromRef.current.value);
        console.log(toRef.current.value);
    }

    return (
        <main className='container-fluid'>
            <div className='date container d-flex justify-content-center align-items-center'>
                <p>Date: 17.03.2021</p>
            </div>
            <div className='row justify-content-center'>
                <Input fromRef={fromRef} toRef={toRef} convertCrypto={convertCrypto}/>
                <Score/>
            </div>
        </main>
    );
  }
  
  export default ExchangeApp;
  


