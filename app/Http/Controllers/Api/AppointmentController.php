<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index()
    {
        $appointments = Appointment::all();
        return response()->json(['data' => $appointments]);
    }

    public function store(Request $request)
    {
        // Validate the request and store the appointment in the database
        $validatedData = $request->validate([
            'frequency' => 'required|in:recurring,one-time',
            'start_date' => 'required|date_format:Y-m-d',
            'days' => 'nullable|array',
            'times' => 'nullable|array',
            'notes' => 'nullable|string',
            // Add other specific rules
        ]);
        
        // Create a new appointment using mass assignment
        $appointment = Appointment::create([
            'frequency' => $validatedData['frequency'],
            'start_date' => $validatedData['start_date'],
            'days' => json_encode($validatedData['days']), // Convert array to JSON string
            'times' => json_encode($validatedData['times']), // Convert array to JSON string
            'notes' => $validatedData['notes'],
            // Add other fields as needed
        ]);

        return response()->json(['message' => 'Appointment created successfully', 'data' => $appointment], 201);
    }

    // Add other methods like show, update, destroy based on your requirements
}
