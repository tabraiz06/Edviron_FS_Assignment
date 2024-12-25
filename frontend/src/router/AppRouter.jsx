import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransactionsPage from "../pages/TransactionsPage";
import SchoolTransactionsPage from "../pages/SchoolTransactionsPage";
import StatusPage from "../pages/StatusPage";

import AuthPage from "../pages/AuthPage";
import UpdateStatus from "../components/UpdateStatus";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionsPage />} />
        <Route path="/school/:schoolId" element={<SchoolTransactionsPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/update-status" element={<UpdateStatus />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}
