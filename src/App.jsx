import { useCallback, useEffect, useState , useRef} from 'react'
import Cards from './components/Cardy'
import Inputbox from './components/Input'
import { data } from 'autoprefixer';
import useCurrencyInfo from './hook/useCurrencyInfo';
function App() {
  let [input1 , setInput1] = useState("");
  let [input2 , setInput2] = useState("");
  let [currency1 , setCurrency1] = useState("usd");
  let [currency2 , setCurrency2] = useState("inr");
  let [currData , setCurrData] = useState([]);
  let data1 = useCurrencyInfo(currency1);
  let data2 = useCurrencyInfo(currency2);
  let options1 =  Object.keys(data1);
  let options2 =  Object.keys(data2);
  
  function Clear (){
    setInput1("");
    setInput2("");
  }

  useEffect(()=>{
    Change();
  },[input1,input2,swap])

  function Change (){
    let conversion = input1 * data1[currency2];
    setInput2(conversion);
  }

  function onCurrency1Change (e){
    setCurrency1(e.target.value);
  }

  function onCurrency2Change (e){
    setCurrency2(e.target.value);
  }


  function swap (){
    setInput1(input2);
    setInput2(input1);
    setCurrency1(currency2);
    setCurrency2(currency1);
  }

  function i1Change (e){
    setInput1(()=>e.target.value);
    console.log("i1 changed");
  }

  function i2Change (e){
    setInput2(e.target.value);
    console.log("i2 changed")
  }

  return (
    <>
    <Inputbox
    inputValue1={input1}
    inputValue2={input2}
    onInput1Change={i1Change}
    onInput2Change={i2Change}
    onSwap={swap}
    currency1={currency1}
    currency2={currency2}
    oncurrency1Change={onCurrency1Change}
    oncurrency2Change={onCurrency2Change}
    currOptions1 ={options1}
    currOptions2 = {options2}
    onConvert={Change}
    onClear={Clear}
    ></Inputbox>
    </>
  )
}

export default App
