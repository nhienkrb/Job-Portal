import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployer } from '../context/EmployerContext';
import apiClient from '../config/axiosConfig';

const CompanyEdit = () => {
  const navigate = useNavigate();
  const { company, updateCompany } = useEmployer();
  const [loading, setLoading] = useState(false);
  const [industries, setIndustries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    size: '',
    founded_year: '',
    industry_id: '',
    logo: null
  });

  useEffect(() => {
    loadFormData();
  }, []);

  const loadFormData = async () => {
    try {
      const response = await apiClient.get('/industries');
      setIndustries(response.data.data);
      
      if (company) {
        setFormData({
          name: company.name || '',
          description: company.description || '',
          address: company.address || '',
          phone: company.phone || '',
          email: company.email || '',
          website: company.website || '',
          size: company.size || '',
          founded_year: company.founded_year || '',
          industry_id: company.industry_id || '',
          logo: null
        });
      }
    } catch (error) {
      console.error('Error loading form data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      logo: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await apiClient.post('/employer/company', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      updateCompany(response.data.data);
      navigate('/company');
    } catch (error) {
      console.error('Error updating company:', error);
      alert('Có lỗi xảy ra khi cập nhật thông tin công ty');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {company ? 'Chỉnh sửa thông tin công ty' : 'Tạo hồ sơ công ty'}
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Cập nhật thông tin chi tiết về công ty của bạn
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Thông tin cơ bản</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tên công ty *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Tên công ty"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Lĩnh vực hoạt động *
              </label>
              <select
                name="industry_id"
                value={formData.industry_id}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Chọn lĩnh vực</option>
                {industries.map(industry => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quy mô nhân sự
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Chọn quy mô</option>
                <option value="1-10">1-10 nhân viên</option>
                <option value="11-50">11-50 nhân viên</option>
                <option value="51-200">51-200 nhân viên</option>
                <option value="201-500">201-500 nhân viên</option>
                <option value="500+">500+ nhân viên</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Năm thành lập
              </label>
              <input
                type="number"
                name="founded_year"
                value={formData.founded_year}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="2020"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Thông tin liên hệ</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Địa chỉ *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Địa chỉ công ty"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="0123456789"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="contact@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="https://company.com"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Giới thiệu công ty</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mô tả về công ty
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Mô tả về lịch sử, văn hóa, sứ mệnh của công ty..."
            />
          </div>
        </div>

        {/* Logo */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Logo công ty</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload logo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB. Kích thước khuyến nghị: 200x200px
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/company')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Hủy
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Đang lưu...' : (company ? 'Cập nhật' : 'Tạo hồ sơ')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyEdit;
