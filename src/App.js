import { useState } from 'react';
import './App.css';

function App() {

  const [taskArray,setTaskArray]=useState ([]);
  const [value,setValue] = useState('');

  return (
    <div className={'p-2'}>

     <h1 className={'text-center p-10'}>Simple Task App</h1> 
     <div className={'d-flex gap-2'}>
        <input type='text' className='form-control' value={value}  placeholder='Enter Something to Add' onInput={(e)=>{
          setValue(e.target.value)
        }} ></input>
        <button className='btn btn-primary' 
          onClick={()=>{
            setTaskArray([...taskArray,value]);
            setValue('');
            
    }
       }>ADD</button>
     </div> 
     <div>
        {taskArray.map(task => <div>{task}</div>)}
     </div>
    </div>
 
  );
}

export default App;
