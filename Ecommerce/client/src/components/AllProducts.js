import { useState } from "react";
import Modal from "./ProductDetails";
import AddPaymentCredential from "./AddPayment";
import "../css/AllProducts.css";
import { chair_1, chair_2, chair_3 } from "../images/UploadImages";

const items = [
  {
    key: 1,
    image: chair_1,
    state: false,
    productName: "The Laid Back",
    price: "250.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    key: 2,
    image: chair_2,
    state: false,
    productName: "The Worker Bee",
    price: "525.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    key: 3,
    image: chair_3,
    state: false,
    productName: "The Chair 4/2",
    price: "1450.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
];

const AllProducts = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <>
      <section
        className="product-section"
        style={{ margin: "0 auto", marginBottom: "100px" }}
      >
        <h2 className="h2">Our bestselling chairs</h2>
        <div className="grid-3-cols-copy">
          {items.map((Element) => (
            <div className="col chair-copy" key={Element.key}>
              <div className="prod-img">
                <img src={Element.image} alt="Product" className="watch-img" />
              </div>
              <div className="chair-box-copy">
                <h3 className="h3 product-h3">{Element.productName}</h3>
                <ul className="chair-details-copy">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="chair-icon-copy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      ></path>
                    </svg>

                    <span className="span">Leisure and relaxing</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="chair-icon-copy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="span">Comfortable for 4h</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="chair-icon-copy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="span">Vegan leather</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="chair-icon-copy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    <span className="span">Weighs 16 kg</span>
                  </li>
                </ul>
                <div className="chair-price-copy">
                  <string style={{ fontWeight: "bold" }}>
                    {Element.price}€
                  </string>
                  <button
                    className="button-btn btn-copy btn--small-copy"
                    onClick={() => {
                      if (localStorage.getItem("bank_account_id") === null) {
                        setOpenPaymentModal(true);
                      } else {
                        setOpenModal(Element);
                      }
                    }}
                  >
                    Let's Buy!
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* overlay add korbo jei modal e khule na keno */}
          {(openModal || openPaymentModal) && <div className="overlay"></div>}
          {/* bank details jodi na deya thake taile AddPaymentCredential */}
          {openPaymentModal && (
            <AddPaymentCredential closeModal={setOpenPaymentModal} />
          )}
          {openModal && <Modal closeModal={setOpenModal} element={openModal} />}
        </div>
      </section>
      <footer style={{ textAlign: "center" }}>
        Copyright © 2027 by Ariful Islam Farhad. I am trying to learn web
        designing with HTML, CSS and javascript through online course. Use for
        learning purposes only.
      </footer>
    </>
  );
};

export default AllProducts;

// css allProducts.css
