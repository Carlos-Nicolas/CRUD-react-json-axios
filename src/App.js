import "./App.css";
import Header from "./Components/UI/Header";
import UserModal from "./Components/UI/UserModal";
import UserList from "./Components/UsrListFolder/UserList";
import { useEffect, useState } from "react";
import axios from "axios";

  //usestate
  //use reducer
  //use context
  // use efects

function App() {
  const baseUrl = "http://localhost:3001/users";
  const [usrList, setUsrList] = useState([]);

  const [itsOpenModal, setitsOpenModal] = useState(false);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setUsrList(res.data);
    });
  }, []);



  const userDesactivateHandlder = (id, status) => {
    // try {
    //   const response = axios({
    //     url: `${baseUrl}/${id}`,
    //     method: "PUT",
    //     data:  {
    //     },
    //   });
    //   return response;
    // } catch (e) {
    //   console.log(e);
    // }

    console.log(status, id);
    usrList.map((user) => {
      if (user.id == id) {
        if ((status = true)) {
          return { ...user, isActive: false };
        } else {
          return { ...user, isActive: true };
        }
      } else {
        return user;
      }
    });
  };
  //user efect

  const userDeleteHandler = (id) => {
    try {
      const response = axios({
        url: `${baseUrl}/${id}`,
        method: "DELETE",
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header setitsOpenModal={setitsOpenModal} usrList={usrList.length} />
      <UserList
        users={usrList}
        setUsrList={setUsrList}
        userDesactivateHandlder={userDesactivateHandlder}
        userDeleteHandler={userDeleteHandler}
      />
      <UserModal
        itsOpenModal={itsOpenModal}
        setitsOpenModal={setitsOpenModal}
        users={usrList}
      />
    </>
  );
}

export default App;
