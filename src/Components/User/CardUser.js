import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { useParams } from "react-router-dom";

const CardUser = (props) => {
  const params = useParams();
  const users = [...props.users];
  let userDetail = users.filter((user) => user.id == params.id);

  return (
    <div>
      <Card>
        <CardContent>
        <Avatar src={userDetail[0].image} />
          <Typography gutterBottom variant="h5" component="h2">
            {userDetail[0].firstName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {userDetail[0].lastName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {userDetail[0].email}
          </Typography>
          <Button
            style={
              userDetail[0].isActive
                ? { border: "5px solid #ff0000" }
                : { border: "5px solid #00FF00" }
            }
          >
            {userDetail[0].isActive ? "Desactivar" : "Activar"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardUser;
