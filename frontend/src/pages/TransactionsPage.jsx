import { useState, useEffect } from "react";
import axios from "axios";
import TransactionTable from "../components/TransactionTable";
import { useNavigate } from "react-router-dom";

export default function TransactionsPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/auth");
  }

  const [transactions, setTransactions] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("");

  const fectData = async () => {
    try {
      const res = await axios.get(
        "https://edviron-fs-assignment.vercel.app/api/transactions"
      );
      setTransactions(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fectData();
  }, []);

  const filteredTransactions = transactions.filter((t) =>
    filteredStatus ? t.status === filteredStatus : true
  );

  return (
    <div
      className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow ${localStorage.getItem(
        "theme"
      )}`}
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Transactions</h1>
        <div className="flex pr-4">
          <button
            onClick={() => navigate("/status")}
            className={`${localStorage.getItem(
              "theme"
            )} bg-blue-500 rounded p-2`}
          >
            Check Status
          </button>
          <button
            onClick={() => navigate("/update-status")}
            className={`${localStorage.getItem(
              "theme"
            )} bg-blue-500 rounded p-2 ml-2`} 
          >
            Update Status
          </button>
        </div>
      </div>
      <TransactionTable
        transactions={filteredTransactions}
        setFilteredStatus={setFilteredStatus}
      />
    </div>
  );
}
