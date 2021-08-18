import "../styles/comment.scss";
import {ReactComponent as Like} from "../image/commentlike.svg";
import {ReactComponent as ClickedLike} from "../image/clickedcommentlike.svg";
import {useState} from 'react';
import {firestore} from '../firebase';

function Comment(props) {
    const{ accountName, comment } = props;
    const [likestate, setLikestate] = useState(0);

    function clicked() {
        setLikestate(!likestate);
        //TODO: 하트 눌린 여부 firebase에 반영하기
    }
    //댓글 읽어오기
    return(

        <div className="container">
        <div className="commentContainer">
            <div className="accountName">{accountName}</div>
            <div className="comment">{comment}</div>
        </div>
        <div className="likeContainer">
        {!likestate?<Like onClick={clicked}/>:<ClickedLike onClick={clicked}/>}
        </div>
        </div>
    );
}

export default Comment;

