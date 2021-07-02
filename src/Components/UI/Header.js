import { Button } from "@material-ui/core";

const Header = ({ setitsOpenModal, usrList }) => {
  const openModal = () => {
    setitsOpenModal(true);
  };

  return (
    <div>
      <div className="app-header">
        <h1>User Manager {usrList}</h1>
        <Button variant="contained" color="primary" onClick={openModal}>
          Agregar
        </Button>
      </div>
    </div>
  );
};
export default Header;
