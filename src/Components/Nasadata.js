// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const [url, setUrl] = useState([]);
// const [title, setTitle] = useState([]);
// const [explanation, setExplanation] = useState([]);

// console.log(url, title, explanation);

//   const getData = useEffect(() => {
      
//       axios.get('https://api.nasa.gov/planetary/apod?api_key=ZdjlMSkdULLZfaN17x6mvNVNp77501P1xjfEM53K')
//       .then( res => {
          
//           console.log(res);
//           console.log(res.data);
//           console.log(res.data.url);

//           const imgUrl = res.data.url;
//           const dataTitle = res.data.title;
//           const dataExplain = res.data.explanation;

//           setUrl(imgUrl)
//           setTitle(dataTitle)
//           setExplanation(dataExplain)
          
//       })
//       .catch( err => {
//           console.log(err);
//       })
// }, [])

// export default {url, title, explanation}