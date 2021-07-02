import { Button, Modal, TextField } from "@material-ui/core";
import { useState} from "react";
import axios from "axios";

const UserModal = ({ itsOpenModal, setitsOpenModal, addUser }) => {
  const [firtsName, setfirtsName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const closeModal = () => {
    setitsOpenModal(false);
  };

  const addUserHandler = async () => {
    try {
      const user = await axios({
        url: "http://localhost:3001/users",
        method: "POST",
        data: {
          id: Math.random,
          firstName: firtsName,
          lastName: lastName,
          email: email,
          image: "https://cdn2www.mundo.com/fotos/201503/pug-031-600x456.jpg",
          isActive: true,
        },
      });
      addUser(user);
    } catch (e) {
      console.log(e);
    }
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
          <Button onClick={() => addUserHandler()}>Agregar</Button>
          <Button onClick={closeModal}>Cerrar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
