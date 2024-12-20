import React,{ useState } from 'react';
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  
  const [mode, setmode] = useState(`light`); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },2000);

  }

   const toggleMode=()=>{
    if(mode === 'light')
    {
      setmode('dark')
      document.body.style.backgroundColor ="#042743";
      showAlert("Dark mode has been enabled","success");
      document.title = 'Text Utils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'Text Utils is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title ='Install Text Utils Now'
      // },1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled","success");
      document.title = 'Text Utils - Light Mode';

    } 
   }

  return (
  <>
  {/*<Navbar title="TextUtils" AboutText="About"/>*}
  {/* <Navbar/> */}
  <Navbar title = "TextUtils" mode={mode} toggleMode ={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading= "Enter the text to analyse below" mode={mode}/>
  {/* <About/> */}
  </div>
   </>
);
}

export default App
