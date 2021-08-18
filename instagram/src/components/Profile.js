import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import {storage} from "../firebase";
import { useState } from 'react';
import Profiletip from "./Profiletip";
import {firestore, stoarge} from "../firebase";

function Profile(props) {
    const {
        iconSize,
        stroyBorder,
        uid,
        hideUsername,
    
    } = props;

    
    const [username, setUsername] = useState(0);
    const [caption, setCaption] = useState(0);
    const [image, setImage] = useState(0);
    const [follower, setFollower] = useState(0);
    const [follow, setFollow] = useState(0);
    const [intro, setIntro] = useState(0);
    const [post_num, setPostnum] = useState(0);
    const [followers, setFollwers] = useState(0);
    const [follows, setFollws] = useState(0);
    //const [posts, setPosts] = useState(0);

    function getInfo(){

        firestore.collection("Users").doc(uid).get().then((doc) => {
            if (doc.exists) {
                setUsername(doc.get("username"));
                setCaption(doc.get("name"));
                //setFollower(doc.get("follower"));
                //setFollow(doc.get("follow"));
                setIntro(doc.get("intro"));
                setFollwers(doc.get("follwers"));
                setFollower(doc.get("followers").length);
                setFollws(doc.get("follws"));
                setFollow(doc.get("follows").length);

            } else {
               
                console.log("Profile: No such document!");
            
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

      /* storage.ref(uid+`/profile/test1.png`).getDownloadURL().then(function(url){
            setImage(url);
        });
     */
        firestore.collection("Users").doc(uid).collection('posts').get().then((snapshot) => {
            let total_count = 0;
            //let p = [];
            snapshot.forEach((doc) => {
                //p.push(doc.id);
                total_count += 1;
            });
            //setPosts(p);
            setPostnum(total_count);
            console.log(total_count);
            });
        
      
            
     } 
    
      
    getInfo();

    return (
        <div className="profile">
        <ProfileIcon uid={uid} iconSize={iconSize} data-tip data-for="tip" stroyBorder={stroyBorder} image={image}/>
       
        {(username||caption)&&!hideUsername &&(
            <div className="textContainer">
                <span className="accountName" data-tip data-for="tip">{username}</span>
                <Profiletip username={username} uid={uid} caption={caption} post_num={post_num} intro={intro} follower={follower} follow={follow} />
                
            </div>
            
        )}
        
        </div>
        
    );
}

export default Profile;