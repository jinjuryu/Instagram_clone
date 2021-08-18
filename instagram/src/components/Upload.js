import "../styles/upload.scss";
import {useState} from 'react';
import Default from '../image/default.jpg';
import { firestore, storage } from "../firebase";


  function  Upload({props, history}) {
    const [imgSrc, setImgSrc] = useState(Default);
    let today = new Date();
    var date = today.getFullYear()+"."+(today.getMonth()+1)+"."+today.getDate()+"_"+today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds();
    

    const onChangeHandle = (evt)=>{
        if(evt.target.files.length){
            var imgTarget = (evt.target.files)[0];
            var fileReader = new FileReader();
            
            fileReader.readAsDataURL(imgTarget);
            fileReader.onload = function(e) {
              setImgSrc(e.target.result);
              
            }
        }else{
            setImgSrc(Default);
        }
        
    }

  
     const onHandleSubmit = async (evt) => {
        evt.preventDefault();
        const object = new FormData();
        object.append('img',evt.target.img.files[0]);
        object.append('userImg',evt.target.userImg.attributes.src.value);
       
        try{
            console.log(object);
            
        }catch(e){
            console.log(e);
        } 
        
    }

    function post(){
        if(window.confirm("게시물을 공유하시겠습니까?") === true){
           uploads();
        }
      
        else
            return;
    }
  
    
  function uploads() {
    
      var textarea = document.getElementById("myTextarea").value;

      const data = {
        text:textarea,
        date: today.getFullYear()+"년 "+(today.getMonth()+1)+"월 "+today.getDate()+"일",
        time: today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds()

      };


      if(imgSrc === Default){
        window.alert("사진을 선택하세요");
        return;
      }
          
      else{
        var imgTarget = (document.getElementById("fileInput").files)[0];
        firestore.collection("Users").doc("8WSQHP27tweNPyFPVSrkdC9UDPi1").collection("posts").doc(date).set(data);
        
        storage.ref(`8WSQHP27tweNPyFPVSrkdC9UDPi1/post/`+date).put(imgTarget)
        .then(function(snapshot) {
        console.log('Uploaded');
        });
        history.push('/');
      }
      

      //imgsrc Default로 변경 또는 페이지 나가기
    }

    return(
   

    <div className="upload">
    <form onSubmit={onHandleSubmit}/>
        <div className="image">
            <div className="preview">
                <img src={imgSrc} alt=""/>  
            </div>

            
               
        </div>
        <div className="write">
            <input type="file" id="fileInput" name="img" onChange={onChangeHandle}/>
            <textarea rows="25" id="myTextarea" placeholder="문구입력..."></textarea>
            <button type="submit" onClick={post}>공유</button>
        </div>
    </div>
    
    )
}

export default Upload;