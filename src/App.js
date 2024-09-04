import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');//// weather darkmode ennable or not  (`bcktick`)
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enable","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable","success")
    }
  }
  return (
  <>

 <BrowserRouter>
     <Navbar title="TextUtils" aboutText="ABOUT US" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm showAlert = {showAlert} heading="Enter the text" mode={mode}/>
              }
            ></Route>
            
      </Routes>
    </div>
</BrowserRouter>
{/* <Navbar title="TextUtils" aboutText="ABOUT US" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert = {showAlert} heading="Enter the text" mode={mode}/>
</div> */}
 
  </>
  );
}

export default App;
