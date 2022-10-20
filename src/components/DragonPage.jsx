import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Gallery from './Gallery';
import '../App.css';

function DragonPage({data, picture}) {
//   const [data, setData] = useState([])
//   const [picture, setPicture] = useState([])
  const [buttonShow, setButtonShow] = useState(false)

  const btnClick = () => {
    setButtonShow(prev => !prev)
  }

//   useEffect(() => { 
//     fetchReq()
//   }, [])

//   async function fetchReq() {
//     const responce = await axios('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f')
//     setPicture(responce.data.flickr_images)
//     setData(responce.data)
//   }
  return(
    <>
      <div className='mainDiv'>
        <Gallery data={picture}/>
        <div className='div'>
          <h1 className='mainTitle'>{data.name}</h1>
          <p className='mainInfo'>{data.description}</p>
          <a className='linkWiki' href={data.wikipedia}>More on Wikipedia</a>
          <div className='divButton'>
            <button className='buttonMore' onClick={btnClick}>
              {buttonShow 
                ? 'Hide More Information'
                : 'Check More Information'
              }
            </button>
            <div>{buttonShow
              ? <div>
                <p>{data.dry_mass_kg} - Killogramms</p>
                <p>{data.height_w_trunk.meters} - meters</p>
                <p>{data.first_flight} - First Flight</p>
              </div>
              : null
            }</div>
          </div>
         </div>
      </div>
      <footer><h1 className='space'>SpaceX</h1></footer>
    </>
  )
}

export default DragonPage;

