import React from "react";
import { useState, useEffect } from "react";
import "../css/Pages.css";
const Pages = ({ data }) => {
  // console.log(data);

  const bank_account_id = localStorage.getItem("bank_account_id");

  const formattedDate = new Date(data.created_at.seconds * 1000).toLocaleString(
    "en-GB",
    {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
  );
  return (
    <div className="page-box">
      <div className="name-amount-group">
        <div>
          {bank_account_id == data.sender_id ? (
            <span className="sent_to">Sent to </span>
          ) : (
            <span className="received_from">Received from</span>
          )}{" "}
          {bank_account_id == data.sender_id ? (
            <span className="sender-or-receiver">{data.receiver_id}</span>
          ) : (
            <span className="sender-or-receiver">{data.sender_id} </span>
          )}
        </div>
        <div
          className={`amount-figure  ${
            bank_account_id == data.sender_id
              ? "sender-amount"
              : "receiver-amount"
          }`}
        >
          BDT {data.amount}
        </div>
      </div>

      <div className="data-transaction-group">
        <div className="transaction-name">{data.transaction_id}</div>
        {/* <div className="date-format">{formattedDate}</div> */}
      </div>
    </div>
  );
};

export default Pages;
