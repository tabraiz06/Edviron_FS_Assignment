import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function UpdateStatus() {
  const navigate = useNavigate();
  const [customOrderId, setCustomOrderId] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const handleUpdateStatus = async () => {
    try {
      const response = await axios.post(
        "https://edviron-fs-assignment.vercel.app/api/transactions/update-status",{Headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }},
        {
          custom_order_id: customOrderId,
          status: newStatus,
        }
      );
      alert("Status updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Transaction Status</h2>
      <input
        type="text"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
        placeholder="Enter Custom Order ID"
        className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
      />
      <input
        type="text"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        placeholder="Enter New Status"
        className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleUpdateStatus}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Update Status
      </button>
    </div>
  );
}
