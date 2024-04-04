import logo from './logo.svg';
// import './App.css';
import Game from './Game';

function App() {
  function refresh() {
    window.location.reload(false);
  }
// let data= new Date().getHours
// console.log(data)

  return (
    <>
   
      <h2>Slot Game</h2>
      {/* <div className='container'> */}
      <Game />
      <Game />
      <Game />
      <Game />
      <button onClick={refresh}>Click Me</button>
    </>
   
  )
}

export default App;
