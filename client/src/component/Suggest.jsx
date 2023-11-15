import React from 'react'
import Avtr from "../assests/avatar.jpeg";
import "./commen.style.css";

const Suggest = ({suggestData}) => {
  return (
    <>
       <div className="about_user">
          <div className="about_profile">
            <div className="profile_name">
              <img src={Avtr} alt="avtr" />{" "}
              <span className="profile_details">
                <p className="about_username">professioanl_js</p>
                <p className="about_name">Shaikh Zubair</p>
              </span>
            </div>
            <p className="profile_switch">switch</p>
          </div>
          <div className="suggest_users">
            <p>Suggested for you</p>
            <p>See All</p>
          </div>
          {
            suggestData && suggestData?.map((suggest) => (
              <div className="suggest_users">
              <div className="suggest_username">
                <img src={suggest.image} alt="suggest_usr" className="suggest_user_img" />{" "}
                <span>
                  <p className="suggest_userid">{suggest.username}</p>
                  <p className="suggest_userfullname">{suggest.name}</p>
                </span>
              </div>
              <p className="suggest_user_follow">follow</p>
            </div>
            ))
          }
        </div>
      
    </>
  )
}

export default Suggest
