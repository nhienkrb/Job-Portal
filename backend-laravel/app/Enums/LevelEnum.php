<?php

namespace App\Enums;

class LevelEnum
{
    const INTERN = 'intern';
    const FRESHER = 'fresher';
    const JUNIOR = 'junior';
    const MIDDLE = 'middle';
    const SENIOR = 'senior';
    const LEADER = 'leader';
    const MANAGER = 'manager';
    const DIRECTOR = 'director';

    public static function values()
    {
        return [
            self::INTERN,
            self::FRESHER,
            self::JUNIOR,
            self::MIDDLE,
            self::SENIOR,
            self::LEADER,
            self::MANAGER,
            self::DIRECTOR,
        ];
    }
}