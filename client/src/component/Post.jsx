import React from "react";
import Avtr from "../assests/avatar.jpeg";
import { FaRegHeart } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { TbLocationShare } from "react-icons/tb";
import { GoSmiley } from "react-icons/go";
import { FiBookmark } from "react-icons/fi";
import Loader from "../shared/Loader";
import axios from 'axios'

const Post = ({data, loading}) => {

 const deletePost = (index) => {
  
   const post = data.filter((post, ind) => ind !== index)
   alert('not deleted')
   return post
  
 }
  return (
    <>
    {
      loading ? (<Loader style={{backgroundColor:"#fff"}}/>) : (
        <>
        {data && data?.map((post, index) => (
          <div className="post" key={index}>
          <div className="post_header">
            <div className="header_left">
              <img src={Avtr} alt="user" className="post_logo" />
              <p>Professional_js</p>
            </div>
            <BiDotsHorizontalRounded onClick={() =>  deletePost(index)}/>
          </div>
         
          <div className="post_image">
            <img src={post?.image} alt="post" />
          </div>
         
          <div className="like_comment">
            <div className="likes_icons">
              <FaRegHeart /> <BsChat /> <TbLocationShare />
            </div>
            <FiBookmark />
          </div>
         
          <div className="post_discription">
            <span>{post?.likes}</span>
            <p>
             {post?.discription}
            </p>
            <p>view all comments</p>
            <div className="post_comment">
              <p>Add Comment</p>
              <GoSmiley />
            </div>
            <input type="text" className="comment_input" />
          </div>
         </div>
             ))}
             </>
      )
    }
   
     
    </>
  );
};

export default Post;
