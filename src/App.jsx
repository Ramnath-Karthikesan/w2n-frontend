import { useState } from 'react'


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import RecordAudio from './components/RecordAudio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container'> 
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <h2>File uploader</h2>
          </div>
          <div className='col-lg-6 col-12'>
            
            <RecordAudio />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
