import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEmployer } from '../context/EmployerContext';
import { 
  BuildingOfficeIcon,
  PencilIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  UsersIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import apiClient from '../config/axiosConfig';

const Company = () => {
  const { company, updateCompany } = useEmployer();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    totalApplications: 0,
    totalViews: 0
  });

  useEffect(() => {
    loadCompanyData();
  }, []);

  const loadCompanyData = async () => {
    try {
      setLoading(true);
      const [companyRes, statsRes] = await Promise.all([
        apiClient.get('/employer/company'),
        apiClient.get('/employer/company/stats')
      ]);
      
      updateCompany(companyRes.data.data);
      setStats(statsRes.data.data);
    } catch (error) {
      console.error('Error loading company data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="text-center py-12">
        <BuildingOfficeIcon className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">Chưa có thông tin công ty</h3>
        <p className="mt-1 text-sm text-gray-500">
          Hãy tạo hồ sơ công ty để bắt đầu tuyển dụng.
        </p>
        <div className="mt-6">
          <Link
            to="/company/edit"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Tạo hồ sơ công ty
          </Link>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      name: 'Tổng việc làm',
      value: stats.totalJobs,
      icon: BuildingOfficeIcon,
      color: 'bg-blue-500'
    },
    {
      name: 'Việc làm đang hoạt động',
      value: stats.activeJobs,
      icon: BuildingOfficeIcon,
      color: 'bg-green-500'
    },
    {
      name: 'Tổng ứng viên',
      value: stats.totalApplications,
      icon: UsersIcon,
      color: 'bg-purple-500'
    },
    {
      name: 'Lượt xem hồ sơ',
      value: stats.totalViews,
      icon: GlobeAltIcon,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Thông tin công ty</h1>
          <p className="mt-1 text-sm text-gray-500">
            Quản lý thông tin và hoạt động của công ty
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/company/edit"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PencilIcon className="h-4 w-4 mr-2" />
            Chỉnh sửa
          </Link>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {company.logo ? (
                <img
                  className="h-16 w-16 rounded-lg object-cover"
                  src={company.logo}
                  alt={company.name}
                />
              ) : (
                <div className="h-16 w-16 rounded-lg bg-gray-200 flex items-center justify-center">
                  <BuildingOfficeIcon className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{company.name}</h2>
              <p className="text-sm text-gray-500">{company.industry?.name}</p>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-600"
                  >
                    <GlobeAltIcon className="h-4 w-4 mr-1" />
                    Website
                  </a>
                )}
                {company.phone && (
                  <span className="flex items-center">
                    <PhoneIcon className="h-4 w-4 mr-1" />
                    {company.phone}
                  </span>
                )}
                {company.email && (
                  <span className="flex items-center">
                    <EnvelopeIcon className="h-4 w-4 mr-1" />
                    {company.email}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`p-3 rounded-md ${stat.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Company Details */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Basic Information */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Thông tin cơ bản</h3>
          </div>
          <div className="px-6 py-4">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Tên công ty</dt>
                <dd className="text-sm text-gray-900">{company.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Lĩnh vực hoạt động</dt>
                <dd className="text-sm text-gray-900">{company.industry?.name || 'Chưa cập nhật'}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Quy mô nhân sự</dt>
                <dd className="text-sm text-gray-900">{company.size || 'Chưa cập nhật'}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Năm thành lập</dt>
                <dd className="text-sm text-gray-900">{company.founded_year || 'Chưa cập nhật'}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Địa chỉ</dt>
                <dd className="text-sm text-gray-900 flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                  {company.address || 'Chưa cập nhật'}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Thông tin liên hệ</h3>
          </div>
          <div className="px-6 py-4">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="text-sm text-gray-900">
                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      {company.website}
                    </a>
                  ) : (
                    'Chưa cập nhật'
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Số điện thoại</dt>
                <dd className="text-sm text-gray-900 flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-1 text-gray-400" />
                  {company.phone || 'Chưa cập nhật'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="text-sm text-gray-900 flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-1 text-gray-400" />
                  {company.email || 'Chưa cập nhật'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Ngày tạo hồ sơ</dt>
                <dd className="text-sm text-gray-900 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                  {new Date(company.created_at).toLocaleDateString('vi-VN')}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Company Description */}
      {company.description && (
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Giới thiệu công ty</h3>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              {company.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
