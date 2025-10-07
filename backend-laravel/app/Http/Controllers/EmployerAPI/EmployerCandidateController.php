<?php

namespace App\Http\Controllers\EmployerAPI;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class EmployerCandidateController extends Controller
{
    // Danh sách ứng viên
    public function index(Request $request)
    {
        $query = User::whereHas('profile')
            ->with(['profile.skills']);

        // Tìm kiếm theo tên hoặc email
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('email', 'like', "%$search%")
                  ->orWhereHas('profile', function($q2) use ($search) {
                      $q2->where('full_name', 'like', "%$search%");
                  });
            });
        }

        // Lọc theo kinh nghiệm
        if ($request->filled('experience') && $request->experience !== 'all') {
            $exp = $request->experience;
            $query->whereHas('profile.skills', function($q) use ($exp) {
                if ($exp === '0') $q->where('candidate_skills.experience_years', '=', 0);
                elseif ($exp === '1-2') $q->whereBetween('candidate_skills.experience_years', [1,2]);
                elseif ($exp === '3-5') $q->whereBetween('candidate_skills.experience_years', [3,5]);
                elseif ($exp === '6-8') $q->whereBetween('candidate_skills.experience_years', [6,8]);
                elseif ($exp === '9+') $q->where('candidate_skills.experience_years', '>=', 9);
            });
        }

        // Lọc theo học vấn
        if ($request->filled('education') && $request->education !== 'all') {
            $query->whereHas('profile', function($q) use ($request) {
                $q->where('education_level', $request->education);
            });
        }

        $perPage = 10;
        $candidates = $query->orderBy('id', 'desc')->paginate($perPage);

        return response()->json([
            'data' => $candidates->items(),
            'meta' => [
                'current_page' => $candidates->currentPage(),
                'last_page' => $candidates->lastPage(),
                'total' => $candidates->total(),
            ]
        ]);
    }

    // Chi tiết ứng viên
    public function show($id)
    {
        $candidate = User::with(['profile.skills'])->findOrFail($id);

        return response()->json([
            'data' => $candidate
        ]);
    }
}