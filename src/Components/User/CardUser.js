import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CardUser = (props) => {
  const params = useParams();
  const users = [...props.users];
  let userDetail = users.filter((user) => user.id == params.id);

  const modficateUser = () => {
    users.findIndex((user) => user.id === userDetail.id);
    userDetail[0].isActive = !userDetail[0].isActive;
    props.passSet(users);
  };

   useEffect(() =>{});
  return (
    <div>
      <Grid container justify="center" alignItems="center">
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
              onClick={modficateUser}
            >
              {userDetail[0].isActive ? "Desactivar" : "Activar"}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default CardUser;
