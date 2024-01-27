import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "../css/profile.css";

const Profile = () => {
  const UserType = localStorage.getItem("ecomm_user_type");
  const Address = localStorage.getItem("ecomm_user_address");
  const Name = localStorage.getItem("ecomm_user_name");
  const Email = localStorage.getItem("ecomm_user_email");
  const Phone = localStorage.getItem("ecomm_user_phone");
  const Account_id = localStorage.getItem("bank_account_id");

  const getRole = () => {
    if (UserType == 0) return "Admin";
    else if (UserType == 2) return "Supplier";
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

              <div class="name">{Account_id}</div>
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
                      <td>{Name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{Email}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>{Address}</td>
                    </tr>

                    <tr>
                      <td>UserType</td>
                      <td>:</td>
                      <td>{role}</td>
                    </tr>
                    <tr>
                      <td>Current Balance</td>
                      <td>:</td>
                      <td>****** TK</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>:</td>
                      <td>{Phone}</td>
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
