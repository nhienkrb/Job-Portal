<?php

namespace App\Services;

use App\Repositories\CompanyRepository;
use App\Models\Company;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class CompanyService
{
    public function __construct(private CompanyRepository $companyRepository) {}

    public function getAllCompanies(): Collection
    {
        return $this->companyRepository->getAllCompanies();
    }

    public function getPaginatedCompanies(int $perPage = 10): LengthAwarePaginator
    {
        return $this->companyRepository->getPaginatedCompanies($perPage);
    }

    public function getCompanyById(int $companyId): ?Company
    {
        return $this->companyRepository->getCompanyById($companyId);
    }

    public function getCompanyByEmployerId(int $employerId): ?Company
    {
        return $this->companyRepository->getCompanyByEmployerId($employerId);
    }

    public function createCompany(array $companyData): Company
    {
        // Validate required fields
        $validatedData = validator($companyData, [
            'employer_id' => 'required|exists:users,id',
            'name' => 'required|string|max:255',
            'industries_id' => 'nullable|exists:industries,id',
            'description' => 'nullable|string',
            'address' => 'nullable|string',
            'website' => 'nullable|url',
            'size' => 'nullable|in:1-50,51-200,201-500,501-1000,1000+',
        ])->validate();

        return $this->companyRepository->createCompany($validatedData);
    }

    public function updateCompany(int $companyId, array $companyData): bool
    {
        $validatedData = validator($companyData, [
            'name' => 'sometimes|required|string|max:255',
            'industries_id' => 'nullable|exists:industries,id',
            'description' => 'nullable|string',
            'address' => 'nullable|string',
            'website' => 'nullable|url',
            'size' => 'nullable|in:1-50,51-200,201-500,501-1000,1000+',
        ])->validate();

        return $this->companyRepository->updateCompany($companyId, $validatedData);
    }

    public function deleteCompany(int $companyId): bool
    {
        $company = $this->companyRepository->getCompanyById($companyId);

        // Delete associated files
        if ($company->logo) {
            Storage::delete($company->logo);
        }
        if ($company->banner_company_url) {
            Storage::delete($company->banner_company_url);
        }

        return $this->companyRepository->deleteCompany($companyId);
    }

    public function searchCompanies(string $searchTerm): Collection
    {
        return $this->companyRepository->searchCompanies($searchTerm);
    }

    public function getCompaniesByIndustry(int $industryId): Collection
    {
        return $this->companyRepository->getCompaniesByIndustry($industryId);
    }
    
    public function getCompaniesWithJobCounts(): Collection
    {
        return $this->companyRepository->getCompaniesWithJobCounts();
    }


    public function updateCompanyLogo(int $companyId, UploadedFile $logo): bool
    {
        $company = $this->companyRepository->getCompanyById($companyId);

        // Delete old logo if exists
        if ($company->logo) {
            Storage::delete($company->logo);
        }

        // Store new logo
        $logoPath = $logo->store('company/logos', 'public');

        return $this->companyRepository->updateCompanyLogo($companyId, $logoPath);
    }

    public function updateCompanyBanner(int $companyId, UploadedFile $banner): bool
    {
        $company = $this->companyRepository->getCompanyById($companyId);

        // Delete old banner if exists
        if ($company->banner_company_url) {
            Storage::delete($company->banner_company_url);
        }

        // Store new banner
        $bannerPath = $banner->store('company/banners', 'public');

        return $this->companyRepository->updateCompanyBanner($companyId, $bannerPath);
    }

    public function getCompanyWithJobs(int $companyId): ?Company
    {
        return $this->companyRepository->getCompanyById($companyId);
    }
}
