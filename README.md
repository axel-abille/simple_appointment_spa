# Laravel 10 Appointment SPA with Vite and React

This Laravel project implements a single-page application (SPA) for managing appointments. The frontend is powered by Vite and React.

## Table of Contents

- [Laravel 10 Appointment SPA with Vite and React](#laravel-10-appointment-spa-with-vite-and-react)
  - [About the Project](#about-the-project)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Usage](#usage)
  
## About the Project

This Laravel project serves as a backend API for an appointment management system with a Vite and React-powered single-page application (SPA).

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- PHP
- Composer
- Node.js
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/axel-abille/simple_appointment_spa.git

2. Install PHP dependencies

   composer install

3. Install Node.js dependencies

   npm install

### Configuration

1. Configure your database connection in the `.env` file

    Replace your_database_host, your_database_port, your_database_name, your_database_username, and your_database_password with your actual database credentials.

   DB_CONNECTION=mysql
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password

2. Migrate the Database:

   Run the following command to apply the database migrations:

   ```bash
   php artisan migrate

## Usage

1. Start the Development Server:

   Run the following commands to start the development server for both Laravel and Vite:

   ```bash
   # Start the Laravel server
   php artisan serve

   # Start the Vite server
   npm run dev



