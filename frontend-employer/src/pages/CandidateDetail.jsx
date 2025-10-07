import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  UserCircleIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  DocumentTextIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import apiClient from '../config/axiosConfig';

const CandidateDetail = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    loadCandidate();
  }, [id]);

  const loadCandidate = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get(`/employer/candidates/${id}`);
      setCandidate(response.data.data);
    } catch (error) {
      console.error('Error loading candidate:', error);
    } finally {
      setLoading(false);
    }
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

  if (!candidate) {
    return (
      <div className="text-center py-12">
        <UserCircleIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy ứng viên</h3>
        <p className="mt-1 text-sm text-gray-500">
          Ứng viên này có thể không tồn tại hoặc đã bị xóa.
        </p>
        <div className="mt-6">
          <Link
            to="/candidates"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  const profile = candidate.profile;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {profile?.avatar ? (
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={profile.avatar}
                    alt={profile.full_name}
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <UserCircleIcon className="h-10 w-10 text-gray-400" />
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {profile?.full_name || 'Chưa cập nhật'}
                </h1>
                <p className="text-sm text-gray-500">{candidate.email}</p>
                {profile?.isLookingFor && (
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 mt-1">
                    Đang tìm việc
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <EyeIcon className="h-4 w-4 mr-2" />
                Xem CV
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {[
              { id: 'profile', name: 'Thông tin cá nhân' },
              { id: 'skills', name: 'Kỹ năng' },
              { id: 'experience', name: 'Kinh nghiệm' },
              { id: 'education', name: 'Học vấn' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Thông tin liên hệ</h3>
                  <dl className="space-y-3">
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">
                        {profile?.phone || 'Chưa cập nhật'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">{candidate.email}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">
                        {profile?.address || 'Chưa cập nhật'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">
                        {profile?.date_of_birth || 'Chưa cập nhật'}
                      </span>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Thông tin khác</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Giới tính</dt>
                      <dd className="text-sm text-gray-900">
                        {profile?.gender === 'male' ? 'Nam' : 
                         profile?.gender === 'female' ? 'Nữ' : 'Chưa cập nhật'}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Học vấn</dt>
                      <dd className="text-sm text-gray-900">
                        {profile?.education_level || 'Chưa cập nhật'}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Trạng thái tìm việc</dt>
                      <dd className="text-sm text-gray-900">
                        {profile?.isLookingFor ? 'Đang tìm việc' : 'Không tìm việc'}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {profile?.introduction && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Giới thiệu bản thân</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {profile.introduction}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Kỹ năng chuyên môn</h3>
              {profile?.skills && profile.skills.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {profile.skills.map((skill) => (
                    <div key={skill.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900">{skill.name}</h4>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getExperienceColor(skill.pivot?.experience_years || 0)}`}>
                          {skill.pivot?.experience_years || 0} năm
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">
                        {getExperienceLevel(skill.pivot?.experience_years || 0)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">Chưa cập nhật kỹ năng</p>
              )}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Kinh nghiệm làm việc</h3>
              <div className="text-center py-8">
                <BriefcaseIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Chưa có kinh nghiệm</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Ứng viên chưa cập nhật thông tin kinh nghiệm làm việc.
                </p>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Học vấn</h3>
              <div className="text-center py-8">
                <AcademicCapIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Chưa có thông tin học vấn</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Ứng viên chưa cập nhật thông tin học vấn chi tiết.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-3">
        <Link
          to="/candidates"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Quay lại
        </Link>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Liên hệ ứng viên
        </button>
      </div>
    </div>
  );
};

export default CandidateDetail;
