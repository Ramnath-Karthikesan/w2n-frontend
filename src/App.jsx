import { useState } from 'react'


// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import RecordAudio from './components/RecordAudio';
import { FileUpload } from './components/FileUpload';



function App() {

  return (
    <div className="App"  style={{backgroundColor: "#B2B2B2"}}>
      <div className='container' > 
        <div className='row mt-5'>
          <div className='col-lg-6 col-12' >
            
            <FileUpload />
          </div>
          <div className='col-lg-6 col-12' style={{marginBottom: "50px"}}>
            
            <RecordAudio />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
