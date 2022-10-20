import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import DragonPage from './components/DragonPage';

function App() {
  let url1= 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';
  let url2= 'https://api.spacexdata.com/v4/dragons/5e9d058859b1ffd8e2ad5f90';
  const [data, setData] = useState([])
  const [picture, setPicture] = useState([])
  const [url, setUrl] = useState('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f')
  
  useEffect(() => {
    fetchReq()
  }, [url])

  async function fetchReq() {
    const responce = await axios(url)
    setPicture(responce.data.flickr_images)
    setData(responce.data)
  }

  return(
      <div>
        <div className='change'>
          <button className='btn' onClick={() => setUrl(url1)}>
            <img className='logo' src='https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg'></img>
            <h1 className='btn-h'>Dragon 1</h1>
          </button>
          <h1 className='spaceTitle'>SpaceX</h1>

          <button className='btn' onClick={() => setUrl(url2)}>
            <img className='logo' src='https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg'></img>
            <h1 className='btn-h'>Dragon 2</h1>
          </button>
        </div>
        <DragonPage picture={picture} data={data}/>
      </div>
  )
}
export default App;









// import axios from 'axios';
// import React, {useEffect, useMemo, useState} from 'react';
// import Gallery from './components/Gallery';
// import './App.css';

// function App() {
//   const [data, setData] = useState([])
//   const [picture, setPicture] = useState([])
//   const [buttonShow, setButtonShow] = useState(false)
//   const [i ,setI]=useState(0)
//   const btnClick = () => {
//     setButtonShow(prev => !prev)
//   }
//   // let kar = function() {
//   //   for (let step = 0; step < 1000; step++) {
//   //     // Запускается 5 раз, с шагом от 0 до 4.
//   //     setI(step)
//   //     setI(i-1)
//   //   }
    
//   // }
//   let funcplus = function(){
//     setI(i+1)
//   }
//   let funcminus = function(){
//     setI(i-1)
//   }
//   let kar1 = function() {
//     for (let step = 0; step < 40000; step++) {
//       // Запускается 5 раз, с шагом от 0 до 4.
//       setI(step)
//     }
    
//   }
//   useMemo(() => {
    
//   }, [data])
  
//   useEffect(() => { 
//     fetchReq()
    
//   }, [])
//   async function fetchReq() {
//     const responce = await axios('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f')
//     setPicture(responce.data.flickr_images)
//     setData(responce.data)
//   }
//   return(
//     <>
//      <header><h1 className='space'>SpaceX</h1></header>
//       <div className='mainDiv'>
       
//         <Gallery data={picture}/>
//         <div className='div'>
//           <h1 className='mainTitle'>{data.name}</h1>
//           <p className='mainInfo'>{data.description}</p>
//           <a className='linkWiki' href={data.wikipedia}>More on Wikipedia</a>
//           <div className='divButton'>
            
//             <button className='buttonMore' onClick={btnClick}>
//               {buttonShow 
//                 ? 'Hide More Information'
//                 : 'Check More Information'
//               }
//             </button>
//             <div>{buttonShow
//               ? <div>
//                 <p>{data.dry_mass_kg} - Killogramms</p>
//                 <p>{data.height_w_trunk.meters} - meters</p>
//                 <p>{data.first_flight} - First Flight</p>
//               </div>
//               : null
//             }</div>
          
//           </div>
          
//          </div>
        
//       </div>
//       <footer><h1 className='space'>SpaceX</h1></footer>
//     </>
//   )
// }

// export default App;


