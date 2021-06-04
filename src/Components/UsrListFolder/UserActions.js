import { Tooltip, IconButton } from "@material-ui/core";
import { Delete, Close, Done } from "@material-ui/icons";

const UsrActions = ({
  user,
  modificateUsr,
  userId,
  userDesactivateHandlder,
  userDeleteHandler,
}) => {
  return (
    <div className="right-side">
      {user.isActive == true ? (
        <Tooltip title="desactivar">
          <IconButton
            onClick={(id) => userDesactivateHandlder(user.id, user.isActive)}
          >
            <Close></Close>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="activar">
          <IconButton
            onClick={(id) => userDesactivateHandlder(user.id, user.isActive)}
          >
            <Done></Done>
          </IconButton>
        </Tooltip>
      )}

      <Tooltip title="eliminar">
        <IconButton onClick={(id) => userDeleteHandler(user.id)}>
          <Delete></Delete>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default UsrActions;
