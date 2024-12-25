import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TransactionTable from "../components/TransactionTable";
import TransactionDetailsPage from "./TransactionDetailsPage";

export default function SchoolTransactionsPage() {
  const { schoolId } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://edviron-fs-assignment.vercel.app/api/transactions/${schoolId}`,
        {
          Headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, [schoolId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Transactions for School {schoolId}
      </h1>
      <TransactionDetailsPage transactions={transactions} />
    </div>
  );
}
