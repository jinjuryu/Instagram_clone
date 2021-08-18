import {ReactComponent as Home} from "../image/home.svg";
import {ReactComponent as ClickedHome} from "../image/clickedhome.svg";
import {ReactComponent as DM} from "../image/dm.svg";
import {ReactComponent as Heart} from "../image/heart.svg";
import {ReactComponent as ClickedHeart} from "../image/clickedmenuheart.svg";
import "../styles/Menu.scss";
import ProfileIcon from "./ProfileIcon";
import {firestore, storage} from "../firebase";
import Upload from "../image/upload.png";
import {Link} from 'react-router-dom';
import React from 'react';
import { withRouter } from 'react-router-dom';
import {useState} from 'react';
import {ReactComponent as MenuProfile} from "../image/menu_profile.svg";
import {ReactComponent as MenuSaved} from "../image/menu_saved.svg";
import {ReactComponent as MenuSetting} from "../image/menu_setting.svg";
import {ReactComponent as MenuConvert} from "../image/menu_convert.svg";
//import {Dropdown} from 'react-bootstrap';
/*          
         <Dropdown>
                 <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">프로필</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">저장됨</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">설정</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">계정 전환</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">로그아웃</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
*/
function Menu({history}) {
    let uid = "8WSQHP27tweNPyFPVSrkdC9UDPi1";
    const [profile, setProfile] = useState(0);
    const [homestate, sethomestate] = useState(0);
    const [heartstate, setheartstate] = useState(0);
    const [profilestate, setprofilestate] = useState(0);

    function clickedhome(){
        sethomestate(false);
        setheartstate(false);
        setprofilestate(false);
    }

    function clickedHeart(){
       if(profilestate){
            setprofilestate(!profilestate);
            setheartstate(false);
            sethomestate(false);
        }
        
       else{
           if(!heartstate){
                sethomestate(true);
                setprofilestate(false);
           }
           else{
               sethomestate(false);
               setprofilestate(false);
           }

           setheartstate(!heartstate);
            
          
        }
        
       
    }
    
    function clickedProfile(){
        //window.alert("click");
        if(heartstate){
            sethomestate(false);
            setheartstate(false);
        }
        else{
            setheartstate(false);
            setprofilestate(!profilestate);
            sethomestate(!profilestate);
        }

    }

    storage.ref(uid+`/profile/test1.png`).getDownloadURL().then(function(url){
        setProfile(url);
    });
   
    
    
    return (
      
        <div className="menu">
            {!homestate? <Home className="icon"/>:<ClickedHome className="icon" onClick={clickedhome}/>}
            <DM className="icon" />
             {!heartstate? <Heart className="icon" onClick={clickedHeart} />:<ClickedHeart className="icon" onClick={clickedHeart} />}
            <img src={Upload} alt="upload" onClick={()=>{
                history.push('/Upload')}}/>
            <div onClick={clickedProfile}>
            <ProfileIcon uid={uid} iconSize="small" image={profile} />
            {profilestate ? (<div class="dropdown" >
                <ul>
                <li><MenuProfile/> &nbsp; 프로필</li>
                <li><MenuSaved/>  &nbsp;저장됨</li>
                <li><MenuSetting/>  &nbsp;설정</li>
                <li><MenuConvert/>  &nbsp;계정 전환</li>
                <li>로그아웃</li>
                </ul>
            </div>):""}
            </div>
        </div>
   
    );
}



export default withRouter(Menu);