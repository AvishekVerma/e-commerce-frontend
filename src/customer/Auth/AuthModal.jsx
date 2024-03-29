import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

const AuthModal = ({handleClose, open}) => {
    const location = useLocation();
    
    // const { auth } = useSelector((store) => store);
    // useEffect(() => {
    //   if (auth.user) handleClose();
    // }, [auth.user]);

    return (
      <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        size="large"
      >
        <Box className="rounded-md" sx={style}>
            {location.pathname === "/login" ? <LoginForm/> : <RegisterForm/>}
        </Box>
      </Modal>
      
      </>
      
    );
}

export default AuthModal