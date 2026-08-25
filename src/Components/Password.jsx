import "./Password.css";
import {useState} from "react";


function Password(){
    const [length,setlength] = useState(8);
    const [numbers, setnumbers] = useState(false);
    const [char, setchar] = useState(false);
    const [password, setpassword] = useState("");
    const [copied, setcopied] = useState(false);

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // pass generation logic
    const generatePassword =() =>{
        let charpool = letters;
        if(numbers){
            charpool+= nums;
        }
        if(char){
            charpool+= symbols;
        }

        let password = "";
        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random()*charpool.length);
            password +=charpool[randomIndex];

        }

        setpassword(password);
    };

    // copy to clipboard logic
    const copytoclipboard = ()=>{
        navigator.clipboard.writeText(password);
        setcopied(true);

         setTimeout(() => {
    setcopied(false);
  }, 2000);
    };

    return(
<div className="password-container">
  <h1 className="title">Password Generator</h1>
  <div className="password-box">
  <input className="password-input" type = "text" placeholder ="Generate Password" value = {password} readOnly></input>
  <button className="copy-btn"  onClick={copytoclipboard}  disabled={!password}> {copied ? "✓ Copied!" : "Copy"}</button>
  </div>
  <div className="length-section">
  
  
    <div className="length-header">
          <p>Length: {length}</p>
          </div>
          <div className="length-slider">
    <input
    type = "range"
min = "8"
max = "20"
value = {length}
 onChange={(e) => setlength(Number(e.target.value))}
    />
    </div>
      </div>
<div className="options">
  <div>
     <label className="option">
    <input type ="checkbox" checked={char} onChange={(e)=> setchar(e.target.checked)}/>Include Characters</label>
  </div>

   <div>
     <label className="option">
    <input type = "checkbox" checked={numbers} onChange={(e)=> setnumbers(e.target.checked)}/>Include Numbers</label>
  </div>
  </div>

  <button className="generate-btn"  onClick={generatePassword}>Generate Password</button>
</div>
    )
}
export default Password;