import { Button, Modal, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";

const UserModal = ({ itsOpenModal, setitsOpenModal, handler, users }) => {
  const [firtsName, setfirtsName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const closeModal = () => {
    setitsOpenModal(false);
  };

  const addUserHandle = () => {
    try {
      const response = axios({
        url: "http://localhost:3001/users",
        method: "POST",
        data: {
          id: Math.random,
          firstName: firtsName,
          lastName: lastName,
          email: email,
          image:
            "https://www.bunko.pet/__export/1611708686389/sites/debate/img/2021/01/26/9_datos_interesantes_sobre_los_perros_pug_que_tal_vez_no_sabxas.jpeg_1404015752.jpeg",
          isActive: true,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
    setitsOpenModal(false);  
  };

  return (
    <Modal open={itsOpenModal}>
      <div className="add-user-modal">
        <h1>Agregar Usuario</h1>
        <div>
          <TextField
            className="user-modal-input"
            variant="outlined"
            label="first name"
            onChange={(e) => setfirtsName(e.target.value)}
          ></TextField>
          <TextField
            className="user-modal-input"
            variant="outlined"
            label="lastn name"
            onChange={(e) => setlastName(e.target.value)}
          ></TextField>
          <TextField
            className="user-modal-input"
            variant="outlined"
            label="email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </div>
        <div className="actions">
          <Button onClick={() => addUserHandle()}>Agregar</Button>
          <Button onClick={closeModal}>Cerrar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
