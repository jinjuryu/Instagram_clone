import "../styles/sidebar.scss";
import Profile2 from "./Profile2";
import image from "../image/profile.png"
import Sticky from "react-sticky-el";
import { firestore, storage } from "../firebase";
import {useState} from 'react';

function Sidebar(){
    let uid = "8WSQHP27tweNPyFPVSrkdC9UDPi1";
    /*const [username, setUsername] = useState(0);
    const [caption, setCaption] = useState(0);
    const [profile, setProfile] = useState(0);

    function getInfo(ref) {
  //      var map = new HashMap();
    
        ref.get().then((doc) => {
            if (doc.exists) {
                setUsername(doc.get("username"));
                //console.log("Document data:", doc.data());
                setCaption(doc.get("name"));
                //return userinfo.username;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return "none";
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        
    }

    getInfo(firestore.collection("Users").doc(uid));

    function getImage(uid){
        storage.ref(uid+`/profile/test1.png`).getDownloadURL().then(function(url){
            setProfile(url);
        });
    }

    getImage(uid);
    */
    return (
        
        <Sticky topOffset={-80}>
            <div className="sidebar">
            
                <Profile2 
                    urlText="전환"
                    iconSize="big"
                    uid={uid}
                />
                
            </div>
        </Sticky>
    ); 
}

export default Sidebar;
