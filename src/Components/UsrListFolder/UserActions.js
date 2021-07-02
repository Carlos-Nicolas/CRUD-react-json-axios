import { Tooltip, IconButton } from "@material-ui/core";
import { Delete, Close, Done } from "@material-ui/icons";

const UsrActions = ({ user, userDesactivateHandlder, userDeleteHandler }) => {
  const actualUser = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    image: user.image,
    isActive: user.isActive,
  };
  return (
    <div className="right-side">
      <Tooltip title="Modificar">
        <IconButton onClick={(id) => userDesactivateHandlder(actualUser)}>
          {user.isActive ? <Close /> : <Done />}
        </IconButton>
      </Tooltip>

      <Tooltip title="Eliminar">
        <IconButton onClick={(id) => userDeleteHandler(user.id)}>
          <Delete />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default UsrActions;
