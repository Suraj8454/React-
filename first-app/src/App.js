// import logo from './logo.svg';
import './App.css';
import './component/Main.css';
import Nav from './component/Nav';
import Main from './component/Main';


function App() {
  function darking() {
    document.body.style.backgroundColor = "grey";
    document.getElementById("light").style.opacity = 1;
    document.getElementById("dark").style.opacity = 0;
    document.getElementById("navbarcolor").style.backgroundColor = "black";
    document.getElementById("navbarcolor").style.color = "white";


  }

  function lighting() {
    document.body.style.backgroundColor = "white";
    document.getElementById("light").style.opacity = 0;
    document.getElementById("dark").style.opacity = 1;
    document.getElementById("navbarcolor").style.backgroundColor = "aqua";
    document.getElementById("navbarcolor").style.color = "black";

  }
  return (
    <>

      <Nav />
      <Main/>
      {/* <div>
        <button id='dark' onClick={darking}></button>
        <button id='light' onClick={lighting}></button>
      </div>  */}
      <p className='copy'>Copy Right - <span>Suraj-2024</span></p>


    </>
  );
}

export default App;
