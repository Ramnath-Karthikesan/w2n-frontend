import React, {useState} from 'react'

import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

import { useAlert } from 'react-alert'
import { Convert } from './Convert'

const RecordAudio = () => {

    const alert = useAlert()

    const [record, setRecord] = useState(null)
    const [audioBlob, setAudioBlob] = useState(null)
    const [audioURL, setAudioURL] = useState(null)
    const [uploadStatus, setUploadStatus] = useState(null)
 
    function start() {
      setRecord(RecordState.START)
    }
   
    function stop() {
        setRecord(RecordState.STOP)
    }
   
    //audioData contains blob and blobUrl
    const onStop = (audioData) => {
      setAudioBlob(audioData.blob)
      setAudioURL(audioData.url)
    }

    const handleUpload = async() => {
        
        if (audioBlob != null) {
            
            const data = new FormData();
            data.append('file', audioBlob);
            console.log(audioBlob)
            let response = await fetch('http://localhost:5000/upload',
                {
                  method: 'post',
                  body: data,
                }
            );
            let res = await response.json();

            if (res.status !== 1){
              
              alert.error('Oops there was an error uploading your file!')
            }else{
                setUploadStatus("1")
                alert.success("File uploaded successfully!")
            }
        }
    };  
   
    return (
      <div>
          <h2>Audio Recorder</h2>
          <AudioReactRecorder state={record} onStop={onStop} />
          <button onClick={()=>start()}>Start</button>
          <button onClick={()=>stop()}>Stop</button>
          {audioURL ? (
      			<div className="audio-player">
      				<audio src={audioURL} controls></audio>
      				<a download href={audioURL}>
      					Download Recording
      				</a>
                    <button onClick={handleUpload}>upload</button>
      			</div>
      		) : null}
            {uploadStatus ? <Convert /> : null}
      </div>
    )
}

export default RecordAudio