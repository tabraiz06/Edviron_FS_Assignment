import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function TransactionTable({ transactions, setFilteredStatus }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/auth");
  }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className={`p-4 ${localStorage.getItem("theme")} overflow-auto`}>
      <Tooltip anchorSelect=".my-anchor-element" place="top">
        Click to view more details
      </Tooltip>
      <select
        onChange={(e) => setFilteredStatus(e.target.value)}
        className={`mb-4 ${localStorage.getItem(
          "theme"
        )} p-2 rounded border-[2px] border-black ${localStorage.getItem(
          "theme"
        )}`}
      >
        <option value="">All</option>
        <option value="SUCCESS">Success</option>
        <option value="PENDING">Pending</option>
        <option value="FAILURE">Failed</option>
      </select>
      <table
        className={`overflow-x-scroll h-[60vh] w-full bg-white shadow-md rounded-lg text-center p-4 ${localStorage.getItem(
          "theme"
        )}`}
      >
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Collect ID</th>
            <th>School ID</th>
            <th>Gateway</th>
            <th>Order Amount</th>
            <th>Transaction Amount</th>
            <th>Status</th>
            <th>Custom Order ID</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((t, idx) => (
            <tr
              key={idx}
              className="border-t hover:bg-gray-100 cursor-pointer hover:transform hover:scale-105 transition duration-200 p-4 hover:text-black"
            >
              <td>{indexOfFirstItem + idx + 1}</td>

              <td
                className=" "

                
              >
                {t.collect_id}
              </td>

              <td className="my-anchor-element  " onClick={() => navigate(`/school/${t.school_id}`)}>
                {t.school_id}
                {/* <Tooltip anchorSelect=".my-anchor-element" place="top">
                  Click to view all transactions  
                </Tooltip> */}
              </td>

              <td>{t.gateway}</td>
              <td>{t.order_amount}</td>
              <td>{t.transaction_amount}</td>
              <td>{t.status}</td>
              <td>{t.custom_order_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination flex justify-center my-4 gap-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            } bg-blue-500 text-white px-4 py-2 rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
