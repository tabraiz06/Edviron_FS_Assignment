import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TransactionDetailsPage() {
  const { schoolId } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://edviron-fs-assignment.vercel.app/api/transactions/${schoolId}`,
        {
          Headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => setTransaction(res.data))
      .catch((err) => console.error(err));
  }, [schoolId]);

  if (!transaction) return <div>Loading...</div>;

  return (
    <div
      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow ${localStorage.getItem(
        "theme"
      )}`}
    >
      <h1 className="text-3xl font-bold mb-4">Transaction Details</h1>
      <p>
        <strong>Collect ID:</strong> {transaction[0].collect_id}
      </p>

      <p>
        <strong>Status:</strong> {transaction[0].status}
      </p>
      <p>
        <strong>Gateway:</strong> {transaction[0].gateway}
      </p>
      <p>
        <strong>Payment Method:</strong>{" "}
        {transaction[0].payment_method.toUpperCase()}
      </p>
      <p>
        <strong>Bank Refference :</strong> {transaction[0].bank_reference}
      </p>
      <p>
        <strong>Custom_order_id:</strong> {transaction[0].custom_order_id}
      </p>
    </div>
  );
}
