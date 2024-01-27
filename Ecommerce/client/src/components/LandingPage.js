import AllProducts from "./AllProducts";
import NavBar from "./NavBar";
// import OptionBar from "./OptionBar";
import FrontPage from "./FrontPage";

const LandingPage = () => {
  const ecomm_account_id = localStorage.getItem("ecomm_account_id");
  const ecomm_user_type = localStorage.getItem("ecomm_user_type");
  return (
    <div className="body">
      <NavBar />

      <FrontPage />

      {ecomm_user_type == "1" || ecomm_account_id == null ? (
        <AllProducts />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LandingPage;
