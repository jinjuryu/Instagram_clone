import "../styles/profileIcon.scss";
import {storage} from "../firebase";
import test2 from "../image/profile.png";
import {useState} from 'react';
function ProfileIcon(props) {
    const { uid, storyBorder, iconSize } = props;

 /*   let uid = '8WSQHP27tweNPyFPVSrkdC9UDPi1';
    storage.ref(uid+`/profile/profile.png`).getDownloadURL()
    .then(function(url) {
        var img = document.getElementById('myimg');
        img.src = url;
    });
*/
    const [image, setImage] = useState(0);
    storage.ref(uid+`/profile/test1.png`).getDownloadURL().then(function(url){
                setImage(url);
    });
       
    return ( 
    <div className={storyBorder ? "stroyBorder" : ""}>
        <img className={`profileIcon ${iconSize}`} src={image} id="myimg" alt="profile"/>
    </div>
    );
}

export default ProfileIcon;