import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import JobDetail from "./pages/job-detail/JobDetail";
import CompanyDetail from "./pages/company/CompanyBanner";
import Job from "./pages/job/Job";
import ProfileUser from "./pages/user/ProfileUser";
import Candidate_Applied from "./pages/candidate/Candidate_Applied";
import CandidateLayout from "./pages/candidate/CandidateLayout";
import Candidate_Viewed from "./pages/candidate/Candidate_Viewed";
import Candidate_Saved from "./pages/candidate/Candidate_Saved";
import Candidate_RecruiterView from "./pages/candidate/Candidate_RecruiterView";
import BlogLayout from "./pages/blog/BlogLayout";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";

function App() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/company" element={<CompanyDetail />} />
          <Route path="/candidate" element={<CandidateLayout />}>
            <Route index element={<ProfileUser />} />
            <Route path="cv" element={<ProfileUser />} />
            <Route path="jobs-applied" element={<Candidate_Applied />} />
            <Route path="jobs-viewed" element={<Candidate_Viewed />} />
            <Route path="jobs-saved" element={<Candidate_Saved />} />
            <Route
              path="recruiter-view"
              element={<Candidate_RecruiterView />}
            />
          </Route>
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
