import "../css/FrontPage.css";
import {
  chair_1,
  chair_2,
  chair_3,
  customers,
  hero,
} from "../images/UploadImages";

import { useState } from "react";
import Modal from "./ProductDetails";
import AddPaymentCredential from "./AddPayment";

const FrontPage = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <div className=" body container-copy">
      <header className=".header">
        <div className="header-text-box-copy">
          <h1 className="h1">
            We design and build better chairs, for a better life
          </h1>
          <p className="header-text-copy">
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <a className="btn-copy btn--big-copy" href="#">
            Shop chairs
          </a>
        </div>
        <img src={hero} alt="Photo" />
      </header>

      <section className="section">
        <h2 className="h2">What makes our chairs special</h2>
        <div className="grid-3-cols-copy">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="features-icon-copy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
            <p className="features-title-copy">
              <strong>Science meets design</strong>
            </p>
            <p className="features-text-copy">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              similique adipisci praesentium.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="features-icon-copy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="features-title-copy">
              <strong>Maximal comfort</strong>
            </p>
            <p className="features-text-copy">
              Reprehenderit optio placeat quasi excepturi architecto, explicabo
              facilis perspiciatis error maxime magnam.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="features-icon-copy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <p className="features-title-copy">
              <strong>Ethical and sustainable</strong>
            </p>
            <p className="features-text-copy">
              Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
              omnis est laudantium voluptatem voluptas!
            </p>
          </div>
        </div>
      </section>

      <section className=" section testimonial-section-copy">
        <div className="grid-3-cols-copy">
          <img src={customers} alt="People sitting on chairs" />
          <div className="testimonial-box-copy">
            <h2 className="h2 arekh2">
              "We couldn't live without these chairs anymore"
            </h2>
            <blockquote class="testimonial-text-copy">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </blockquote>
            <p className="testimonial-author-copy">— Mary and Sarah Johnson</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
