import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  UserCircleIcon,
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import apiClient from '../config/axiosConfig';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [educationFilter, setEducationFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadCandidates();
  }, [currentPage, experienceFilter, educationFilter]);

  const loadCandidates = async () => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        search: searchTerm,
        experience: experienceFilter !== 'all' ? experienceFilter : undefined,
        education: educationFilter !== 'all' ? educationFilter : undefined
      };
      
      const response = await apiClient.get('/employer/candidates', { params });
      setCandidates(response.data.data);
      setTotalPages(response.data.meta?.last_page || 1);
    } catch (error) {
      console.error('Error loading candidates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    loadCandidates();
  };

  const getExperienceLevel = (years) => {
    if (years === 0) return 'Mới tốt nghiệp';
    if (years <= 2) return 'Junior';
    if (years <= 5) return 'Mid-level';
    if (years <= 8) return 'Senior';
    return 'Expert';
  };

  const getExperienceColor = (years) => {
    if (years === 0) return 'bg-green-100 text-green-800';
    if (years <= 2) return 'bg-blue-100 text-blue-800';
    if (years <= 5) return 'bg-yellow-100 text-yellow-800';
    if (years <= 8) return 'bg-orange-100 text-orange-800';
    return 'bg-purple-100 text-purple-800';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Quản lý ứng viên</h1>
        <p className="mt-1 text-sm text-gray-500">
          Duyệt và quản lý hồ sơ ứng viên
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSearch} className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm ứng viên..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="all">Tất cả kinh nghiệm</option>
              <option value="0">Mới tốt nghiệp</option>
              <option value="1-2">1-2 năm</option>
              <option value="3-5">3-5 năm</option>
              <option value="6-8">6-8 năm</option>
              <option value="9+">9+ năm</option>
            </select>

            <select
              value={educationFilter}
              onChange={(e) => setEducationFilter(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="all">Tất cả học vấn</option>
              <option value="high_school">Trung học phổ thông</option>
              <option value="college">Cao đẳng</option>
              <option value="university">Đại học</option>
              <option value="master">Thạc sĩ</option>
              <option value="phd">Tiến sĩ</option>
            </select>
            
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FunnelIcon className="h-4 w-4 mr-2" />
              Lọc
            </button>
          </div>
        </form>
      </div>

      {/* Candidates List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        {candidates.length === 0 ? (
          <div className="text-center py-12">
            <UserCircleIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy ứng viên</h3>
            <p className="mt-1 text-sm text-gray-500">
              Thử thay đổi bộ lọc tìm kiếm của bạn.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {candidates.map((candidate) => (
              <li key={candidate.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {candidate.profile?.avatar ? (
                          <img
                            className="h-12 w-12 rounded-full object-cover"
                            src={candidate.profile.avatar || '/img/image_default_300.jpg'}
                            alt={candidate.profile.full_name}
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserCircleIcon className="h-8 w-8 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-medium text-gray-900">
                            {candidate.profile?.full_name || 'Chưa cập nhật'}
                          </h3>
                          {candidate.profile?.isLookingFor && (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Đang tìm việc
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                          {candidate.profile?.phone && (
                            <span>{candidate.profile.phone}</span>
                          )}
                          {candidate.profile?.address && (
                            <>
                              <span>•</span>
                              <span className="flex items-center">
                                <MapPinIcon className="h-4 w-4 mr-1" />
                                {candidate.profile.address}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {candidate.profile?.introduction || 'Chưa có giới thiệu'}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                          {candidate.profile?.education_level && (
                            <span className="flex items-center">
                              <AcademicCapIcon className="h-4 w-4 mr-1" />
                              {candidate.profile.education_level}
                            </span>
                          )}
                          {candidate.profile?.skills && candidate.profile.skills.length > 0 && (
                            <span className="flex items-center">
                              <BriefcaseIcon className="h-4 w-4 mr-1" />
                              {candidate.profile.skills.length} kỹ năng
                            </span>
                          )}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {candidate.profile?.skills?.slice(0, 5).map((skill) => (
                            <span
                              key={skill.id}
                              className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                            >
                              {skill.name}
                            </span>
                          ))}
                          {candidate.profile?.skills?.length > 5 && (
                            <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                              +{candidate.profile.skills.length - 5} khác
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-900">
                          {candidate.profile?.skills?.reduce((total, skill) => 
                            total + (skill.pivot?.experience_years || 0), 0
                          )} năm kinh nghiệm
                        </div>
                        <div className="text-xs text-gray-500">
                          {candidate.profile?.skills?.length || 0} kỹ năng
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/candidates/${candidate.id}`}
                          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <EyeIcon className="h-4 w-4 mr-1" />
                          Xem hồ sơ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Trước
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sau
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Trang <span className="font-medium">{currentPage}</span> /{' '}
                <span className="font-medium">{totalPages}</span>
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Trước
                </button>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sau
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidates;
