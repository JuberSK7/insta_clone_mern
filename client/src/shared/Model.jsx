import Button from "react-bootstrap/Button";
import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { createPost } from "../redux/features/post/postAction";
import { useDispatch } from "react-redux";

export function MyVerticallyCenteredModal(props) {
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [discription, setDiscription] = useState("");
  const [likes, setLikes] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({image:imageSrc, discription: discription, likes:likes}));
    setImageSrc("");
    setDiscription("");
    setLikes("")
    props.onHide()
  };


  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        if (event.target.result) {
          setImageSrc(event.target.result);
        } else {
          alert("Error Occurred");
        }
      };
    }
  };


  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a new post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="create_post-form" onSubmit={handleSubmit}>
          <div className="post_selected_file">
            <input
              type="file"
              accept="image/*"
              className="hide_input"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <lable
              htmlFor="fileInput"
              className="uploadButton"
              onClick={handleFileUpload}
            >
              {imageSrc ? "Change here" : " Upload here"}
            </lable>
            <img
              src={imageSrc ? imageSrc : " "}
              className={imageSrc ? "selected_post_img" : ""}
            />
          </div>

          <input
      
            placeholder="Description"
            className="discription_text"
            type="text"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
          
          <input
        
            placeholder="likes"
            className="discription_text"
            type="text"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
          />

          <button type="submit" closeButton className="create_post_btn">
            Share Post
          </button>
        </form>
      </Modal.Body>

    </Modal>
  );
}
