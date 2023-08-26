import { useState } from "react";
import reactLogo from "./assets/react.svg";
import './input.css'
import usePasswordGenerator from "./hooks/usePasswordGenerator";
function App() {
  const [length ,setLength] = useState(4);
  const {generatePassword , password , errorMessage } = usePasswordGenerator()
  const [newPassword , setPassword] = useState("")
  const [checkboxData , setCheckboxData] = useState([
    {title : "Include Uppercase Letters" , state : false},
    {title : "Include LowerCase Letters" , state : false},
    {title : "Include Numbers" , state: false},
    {title : "Include Symbols", state : false}
  ]);
  
  const handleCheckBoxChange = (i : number)=>{
    const updatedCheckBoxData = [...checkboxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state
    setCheckboxData(updatedCheckBoxData);
    console.log(checkboxData)
  }

  const handleCopy = ()=>{
    if(password ==""){
      alert("Please Generate First")
      return;
    }

     navigator.clipboard.writeText(password);
     alert("Copied to ClipBoard")
  }

  const handleGenerate = ()=>{
    generatePassword(checkboxData, length);
    console.log(password)

  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">

    <div className="pass-container p-10">
      <div className="header flex justify-around">
        <div className="title overflow-hidden mr-2">{password}</div>
        <button
          className="copyBtn"
          onClick={handleCopy}
        >
          COPY
        </button>
      </div>
      <div className="charlength">
        <span className="flex">
          <label className="text-white mr-auto mb-4"> Character Length</label>
          <label className="text-sky-400">{length}</label>
        </span>
          <input type="range" 
          min="4"
          max ="100"
          value = {length}
          onChange = {(e:any)=>setLength(e.target.value)}  
          />
      </div>
      <div className="checkboxesn grid grid-cols-2 text-white ">
        {checkboxData.map((item ,key)=>{
          return <div key = {key} className = "">
          <input type="checkbox" onChange={()=>handleCheckBoxChange(key)}   checked={item.state} className="mr-2 mb-4"/>
          <label htmlFor="" >{item.title}</label>
          </div>
        })}
      </div>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <button onClick={handleGenerate} className="generateBtn">Generate Password</button>
    </div>
    </div>
  );
}

export default App;
