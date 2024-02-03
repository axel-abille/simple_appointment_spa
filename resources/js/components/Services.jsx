import React from 'react'

const Services = () => {
    const scrollToAppointments = () => {
        const appointmentsSection = document.getElementById('appointments-section');
        if (appointmentsSection) {
          appointmentsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div id="services-section" className="flex flex-col m-6 sm:flex-row h-screen font-sans">
        <div className="w-full sm:w-1/2 p-12 flex-col text-center justify-center items-center h-full">
            <h3 className="text-2xl md:text-4xl font-bold text-black ml-12"> Expert care for your <br /> furry, feathery, or <br /> scaley friend</h3>
            <div className="flex items-center ml-12 mt-8 mb-8 ">
                <p className=" text-lg md:text-2xl mt-2 text-justify text-black ">
                We know how stressful it is no leave your pets <br />
                at home alone. We`re a team of experienced <br />
                animal caregivers, well connected to local <br />
                veterinarians. Trust to us to love them like our <br />
                own, and to keep them safe and happy till <br />
                You`re home.
                </p>
            </div>
            
            <div className="ml-12"> {/* Use flex justify-center for horizontal centering */}
            <button onClick={scrollToAppointments} className="mb-4 bg-[#444762] hover:bg-[#43456F] text-white font-bold py-2 px-4 rounded-full">
            Schedule a visit
            </button>
            </div>
        </div>
        <div className="w-full sm:w-1/2 p-6 flex-col text-center justify-center items-center h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-cover bg-center sm:24 h-48 md:h-64 w-full" style={{ backgroundImage: 'url("/images/cat.jpg")' }}>
                    {/* Box 1 content */}
                </div>
                <div className="bg-cover bg-center sm:24 h-48 md:h-64 w-full" style={{ backgroundImage: 'url("/images/bird.jpg")' }}>
                </div>
                <div className="bg-cover bg-center sm:24 h-48 md:h-64 w-full" style={{ backgroundImage: 'url("/images/dogsq.jpg")' }}>
                </div>
                <div className="bg-cover bg-center sm:24 h-48 md:h-64 w-full" style={{ backgroundImage: 'url("/images/hamster.jpg")' }}>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
