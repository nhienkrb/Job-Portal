<?php

namespace App\Enums;

class EmploymentTypeEnum
{
    const FULL_TIME = 'full_time';
    const PART_TIME = 'part_time';
    const CONTRACT = 'contract';
    const INTERNSHIP = 'internship';
    const FREELANCE = 'freelance';

    public static function values()
    {
        return [
            self::FULL_TIME,
            self::PART_TIME,
            self::CONTRACT,
            self::INTERNSHIP,
            self::FREELANCE,
        ];
    }
}