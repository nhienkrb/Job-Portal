import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEmployer } from '../context/EmployerContext';
import apiClient from '../config/axiosConfig';

const JobEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateJob } = useEmployer();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState([]);
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    benefits: '',
    location: '',
    min_salary: '',
    max_salary: '',
    employment_type: 'full_time',
    experience_level: 'entry',
    category_id: '',
    skills: [],
    expires_at: '',
    status: 'draft'
  });

  useEffect(() => {
    loadJobData();
  }, [id]);

  const loadJobData = async () => {
    try {
      setLoading(true);
      const [jobRes, categoriesRes, skillsRes] = await Promise.all([
        apiClient.get(`/employer/jobs/${id}`),
        apiClient.get('/categories'),
        apiClient.get('/skills')
      ]);

      const job = jobRes.data.data;
      setFormData({
        title: job.title || '',
        description: job.description || '',
        requirements: job.requirements || '',
        benefits: job.benefits || '',
        location: job.location || '',
        min_salary: job.min_salary || '',
        max_salary: job.max_salary || '',
        employment_type: job.employment_type || 'full_time',
        experience_level: job.experience_level || 'entry',
        category_id: job.category_id || '',
        skills: job.skills?.map(s => s.id) || [],
        expires_at: job.expires_at ? job.expires_at.split('T')[0] : '',
        status: job.status || 'draft'
      });

      setCategories(categoriesRes.data.data);
      setSkills(skillsRes.data.data);
    } catch (error) {
      console.error('Error loading job data:', error);
      navigate('/jobs');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillToggle = (skillId) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillId)
        ? prev.skills.filter(id => id !== skillId)
        : [...prev.skills, skillId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await apiClient.put(`/employer/jobs/${id}`, formData);
      updateJob(id, response.data.data);
      navigate('/jobs');
    } catch (error) {
      console.error('Error updating job:', error);
      alert('Có lỗi xảy ra khi cập nhật việc làm');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Chỉnh sửa việc làm</h1>
        <p className="mt-1 text-sm text-gray-500">
          Cập nhật thông tin việc làm của bạn
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Thông tin cơ bản</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tiêu đề việc làm *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Ví dụ: Senior Frontend Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Địa điểm làm việc *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Ví dụ: Hà Nội, TP.HCM"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Danh mục *
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Chọn danh mục</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Trạng thái *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="draft">Bản nháp</option>
                <option value="active">Đang hoạt động</option>
                <option value="paused">Tạm dừng</option>
                <option value="closed">Đã đóng</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loại hình công việc *
              </label>
              <select
                name="employment_type"
                value={formData.employment_type}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="full_time">Toàn thời gian</option>
                <option value="part_time">Bán thời gian</option>
                <option value="contract">Hợp đồng</option>
                <option value="internship">Thực tập</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cấp độ kinh nghiệm *
              </label>
              <select
                name="experience_level"
                value={formData.experience_level}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="entry">Mới tốt nghiệp</option>
                <option value="junior">Junior (1-3 năm)</option>
                <option value="mid">Mid-level (3-5 năm)</option>
                <option value="senior">Senior (5+ năm)</option>
                <option value="lead">Lead/Manager</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hạn nộp hồ sơ
              </label>
              <input
                type="date"
                name="expires_at"
                value={formData.expires_at}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Salary */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Mức lương</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lương tối thiểu (VNĐ)
              </label>
              <input
                type="number"
                name="min_salary"
                value={formData.min_salary}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="10000000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lương tối đa (VNĐ)
              </label>
              <input
                type="number"
                name="max_salary"
                value={formData.max_salary}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="20000000"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Mô tả công việc</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mô tả chi tiết *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Mô tả chi tiết về công việc, trách nhiệm..."
            />
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Yêu cầu công việc</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Yêu cầu ứng viên *
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
              rows={6}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Liệt kê các yêu cầu về kỹ năng, kinh nghiệm, bằng cấp..."
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quyền lợi</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quyền lợi và phúc lợi
            </label>
            <textarea
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              rows={4}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Mô tả các quyền lợi, phúc lợi mà công ty cung cấp..."
            />
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Kỹ năng yêu cầu</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {skills.map(skill => (
              <label key={skill.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill.id)}
                  onChange={() => handleSkillToggle(skill.id)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{skill.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/jobs')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Hủy
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {saving ? 'Đang lưu...' : 'Cập nhật việc làm'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobEdit;
