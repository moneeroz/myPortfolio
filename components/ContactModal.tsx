"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ChangeEvent, useEffect, useState } from "react";
import ContactInputs from "./ContactInputs";
import { CircularProgress } from "@mui/material";
import useEmail from "@/hooks/useEmail";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const ContactModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { sendEmail, loading } = useEmail();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (inputs.firstName && inputs.lastName && inputs.email && inputs.message) {
      return setDisabled(false);
    }

    setDisabled(true);
  }, [inputs]);

  const handleClick = () => {
    sendEmail({ inputs });
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        rel="noopener noreferrer"
        className="bg-gray-100 rounded-lg text-gray-500 font-bold whitespace-nowrap py-3 px-4 hover:text-gray-400 hover:bg-black transition hover:scale-105 duration-300 ease-in-out"
      >
        Contact Me
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">Git in Touch</p>
            </div>
            <ContactInputs
              inputs={inputs}
              handleChangeInput={handleChangeInput}
              handleChangeMessage={handleChangeMessage}
            />
            <button
              className="uppercase bg-orange-500 w-full text-white p-3 rounded text-sm disabled:bg-gray-400"
              disabled={disabled}
              onClick={handleClick}
            >
              {loading ? (
                <CircularProgress color="inherit" size={15} />
              ) : (
                "Sumbit"
              )}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;
