import { useState } from "react";
import axios from "axios";
import StatusModal from "../components/StatusModal";

export default function StatusPage() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);

  const checkStatus = () => {
    if (!orderId) {
      return alert("Please enter a custom order ID");
    }
    axios
      .get(
        `https://edviron-fs-assignment.vercel.app/api/transactions/check-status/${orderId}`
      )
      .then((res) => setStatus(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Check Transaction Status</h1>
      <input
        type="text"
        placeholder="Custom Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button
        onClick={checkStatus}
        className="bg-blue-500 text-white p-2 ml-2 rounded"
      >
        Check
      </button>
      {status && <StatusModal status={status} />}
    </div>
  );
}
