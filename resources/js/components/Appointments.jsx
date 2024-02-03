import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputButtonGroup from './InputButtonGroup';

const Appointments = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const [newAppointment, setNewAppointment] = useState({
        title: '',
        start_time: '',
        end_time: '',
        frequency: 'recurring',
        start_date: '',
        days: [],
        times: [],
        notes: '',
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccessMessage(null);
        }, 5000); // Set a time limit, e.g., 5 seconds
    
        return () => clearTimeout(timer);
    }, [successMessage]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment({ ...newAppointment, [name]: value });
    };

    const handleCreateAppointment = async (e) => {
        setErrorMessage(null);

        if (newAppointment.frequency === 'recurring' && (!newAppointment.days.length || !newAppointment.times.length)) {
            setErrorMessage('Please select at least one day and time for recurring appointments.');
            return;
        }
        e.preventDefault();

        try {
            const response = await axios.post('/api/appointments', newAppointment);
            
            setSuccessMessage(response.data.message)
            setNewAppointment({
                title: '',
                start_time: '',
                end_time: '',
                frequency: 'recurring',
                start_date: '',
                days: [],
                times: 'morning',
                notes: '',
            });
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                // Validation errors
                setErrorMessage(error.response.data.message);
            } else {
                // Other errors
                console.error('Error creating appointment:', error);
            }
          }
    };

    const frequencyOptions = [
    { value: 'recurring', label: 'Recurring' },
    { value: 'one-time', label: 'One Time' },
    ];

    const daysyOptions = [
    { value: 'mon', label: 'Mon' },
    { value: 'tue', label: 'Tue' },
    { value: 'wed', label: 'Wed' },
    { value: 'thu', label: 'Thu' },
    { value: 'fri', label: 'Fri' },
    { value: 'sat', label: 'Sat' },
    { value: 'sun', label: 'Sun' },
    ];

    const timesOptions = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
    // Add other times options as needed
    ];

    const Column_1 = () =>{

        return(
            <div className="w-full sm:w-2/5 p-4 flex-col text-center justify-center items-center bg-[#444762] h-full">
                <div className="mt-12 pt-12 ">
                    <h3 className="mb-6 text-4xl font-bold text-white"> All Services include:</h3>
                    <div className="flex items-center justify-center ">
                        <ul className="p-6 text-2xl list-disc text-justify text-white">
                            <li className="mb-6">A photo update for you along</li>
                            <li className="mb-6">Notification of sitter arrival</li>
                            <li className="mb-6">Treats for your pet</li>
                        </ul>
                    </div>
                </div>
        
                <div className="bottom-0 left-0">
                    <img src={'/images/doogy.png'} alt="Background Image" className="h-64" />
                </div>
            </div>
        ) 
    }

    const Column_2 = () =>{
        return(
            <div className="w-full sm:w-3/5 p-4 flex-col justify-center items-center bg-[#F5E7E6] h-full">
                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6 items-center mx-10  h-full">
                    <div className="sm:col-span-6">
                        <h1 className="text-5xl font-bold mt-4 mb-4 text-justify"> We'll take your dog for a <br /> walk. Just tell us when!</h1>
                        {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    </div>
                    <div className="sm:col-span-3">
                        <label>
                        Frequency
                        </label>
                        <InputButtonGroup
                        options={frequencyOptions}
                        selectedValue={newAppointment.frequency}
                        onChange={(value) => setNewAppointment({ ...newAppointment, frequency: value })}
                        className="bg-white p-2"
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <label>Start Date:</label>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-2">
                            <input
                                type="date"
                                name="start_date"
                                min={new Date().toJSON().slice(0, 10)}
                                value={newAppointment.start_date}
                                className="py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-6">
                        <label>Days:</label>
                        <InputButtonGroup
                        options={daysyOptions}
                        selectedValue={newAppointment.days}
                        onChange={(value) => setNewAppointment({ ...newAppointment, days: value })}
                        isMultiple
                        className="bg-white p-2"
                        />
                    </div>

                    <div className="sm:col-span-6">
                        <label>Times:</label>
                        <InputButtonGroup
                        options={timesOptions}
                        selectedValue={newAppointment.times}
                        onChange={(value) => setNewAppointment({ ...newAppointment, times: value })}
                        isMultiple
                        className="bg-white p-2"
                        />
                    </div>
                    <div className="sm:col-span-6">
                        <label>Notes:</label>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-2">
                            <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            value={newAppointment.notes}
                            onChange={handleInputChange}
                            className="w-full flex-grow !outline-none "
                            />
                        </div>
                        
                    </div>
                    <div className="sm:col-span-6">
                        <div className="flex flex-col justify-center  sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#444762] hover:bg-[#43456F] text-white font-bold py-2 px-4 rounded-full" onClick={handleCreateAppointment}>Create Appointment</button>
                        </div>
                    </div>
                </div>
          </div>
        )
    }

    return (
        <div id="appointments-section" className="flex flex-col sm:flex-row h-screen font-sans">
            <Column_1 />
            <Column_2 />
        </div>

    );
};

export default Appointments;
