import React, { useEffect, useState } from "react";
import "./App.css";
import Card from './Components/Card/Card';
import axios from 'axios';

// import {url, title, explanation} from './Components/Nasadata'

// import './Components/Nasadata'


// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

function App() {


  const [url, setUrl] = useState();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();

    
  const getData = useEffect(() => {
      
      axios.get('https://api.nasa.gov/planetary/apod?api_key=ZdjlMSkdULLZfaN17x6mvNVNp77501P1xjfEM53K')
      .then( res => {
          
          console.log(res);
          console.log(res.data);
          console.log(res.data.url);

          const imgUrl = res.data.url;
          const dataTitle = res.data.title;
          const dataExplain = res.data.explanation;

          setUrl(imgUrl)
          setTitle(dataTitle)
          setExplanation(dataExplain)
          
      })
      .catch( err => {console.log(err);})
}, [])
  
  return (
    <div className="App">
      
    <Card imageUrl={url} title={title} explanation={explanation} />

    </div>
  );
}

export default App;