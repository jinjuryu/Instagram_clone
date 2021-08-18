import Header from './Header';
import Cards from './Cards';
import Sidebar from './Sidebar';
import "../styles/App.scss";
import { firestore } from "../firebase";
import React, { useCallback, setTasks} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

   /* firestore.collection('Users').get()
      .then(docs=>{
        console.log("성공?");
      })
  */

function App() {
 
  return (
  
      <div className="App">
        <Header />
        <main>
          <div className="container">
        
              <Cards />
              <Sidebar />
        
          </div>
        </main>
      </div>

  );
}
export default App;
