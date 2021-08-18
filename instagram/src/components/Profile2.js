import "../styles/profile2.scss";
import ProfileIcon from "./ProfileIcon";
import {storage} from "../firebase";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {useState} from 'react';
import {firestore} from '../firebase';


function Profile2(props) {
    const {
        stroyBorder,
        captionSize,
        uid,
        hideUsername,
        iconSize,
        urlText
    } = props;


    const [username, setUsername] = useState(0);
    const [caption, setCaption] = useState(0);
    const [image, setImage] = useState(0);

    function getInfo(){

        firestore.collection("Users").doc(uid).get().then((doc) => {
            if (doc.exists) {
                setUsername(doc.get("username"));
                setCaption(doc.get("name"));
               
            } else {
               
                console.log("Profile2: No such document!");
            
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

       storage.ref(uid+`/profile/test1.png`).getDownloadURL().then(function(url){
            setImage(url);
        });
     
     } 
    
      
     getInfo();

    return (
       
        <div className="profile">
        <ProfileIcon uid={uid} iconSize={iconSize} stroyBorder={stroyBorder} image={image} />
        
        {(username||caption)&&!hideUsername &&(
            <div className="textContainer">
                <span className="accountName" >{username}</span>
                <span className={`caption ${captionSize}`}>{caption}</span>
                
            </div>
            
        )}
        <a href="/">{urlText}</a>
       
        </div>
        
    );
}

export default Profile2;