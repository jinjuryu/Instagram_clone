import "../styles/profiletip.scss"
import ProfileIcon from "./ProfileIcon";
import ReactTooltip from 'react-tooltip';
import test1 from "../image/testimage.png";
import test2 from "../image/profile.png";
import {firestore, storage} from "../firebase";

function Profiletip(props) {
   const {
        username,
        caption,
        post_num,
        follower,
        follow,
        intro,
        posts,
        uid
   }= props;

    return(
        <div className="container">
        <ReactTooltip className="tooltip" clickable arrowColor="transparent" place="bottom" id="tip" effect="solid">
          <div className="profile_1">
            <ProfileIcon uid={uid} iconSize="big"  />
            <div className="namefield">
              <span className="name">{username}</span>
              <span className="caption">{caption}</span>
              <span className="intro">{intro}</span>
            </div>
          </div>
          <div className="profile_2">
            <div className="post">
               <label>게시물</label>
               <br/>
               <span>{post_num}</span>
            </div>
            <div className="follower">
              <label>팔로워</label>
              <br/>
              <span>{follower}</span>
            </div>
            <div className="follow">
              <label>팔로우</label>
              <br/>
               <span>{follow}</span>
            </div>
          </div>
        <div className="profile_3">
          <img src={test1} alt=""/>
          <img src={test2} alt=""/>
          <img src={test1} alt=""/>
        </div>
        
        <div className="profile_4" >
          <button onClick="">메시지 보내기</button>
          <button>팔로잉</button>
        </div>
        </ReactTooltip>
      </div>
    )
}

export default Profiletip;