import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import test2 from "../image/test2.png";
import test from "../image/test1.png";
import test3 from "../image/test3.png";
import test4 from "../image/test4.png";
import { firestore, storage } from "../firebase";
import {useState} from 'react';

function Cards() {

    const commentsOne = [
        {
            user: "jinju",
            text: "Hi",
            id: 1 ,
        },
        {
            user: "ju",
            text: "Awesome",
            id: 2 ,
        },
    ];
     const commentsTwo = [
        {
            user: "AA",
            text: "Great",
            id: 1 ,
        },
        {
            user: "ju",
            text: "Hello",
            id: 2 ,
        },
    ];

   
    return (
        
        <div className="cards">
        <Stories />

        <Card 
            uid="8WSQHP27tweNPyFPVSrkdC9UDPi1"
            storyBorder={true} 
            image={test2} 
            comments={commentsOne}
            likedByText="jinju" 
            postname="2021.8.3_16:50:29"
            hours={16}
            
        />

     
        </div>
    ); 
}

export default Cards;
