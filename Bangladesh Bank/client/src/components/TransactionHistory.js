import { useState, useEffect } from "react";
import Pages from "./Pages";

const TransactionHistory = () => {
  const [data, setData] = useState([]);
  const bank_account_id = localStorage.getItem("bank_account_id");
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/transaction?account_id=${bank_account_id}`
      );
      const data = await res.json();

      setData(data.data);
    };
    paginationFunc();
  }, []);

  return (
    <>
      {data && data.length > 0 ? (
        <div className="scroll-box">
          {data.map((element) => (
            <Pages data={element} />
          ))}
        </div>
      ) : (
        <p className="ifNotTransaction">No transaction yet</p>
      )}
    </>
  );
};

export default TransactionHistory;
