
import './App.css';
import CCCounter from './components/CCCounter';
import FCCounter from './components/FCCounter';
import { useState } from 'react';

function App() {

  let [show,setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={()=>{
        if(show === true){
          setShow(false);

        }else{

          setShow(true);
        };
      
      }}>Toggle Show</button>
      <br></br>
      {show === true ? <FCCounter/> : null}
      {show === true ? <CCCounter/> : null}
     
    </div>
  );
}

export default App;
