import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("bank_account_id");
    localStorage.removeItem("bank_balance");
    history.push("/");
  };

  const handleButton = (e) => {
    e.preventDefault();

    history.push("/profile");
  };
  const dashBoardHandle = (e) => {
    e.preventDefault();

    history.push("/dashboard");
  };

  return (
    <div className="nav-bar">
      <p className="website-name">ECOMMERCE_BANK</p>
      <div className="nav-bar-div">
        <div className="button" onClick={dashBoardHandle}>
          <a href="#" className="logout">
            dashboard
          </a>
        </div>

        <div className="button" onClick={handleButton}>
          <a href="#" className="logout">
            Profile
          </a>
        </div>
        <div className="button" onClick={handleClick}>
          <a href="#" className="logout">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
