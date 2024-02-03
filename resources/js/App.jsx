import React from 'react';
import { createRoot } from 'react-dom/client';
import Appointments from './components/Appointments';
import Services from './components/Services';
import Banner from './components/Banner';

const App = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex-item'>
                <Banner />
            </div>
            <div className='flex-item'>
                <Services />
            </div>
            <div className='flex-item'>
                <Appointments />
            </div>
        </div>
    );
};

export default App;

const rootElement = document.getElementById('app')
const root = createRoot(rootElement);

root.render(<App />);
