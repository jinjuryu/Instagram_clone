import "../styles/card.scss";
import Profile from "./Profile";
import ProfileIcon from "./ProfileIcon";
import {useState } from 'react';
import {ReactComponent as CardButton} from "../image/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import {ReactComponent as Emoji} from "../image/emoji.svg";
import Profiletip from "./Profiletip";
import {firestore, storage} from "../firebase";
//                <div type="button" disabled={true} className="postText" onClick={postComment} >게시</div>

function Card(props) {
    const{
        storyBorder,
        comments,
        likedByText,
        hours,
        image,
        uid,
        postname,

    } = props;

    const[likedNumber, setLikedNum] = useState(0);
    const[content, setContent] = useState('');

    firestore.collection("Users").doc(uid).collection('posts').doc(postname).collection('likes').get().then((snapshot) => {
            let total_count = 0;
            //let p = [];
            snapshot.forEach((doc) => {
                //p.push(doc.id);
                total_count += 1;
            });
            //setPosts(p);
            setLikedNum(total_count);
            console.log(total_count);
            });

    storage.ref(uid+`/post/`+postname).getDownloadURL().then(function(url){
            setContent(url);
    });    

    const [comment, setComment] =useState("");

    const onChange = (e) => {
        setComment(e.target.value);    
    }
  
    var today = new Date();
    var date = today.getFullYear()+"."+(today.getMonth()+1)+"."+today.getDate()+"_"+today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds();
    
    const cmmt = {
        id: uid,
        text: comment,
        date: today.getFullYear()+"년 "+(today.getMonth()+1)+"월 "+today.getDate()+"일",
        time: today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds()

    };
    function postComment(){
        firestore.collection("Users").doc(uid).collection('posts').doc(postname).collection('comments').doc(date).set(cmmt)
         
    }
    return (
        <div className="card">
            <header>
                <Profile className="profile" uid={uid} iconSize="medium" storyBorder={storyBorder}/>
                <CardButton className="cardButton"/>
            </header>
            <img className="cardImage" src={content} alt="card content" />
        
            <CardMenu />
            
            <div className="likedBy">
                <ProfileIcon iconSize="small" uid={uid} hideAccountName={true}/>
                {{likedNumber}>1?<span>
                    <strong>{likedByText}</strong>님 <strong>외</strong>&nbsp;
                    <strong>{likedNumber-1}명</strong>이 좋아합니다.
                </span>:<span><strong>{likedByText}</strong>님이 좋아합니다.</span>}
            </div>
            
            <div className="comments">
                {comments.map((comment) =>{
                    return(
                        <Comment 
                            key={comment.id}
                            accountName={comment.user}
                            comment={comment.text}
                        />
                    );
                })}
            
            </div>
            <div className="timePosted">{hours}시간 전</div>
            
            <div className="addComment">
                <Emoji className="addemoji"/>
                
                <input type="text" onChange={onChange} placeholder="댓글 달기..."  value={comment} className="commentText"/>
                <button disabled={!comment} className="postText" onClick={postComment} >게시</button>
            </div>
        </div>
        
    )
}

export default Card;
