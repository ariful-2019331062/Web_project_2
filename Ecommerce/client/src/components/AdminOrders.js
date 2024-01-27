import NavBar from "./NavBar";

import UniversalModal from "./StatusModal";
// import SupplierRequestModal from "./SupplierRequestModal";
import "../css/Modal.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  // const [suppliers, setSupplier] = useState([]);
  const user_type = localStorage.getItem("ecomm_user_type");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/order", {
          params: {
            user_id: localStorage.getItem("ecomm_account_id"),
            user_type: localStorage.getItem("ecomm_user_type"),
          },
        });
        // if (user_type === "0") {
        //   const response2 = await axios.get(
        //     "http://localhost:3000/api/v1/auth/suppliers"
        //   );
        //   console.log(response2.data.data.suppliers);
        //   setSupplier(response2.data.data.suppliers);
        // }
        // console.log(response);

        const orders = response.data.data.orders;

        for (let i = 0; i < orders.length; i++) {
          const formattedDate = new Date(
            orders[i].created_at.seconds * 1000
          ).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });
          orders[i].formattedDate = formattedDate;
        }
        setOrders(orders);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, [user_type]);

  const updateOrder = (id, updatedOrder) => {
    setOrders((prevOrders) => {
      const newOrders = prevOrders.map((item) => {
        console.log(updatedOrder);
        if (item.order_id === id) {
          return updatedOrder;
        }
        return item;
      });
      return newOrders;
    });
  };
  const updateOrder2 = (element) => {
    setOrders((prevOrders) => {
      const newOrders = prevOrders.map((item) => {
        if (item.order_id === element.id) {
          // Create a new object with updated order_status
          const updatedElement = { ...element, order_status: 1 };
          return updatedElement;
        }
        return item;
      });
      return newOrders;
    });
  };

  const doThis = (value) => {
    localStorage.setItem("order-id", value);
  };

  const [open, setOpen] = useState(null);
  const [openSupplier, setOpenSupplier] = useState(null);
  return (
    <div>
      <div className="order-body">
        <NavBar />

        <div className="full-container">
          <div className="pending-div">
            <p className="ongoing">PENDING ORDERS</p>
            <div className="ongoing-container">
              {orders.map(
                (Element) =>
                  Element.order_status !== 2 && (
                    <div key={Element.order_id} className="ongoing-card">
                      <div className="ongoing-content">
                        <div className="first-col">
                          <div className="first-first-col">
                            <p className="order-number">
                              Order{" "}
                              <div className="order-id">{Element.order_id}</div>
                            </p>
                            <div className="order-product">
                              {Element.product_name}
                            </div>
                            <p className="supplier-order-price">
                              Total: {Element.total_price} tk
                            </p>
                          </div>
                          <div className="first-first-col">
                            <p className="order-date">
                              {Element.formattedDate}
                            </p>

                            <p className="order-quan">x{Element.quantity}</p>
                          </div>
                        </div>

                        <div className="status-buttons">
                          <div className="supplier-double-button">
                            <Link
                              style={{
                                display: "block",
                                textDecoration: "none",
                              }}
                              className="supplier-order-status"
                              to="/status"
                              onClick={() => doThis(Element.order_id)}
                            >
                              {doThis(Element.order_id)}Status
                            </Link>

                            {((user_type === "0" && Element.order_status < 1) ||
                              (user_type === "2" &&
                                Element.order_status < 2)) && (
                              <button
                                className="mark-complete"
                                onClick={() => {
                                  if (user_type === "0") {
                                    // setOpenSupplier(Element); er porer bracket porjonto new add korsi
                                    const submitHandler = async () => {
                                      await toast.promise(
                                        axios
                                          .post(
                                            `http://localhost:3000/api/v1/order/${Element.order_id}/supplier-req`,
                                            {
                                              ecomm_account_id:
                                                localStorage.getItem(
                                                  "bank_account_id"
                                                ),
                                              ecomm_pin:
                                                localStorage.getItem(
                                                  "bank_pin_code"
                                                ),
                                              supplier_account_id: "afnan91",

                                              supplier_price: parseFloat(
                                                Element.total_price
                                              ),
                                              supplier_id:
                                                "IRLKJrkhWoIEZopQTcXV",
                                              supplier_name: "afnan",
                                              supplier_phone: "01010101",
                                            }
                                          )
                                          .then((response) => {
                                            console.log(response.data.data);
                                            updateOrder2(Element);
                                          })
                                          .catch((error) => {
                                            console.log(error);
                                            toast.error(
                                              error.response.data.message,
                                              {
                                                position:
                                                  toast.POSITION.TOP_CENTER,
                                                autoClose: 4000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                progress: undefined,
                                                theme: "colored",
                                              }
                                            );
                                          }),
                                        {
                                          pending: "Creating Request...",
                                          success: "Request Created!",
                                        }
                                      );
                                    };
                                    submitHandler();
                                  } else {
                                    axios
                                      .patch(
                                        `http://localhost:3000/api/v1/order/${Element.order_id}`,
                                        {
                                          order_status: 2,
                                        }
                                      )
                                      .then((response) => {
                                        updateOrder(Element.order_id, {
                                          ...Element,
                                          order_status: 2,
                                        });
                                      })
                                      .catch((error) => {
                                        console.log(error);
                                      });
                                  }
                                }}
                              >
                                {user_type === "0" ? "Accept" : "Deliver"}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
              {/* {open && <UniversalModal data={open} closeModal={setOpen} />}
              {openSupplier && (
                <SupplierRequestModal
                  order_id={openSupplier.order_id}
                  suppliers={suppliers}
                  total_price={openSupplier.total_price}
                  updateOrder={updateOrder}
                  order={openSupplier}
                  closeModal={setOpenSupplier}
                />
              )}
              {(open || openSupplier) && <div className="overlay"></div>} */}
            </div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="completed-div">
            <p className="ongoing">COMPLETED ORDERS</p>
            <div className="ongoing-container">
              <div className="complete-content">
                {orders.map(
                  (Element) =>
                    Element.order_status === 2 && (
                      <div key={Element.order_id} className="grid-col">
                        <div className="first-first-col">
                          <p className="complete-orderId">
                            Order {Element.order_id}
                          </p>
                          <p className="order-product">
                            {Element.product_name}
                          </p>
                          <p className="complete-price">
                            Total: {Element.total_price} tk
                          </p>
                        </div>
                        <div className="first-first-col first-second-col">
                          <p className="delivery-date">
                            {Element.formattedDate}
                          </p>
                          <p className="complete-product">
                            x{Element.quantity}
                          </p>
                        </div>
                        <div className="supplier-name">
                          <p className="supplier-header">Supplier</p>
                          <p className="supplier">{Element.supplier_name}</p>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;

// css code orders.css
