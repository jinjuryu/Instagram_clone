//import React, {Component} from 'react';
import logo from "../image/Instagram_logo.png";
import '../styles/Header.scss';
import searchIcon from "../image/searchIcon.png";
import Menu from "./Menu";
/*
  <img className="searchIcon" src={searchIcon} alt="search icon" />
  <span className="searchText">검색</span>
                   
*/
function Header() {
    
   /* const [comment, setComment] =useState("");

    const onChange = (e) => {
        setComment(e.target.value);    
    }
    const searching = (e) => {
        e.target.placeholder.position="left";
    }*/
    return (
        <div className="header">
            <div className = "container">
                <img className="Top_logo" src = {logo} alt="intsgram logo" />
                <div className="search">
                    <input type="search" src={searchIcon} placeholder="검색" />
                  
                </div>
               <Menu />
            </div>
        </div>
                
    );
}
export default Header;