import "../styles/cardMenu.scss";
import {ReactComponent as Like} from "../image/like.svg";
import {ReactComponent as Comment} from "../image/comment.svg";
import {ReactComponent as Share} from "../image/share.svg";
import {ReactComponent as Save} from "../image/save.svg";
import {ReactComponent as ClickedSave} from "../image/clickedsave.svg";
import {ReactComponent as Clickheart} from "../image/clickheart.svg";
import { useState } from 'react';

//<Save className="icon"/>
function CardMenu() {
    const [savestate, setsavestate] = useState(0);
    const [likestate, setlikestate] = useState(0);

    function clickedSave(){
       setsavestate(!savestate);
    }
     function clickedLike(){
       setlikestate(!likestate);
    }

    return(
     

        <div className="cardMenu">
            <div className="Menu1">
                {!likestate? <Like className="icon" onClick={clickedLike}/>:<Clickheart className="icon" onClick={clickedLike}/>}
                <Comment className="icon"/>
                <Share className="icon"/>
            </div>
          
            {!savestate?<Save className="icon" onClick={clickedSave}/>:<ClickedSave className="icon" onClick={clickedSave}/>}
            
        </div>
        
    );
}

export default CardMenu;

