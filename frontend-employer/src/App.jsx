import { Routes, Route } from "react-router-dom";
import { EmployerProvider } from "./context/EmployerContext";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import JobCreate from "./pages/JobCreate";
import JobEdit from "./pages/JobEdit";
import Candidates from "./pages/Candidates";
import CandidateDetail from "./pages/CandidateDetail";
import Company from "./pages/Company";
import CompanyEdit from "./pages/CompanyEdit";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  return (
    <EmployerProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/create" element={<JobCreate />} />
          <Route path="jobs/:id/edit" element={<JobEdit />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="candidates/:id" element={<CandidateDetail />} />
          <Route path="company" element={<Company />} />
          <Route path="company/edit" element={<CompanyEdit />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </EmployerProvider>
  );
}

export default App;