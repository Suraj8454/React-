// import logo from './logo.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <>
     <div className='body_container'>
     <Parallax pages={6} style={{top:0,left:0}} className='animation'>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className='animation_layer effect' id='cloud'>
        {/* <img src='./image/cloud.jpg'/> */}
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2.5}>
      <div className='animation_layer effect' id='second'>
        {/* <img src='./image/python'/> */}
      </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={2.5}>
      <div className='animation_layer effect' id='third'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={2.5}>
      <div className='animation_layer effect' id='fourth'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={2.5}>
      <div className='animation_layer effect' id='fith'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={2.5}>
      <div className='animation_layer effect' id='sixth'></div>
      </ParallaxLayer>

    </Parallax>
     </div>
    </>
  );
}

export default App;
