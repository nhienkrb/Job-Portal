<?php

namespace App\Repositories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class CompanyRepository
{
    public function __construct(private Company $company) {}

    public function getAllCompanies(): Collection
    {
        return $this->company->with(['employer', 'industry'])->get();
    }

    public function getPaginatedCompanies(int $perPage = 10): LengthAwarePaginator
    {
        return $this->company->with(['employer', 'industry'])
            ->latest()
            ->paginate($perPage);
    }

    public function getCompaniesWithJobCounts(): Collection
    {
        return $this->company->select('id', 'logo', 'name')
            ->withCount(['jobs' => function ($query) {
                $query->where('is_active', true);
            }])
            ->orderBy('jobs_count', 'desc')
            ->limit(8)
            ->get();
    }


    public function getCompanyById(int $companyId): ?Company
    {
        return $this->company->with(['employer', 'industry', 'jobs'])
            ->find($companyId);
    }

    public function getCompanyByEmployerId(int $employerId): ?Company
    {
        return $this->company->with(['employer', 'industry', 'jobs'])
            ->where('employer_id', $employerId)
            ->first();
    }

    public function createCompany(array $companyData): Company
    {
        return $this->company->create($companyData);
    }

    public function updateCompany(int $companyId, array $companyData): bool
    {
        $company = $this->company->find($companyId);

        if (!$company) {
            return false;
        }

        return $company->update($companyData);
    }

    public function deleteCompany(int $companyId): bool
    {
        $company = $this->company->find($companyId);

        if (!$company) {
            return false;
        }

        return $company->delete();
    }

    public function searchCompanies(string $searchTerm): Collection
    {
        return $this->company->with(['employer', 'industry'])
            ->where('name', 'LIKE', "%{$searchTerm}%")
            ->orWhere('description', 'LIKE', "%{$searchTerm}%")
            ->orWhere('address', 'LIKE', "%{$searchTerm}%")
            ->get();
    }

    public function getCompaniesByIndustry(int $industryId): Collection
    {
        return $this->company->with(['employer', 'industry'])
            ->where('industries_id', $industryId)
            ->get();
    }

    public function updateCompanyLogo(int $companyId, string $logoPath): bool
    {
        return $this->company->where('id', $companyId)
            ->update(['logo' => $logoPath]);
    }

    public function updateCompanyBanner(int $companyId, string $bannerPath): bool
    {
        return $this->company->where('id', $companyId)
            ->update(['banner_company_url' => $bannerPath]);
    }
}
