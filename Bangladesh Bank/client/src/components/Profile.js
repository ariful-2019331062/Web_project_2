import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../css/profile.css";
const balance = localStorage.getItem("bank_balance");

const Profile = () => {
  const [data, setData] = useState([]);
  const bank_account_id = localStorage.getItem("bank_account_id");
  useEffect(() => {
    const getting_profile_info = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/profile?account_id=${bank_account_id}`
      );
      const data = await res.json();

      setData(data.data);
    };
    getting_profile_info();
  }, []);
  // console.log(data);

  const getRole = () => {
    if (data.UserType == 0) return "Admin";
    else if (data.UserType == 2) return "Supplier";
    else return "Buyer";
  };

  const role = getRole();
  return (
    <div className="wholePage">
      <NavBar />
      <div className="profile-div">
        <div>
          <div class="sidenav">
            <h2 className="sidenav-identity">IDENTITY</h2>
            <div class="profile">
              <img
                src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
                alt=""
                width="100"
                height="100"
              />

              <div class="name">{data.Account_id}</div>
              <div class="job">{role}</div>
            </div>

            <div class="sidenav-url">
              <div class="url">
                <a href="#profile" class="active">
                  Profile
                </a>
                <hr align="center" />
              </div>
            </div>
          </div>

          <div class="identity_main">
            <h2>DETAILS</h2>
            <div class="card">
              <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td>{data.Name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{data.Email}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>{data.Address}</td>
                    </tr>

                    <tr>
                      <td>UserType</td>
                      <td>:</td>
                      <td>{role}</td>
                    </tr>
                    <tr>
                      <td>Current Balance</td>
                      <td>:</td>
                      <td>{balance} TK</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>:</td>
                      <td>{data.Phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// const TransactionHistory = () => {
//   const [data, setData] = useState([]);
//   const bank_account_id = localStorage.getItem("bank_account_id");
//   useEffect(() => {
//     const paginationFunc = async () => {
//       const res = await fetch(
//         `http://localhost:5000/api/v1/transaction?account_id=${bank_account_id}`
//       );
//       const data = await res.json();

//       setData(data.data);
//     };
//     paginationFunc();
//   }, []);

//   return (
//     <>{data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}</>
//   );
// };
