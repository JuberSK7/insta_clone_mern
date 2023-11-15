import React, { useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Insta_logo from "../assests/instan_logo-r.png";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyVerticallyCenteredModal } from "../shared/Model";


const Aside = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="aside_main">
        <ul className="aside_list">
          <img src={Insta_logo} alt="logo" className="aside_logo" />
          <li>
            <AiFillHome className="list_icon" />
            Home
          </li>
          <li>
            <BiSearch className="list_icon" />
            Search
          </li>
          <li>
            {" "}
            <MdOutlineExplore className="list_icon" />
            Explore
          </li>
          <li>
            <TfiVideoClapper className="list_icon" />
            Reels
          </li>
          <li>
            <FaFacebookMessenger className="list_icon" />
            Messages
          </li>
          <li>
            <FaRegHeart className="list_icon" />
            Notification
          </li>
          <li onClick={() => setModalShow(true)}>
            <FaRegPlusSquare className="list_icon" />
            Create
          </li>
          <li>
            <FaUserCircle className="list_icon" />
            Profile
          </li>
          <li>
            <FiMenu className="list_icon" />
            More
          </li>
        </ul>
      </div>
      <div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
};

export default Aside;
