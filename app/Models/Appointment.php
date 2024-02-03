<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'frequency', // Add other fields as needed
        'start_date',
        'days',
        'times',
        'notes',
        // Add other fields as needed
    ];
}
