import React from 'react';

const Banner = () => {
  const scrollToAppointments = () => {
    const appointmentsSection = document.getElementById('appointments-section');
    if (appointmentsSection) {
      appointmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("/images/dogbanner.jpg")' }}>
      <div className="w-full flex justify-end p-6 mb-6">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 flex-col text-justify items-center p-6 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">We care for your furry little love ones</h1>
          <button
            onClick={scrollToAppointments}
            className="mb-4 bg-white hover:bg-[#43456F] hover:text-white text-[#444762] font-bold py-2 px-4 rounded-full"
          >
            Schedule a visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
