import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

// Format tiền lương từ decimal sang VND
export const formatSalary = (minSalary, maxSalary) => {
  if (!minSalary && !maxSalary) return "Thương lượng";

  const formatNumber = (number) => {
    return new Intl.NumberFormat("vi-VN").format(number);
  };

  if (minSalary && maxSalary) {
    return `${formatNumber(minSalary)} - ${formatNumber(maxSalary)} VNĐ`;
  } else if (minSalary) {
    return `Từ ${formatNumber(minSalary)} VNĐ`;
  } else {
    return `Đến ${formatNumber(maxSalary)} VNĐ`;
  }
};

// Format employment type
export const formatEmploymentType = (type) => {
  const types = {
    full_time: "Full-time",
    part_time: "Part-time",
    contract: "Hợp đồng",
    internship: "Thực tập",
    freelance: "Freelance",
  };
  return types[type] || type;
};

// Format level sang kinh nghiệm
export const formatExperience = (level) => {
  const experiences = {
    intern: "Thực tập",
    fresher: "Fresher",
    junior: "Dưới 2 năm",
    middle: "2-5 năm",
    senior: "5+ năm",
    leader: "5+ năm",
    manager: "5+ năm",
    director: "5+ năm",
  };
  return experiences[level] || "Không yêu cầu";
};

// Format company name (cắt bớt nếu quá dài)
export const formatCompanyName = (name, maxLength = 30) => {
  if (!name) return "";
  if (name.length <= maxLength) return name;
  return name.substring(0, maxLength) + "...";
};

// Format location (cắt bớt nếu quá dài)
export const formatLocation = (location, maxLength = 25) => {
  if (!location) return "";
  if (location.length <= maxLength) return location;
  return location.substring(0, maxLength) + "...";
};

// Format thời gian đăng bài
export const getTimeAgo = (createdAt) => {
  if (!createdAt) return "Vừa xong";
  
  try {
    return formatDistanceToNow(new Date(createdAt), {
      addSuffix: true,
      locale: vi
    })
    .replace('khoảng ', '')
    .replace('ít hơn một', '1')
    .replace('một', '1');
  } catch (error) {
    console.error('Error parsing date:', error);
    return "Vừa xong";
  }
};

// Export object chứa tất cả formatters (tùy chọn)
const formatters = {
  formatSalary,
  formatEmploymentType,
  formatExperience,
  formatCompanyName,
  formatLocation,
  getTimeAgo
};

export default formatters;