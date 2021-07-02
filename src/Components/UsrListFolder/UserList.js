import { Paper, Avatar } from "@material-ui/core";
import UsrActions from "./UserActions";
import {Link} from "react-router-dom";


const UserList = ({
  users,
  userDesactivateHandlder,
  userDeleteHandler,
}) => {
  return (
    <div className="users-list">
      <h1>Usuarios</h1>

      {users.map((user) => {
        return (
          <Paper className="user-row" elevation={3} key={user.id}>
            <div className="left-side">
            <Link to={`/user/${user.id}`}>
              <Avatar
                src={user.image}
                style={
                  user.isActive
                  ? { border: "5px solid #00FF00" }
                  : { border: "5px solid #ff0000" }
                }
                ></Avatar>
                </Link>
              <div className="user-name-container">
                <span className="user-name">{user.firstName}</span>
                <span className="user-lastname">{user.lastName}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
            <UsrActions
              user={user}
              userId={user.id}
              userDesactivateHandlder={userDesactivateHandlder}
              userDeleteHandler={userDeleteHandler}
              />
          </Paper>
        );
      })}
    </div>
  );
};
export default UserList;
