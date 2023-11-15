import React, { useEffect } from "react";
import { getPosts } from "../redux/features/post/postAction";
import { getSuggest} from '../redux/features/suggest/suggestAction'
import { useDispatch, useSelector } from "react-redux";
import Avtr from "../assests/avatar.jpeg";
import "./commen.style.css";
import Post from "./Post";
import Suggest from "./Suggest";

// const selectUserName = (state) => state.user.user.data.user.username;
const Home = () => {
  const data = useSelector((state) => state.post?.posts?.data);
  const suggestData = useSelector((state) => state.suggest?.suggests?.data)
  const {loading, error} = useSelector((state) => state.post)


console.log("suggest", suggestData)
  console.log("data", data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSuggest());
    dispatch(getPosts());
    
    
  }, []);
 
  return (
    <>
      <div className="post_section">
        <div className="posts_scorll">
          <div className="story_nav">
            <div>
              <img src={Avtr} alt="avr" className="avtr_img" />
            </div>
            <div>
              <img src={Avtr} alt="avtr" className="avtr_img" />
            </div>
            <div>
              <img src={Avtr} alt="avr" className="avtr_img" />
            </div>
            <div>
              <img src={Avtr} alt="avtr" className="avtr_img" />
            </div>
            <div>
              <img src={Avtr} alt="avr" className="avtr_img" />
            </div>
            <div>
              <img src={Avtr} alt="avtr" className="avtr_img" />
            </div>
            <div>
              <img src={Avtr} alt="avr" className="avtr_img" />
            </div>
            <div>
              <img src={Avtr} alt="avr" className="avtr_img" />
            </div>
          </div>
          <div>
            <Post data ={data} loading={loading}/>
          </div>
        </div>
        {/* <div className="about_user">
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
        </div> */}
        <Suggest suggestData={suggestData}/>
      </div>
    </>
  );
};

export default Home;
