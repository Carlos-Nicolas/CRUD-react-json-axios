import "./App.css";
import Header from "./Components/UI/Header";
import UserModal from "./Components/UI/UserModal";
import UserList from "./Components/UsrListFolder/UserList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import CardUser from "./Components/User/CardUser";

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

  const userChangeHandler = (user) => {
    setUsrList((prevState) => {
      return [...prevState, user.data];
    });
  };

  const userDesactivateHandlder = async (actualUser) => {
    try {
      const response = await axios.put(
        `${baseUrl}/${actualUser.id}`,
        actualUser
      );
      let array = [...usrList];
      const idx = array.findIndex((person) => person.id === actualUser.id);
      array[idx].isActive = !array[idx].isActive;
      setUsrList(array);
      return response.data;
    } catch (e) {
      console.log(console.error(e));
    }
  };

  const userDeleteHandler = async (id) => {
    try {
      const response = await axios({
        url: `${baseUrl}/${id}`,
        method: "DELETE",
      });

      const newUsers = usrList.filter((user) => user.id !== id);
      setUsrList(newUsers);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Switch>
      <Route path="/" exact>
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
            addUser={userChangeHandler}
          />
        </>
      </Route>
      <Route path="/user/:id">
        <CardUser
          users={usrList}
        />
      </Route>
    </Switch>
  );
}

export default App;
