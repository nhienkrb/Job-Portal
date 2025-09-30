import { jobService } from "../../service/JobService";
import JobCard from "../../components/JobCard";
import IsError from "../../components/IsError";
import IsLoadingCard from "../../components/isLoadingCard";
import { useJobs } from "../../hooks/useJobs";

export default function JobList() {
  const { jobs, meta, page, setPage, loading, error, fetchJobs } = useJobs();

  // Loading skeleton
  if (loading) {
    return <IsLoadingCard />;
  }

  // Hiển thị lỗi
  if (error) {
    return <IsError error={error} onRetry={fetchJobs} />;
  }

  return (
    <div
      className="py-8"
      style={{
        background:
          "linear-gradient(90deg, rgb(209, 238, 252) 0%, rgb(229, 246, 254) 20%, rgb(236, 247, 253) 40%, rgb(224, 245, 253) 60%, rgb(236, 247, 253) 80%, rgb(237, 248, 255) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Việc Tuyển Gấp</h2>
          <button className="text-blue-600 font-medium hover:underline">
            Xem thêm &gt;
          </button>
        </div>

        {/* Grid job cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Empty state */}
        {jobs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Không có việc làm nào</p>
            <button
              onClick={fetchJobs}
              className="mt-2 text-blue-600 hover:underline"
            >
              Tải lại
            </button>
          </div>
        )}

        {/* Pagination */}

        {meta && meta.last_page > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: meta.last_page }, (_, i) => i + 1).map(
              (p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    p === page
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-blue-100"
                  }`}
                >
                  {p}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
