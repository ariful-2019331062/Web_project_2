import Balance from "./Balance";
import NavBar from "./NavBar";
import TransactionHistory from "./TransactionHistory";
import "../css/Transactions.css";
const Transactions = () => {
  return (
    <div className="transaction-main">
      <NavBar />
      <div className="balance-transaction-history-div">
        <div>
          <Balance />
        </div>
        <div className="transaction-history-div">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
