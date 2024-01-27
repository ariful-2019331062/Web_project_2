import NavBar from "./NavBar";
import "../css/Status.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Status = (props) => {
  const [orderData, setOrderData] = useState(null);
  const data = localStorage.getItem("order_id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/order/single",
          {
            params: {
              order_id: localStorage.getItem("order-id"),
            },
          }
        );
        setOrderData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
    const doThis = () => {
      localStorage.removeItem("order-id");
    };
    doThis();
  }, []);

  // const status = () => {
  //   const handleClick = () => {
  //     setTimeout(() => {}, 10000); // 1000 milliseconds = 1 second
  //   };
  //   handleClick();

  //   if (orderData.data.orderData.order_status == 1) return "Varified";
  //   else return "Not Varified";
  // };
  // status();

  // const doThis = () => {
  //   localStorage.removeItem("order-id");
  // };
  return (
    <>
      <NavBar />
      <div className="main-status-div">
        <div className="title-status">
          {orderData == null
            ? "null"
            : ` ${orderData.data.orderData.product_name}`}
        </div>
        <div className="buyer-status">
          <div className="status-box">
            Buyer Name:{" "}
            <p className="bold">
              {orderData == null
                ? "null"
                : ` ${orderData.data.orderData.buyer_name}`}
            </p>
          </div>
          <div className="status-box">
            Buyer's phone number:
            <p className="bold">
              {orderData == null
                ? "null"
                : ` ${orderData.data.orderData.buyer_phone}`}
            </p>
          </div>
        </div>
        <div className="seller-status">
          <div className="status-box">
            Seller Name:{" "}
            <p className="bold">
              {orderData == null
                ? "null"
                : ` ${orderData.data.orderData.supplier_name}`}
            </p>
          </div>
          <div className="status-box">
            Seller phone Number:{" "}
            <p className="bold">
              {orderData == null
                ? "null"
                : ` ${orderData.data.orderData.supplier_phone}`}
            </p>
          </div>
        </div>
        <div className="last-status-box status-box">
          {orderData == null
            ? "null"
            : orderData.data.orderData.order_status === 1
            ? "Verified"
            : "Not Verified Yet"}
        </div>
      </div>
      {/* {doThis()} */}
    </>
  );
};

export default Status;
