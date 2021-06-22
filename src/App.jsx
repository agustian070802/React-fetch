import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Card from "./components/card/Card"
import { Switch, Route } from "react-router-dom"
import SideMenu from "./components/sidemenu/SideMenu"

function App() {

  let [ userData, setUserData ] = useState([
    {
      id : 1,
      image : "https://picsum.photos/seed/12/200",
      username : "endy",
      name : "endy",
      email : "endy@gmail.test",
      phone : "0897867",
      website : "endy.surge.sh"
    },
    {
      id : 2,
      image : "https://picsum.photos/seed/14/200",
      username : "yosi",
      name : "yosi",
      email : "yosi@gmail.test",
      phone : "0897867",
      website : "yosi.surge.sh"
    },
    {
      id : 3,
      image : "https://picsum.photos/seed/13/200",
      username : "agustian",
      name : "agustian",
      email : "agustian@gmail.test",
      phone : "0897867",
      website : "agustian.surge.sh"
    } 
  ])

  //data dari api
  let [apiData, setApiData ] = useState([])

  //menjalankan function sebelum component terender
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users', {
      method : "GET",
      mode : 'cors',
      headers : {
        "Content-type" : "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setApiData(data)
    })
    .catch(err => console.log(err))

    //cleaner atau unsubscribe
    return ()=>{}
  }, [])

  return (

    <div className="App">
      
      <Navbar />
      <SideMenu />
      
      <header className="App-header">

        <Switch>
          <Route path="/contact">
            <div class="alert alert-primary" role="alert">
              Ini link untuk menuju<a href="/contact" class="alert-link">page contact</a>
            </div>
          </Route>

          <Route path="/about">
            <div class="alert alert-secondary" role="alert">
              Ini link untuk menuju<a href="/about" class="alert-link">page about</a>
            </div>
          </Route>

          <Route path="/blog">
            <div class="alert alert-danger" role="alert">
              Ini link untuk menuju<a href="/blog" class="alert-link">page blog</a>
            </div>
            { apiData.map((e)=>{

              return(
                <Card 
                  key = { e.id }
                  image={ `https://picsum.photos/seed/${e.phone}/200` }
                  username={ e.username }
                  name={ e.name }
                  phone={ e.phone }
                  website= { e.website }
                  email={ e.email }
                />
              )

              }) }
          </Route>

          <Route path="/">

          { apiData.map((e)=>{

            return(
              <Card 
                key = { e.id }
                image={ `https://picsum.photos/seed/${e.phone}/200` }
                username={ e.username }
                name={ e.name }
                phone={ e.phone }
                website= { e.website }
                email={ e.email }
              />
            )

            }) }

          </Route>

        </Switch>
        
        

      </header>
    </div>

  );
}

export default App;
