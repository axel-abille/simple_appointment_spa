<?php
use App\Models\Appointment;

public function index()
{
    return Appointment::all();
}

public function store(Request $request)
{
    $data = $request->validate([
        'title' => 'required|string',
        'start_date' => 'required|date',
        'frequency' => 'required|string',
        'days' => 'required|array',
        'times' => 'required|string',
        'notes' => 'nullable|string',
    ]);

    return Appointment::create($data);
}

public function destroy(Appointment $appointment)
{
    $appointment->delete();

    return response()->json(['message' => 'Appointment deleted successfully']);
}

?>