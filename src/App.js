import React, { useState, useEffect,useContext,createContext } from 'react'
import Loading from './Loading'
import Tour from './Tour';
import Tours from './Tours'
import ReactGA from "react-ga";

const TRACKING_ID="G-655V9J6R77"
ReactGA.initialize(TRACKING_ID);

const url = 'https://course-api.com/react-tours-project'

const TourAPI =createContext();


function App() {
  const [loading, setLoading]= useState(true);
  const[ tours,setTours]= useState([]);

  const removeTour=(id)=>{

    const newTours= tours.filter((tour)=>
      tour.id !== id
    )
    setTours(newTours)

  }
  

  const fetchTours= async () =>{
    setLoading(true);

    try{
    const response = await fetch(url,{mode:'cors'});
    const tours= await response.json();
    console.log("inside try")
    setTours(tours);
    setLoading(false);
    console.log(tours);
    }
    catch(error)
    {
      
      setLoading(false);
      console.log(error);
    }


  };

  useEffect(()=>{

    console.log("before function call")

     console.log(window.location.pathname)
     ReactGA.pageview(window.location.pathname)
     ReactGA.event({
        category:"cake",
        action:"test action",
        label:"test label",
        value:"89"
      })
      console.log("done")
    fetchTours();
    console.log("Inside useEffect")

  },[])
  console.log("beginning");

  if(loading)
  {
    return (
      <main>
      <Loading/>
      </main>
    )
  }

  if(tours.length ===0)
  {
    return <main>
      <div className='title'>
        <h2> No Tours left</h2>
        <button className='btn' onClick={fetchTours}>refresh</button>
      </div>
    </main>
  }
  return (<>
  <TourAPI.Provider value ={{removeTour}}>
  <main><Tours tours={tours} /></main>
  </TourAPI.Provider>
  </>);
}

export  {App,TourAPI}
