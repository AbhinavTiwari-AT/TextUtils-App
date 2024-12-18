import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  
  return (
  <>
   
  <Navbar title="TextUtils" AboutText="About"/>
  <div className="container">
 <TextForm heading= "Enetr the text to analyse below" />
  {/* <About/> */}
  </div>
   </>
)
}

export default App
