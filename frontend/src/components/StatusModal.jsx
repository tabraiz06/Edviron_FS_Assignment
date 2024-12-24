export default function StatusModal({ status }) {
  return (
    <div
      className={`mt-4 p-4 border rounded bg-white shadow-md ${localStorage.getItem(
        "theme"
      )}`}
    >
      <h2 className="text-lg font-semibold">Transaction Status</h2>
      <p>Status: {status}</p>
    </div>
  );
}
