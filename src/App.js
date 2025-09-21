// import logo from './logo.svg';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import './App.css';
import './Appa.css';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enale or not 

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
}

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark Mode"
      
      // setTimeout(() => {
      //   document.title="TextUtils is amazing."
      // }, 2000);
      // setTimeout(() => {
      //   document.title="Install Textutils now."
      // }, 2000);
  } 
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils - Light Mode"
  }
}


// This is done by using react router dom comment out to check react router dom 

//   return (
//     // <Router>
//       {/* understanding props and propsTypes vd.no.6*/}
//       <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> 

//       {/* understanding state and handling events vd.no.7 */}
//       <Alert alert={alert}/>

//       <div className="container my-3">
//         {/* <Routes> */}
//           {/* <Route exact path="/about" element={<About />} /> */}
//           {/* <Route exact path="/" element={ */}
//             <TextForm showAlert={showAlert} heading="Enter the text to analyze below... " mode={mode} />
//             {/* } */}
//         {/* </Routes> */}
//       </div>
//     // </Router>
//   );
// }

return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below... " mode={mode} />
      </div>
    </>
  );
}




export default App;


















