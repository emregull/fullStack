## Project Name

Emre Gül - Full Stack Project

## Getting Started

Follow the steps below to run the project.

## Requirements

- Docker

## Setup

Download or clone this repository:

git clone https://github.com/emregull/fullStack.git

Download the required Composer files:

cd next-backend
composer install

Start the Docker containers:

cd docker
docker-compose up -d

Navigate to the root directory of the Laravel project and run the migrations:

cd ..
php artisan migrate

Start the Laravel server:

php artisan serve

Edit the .env file like .env.example or create it if it doesn't exist:

.env

(You might need to generate a key if prompted by Laravel. You can do this easily by running `php artisan key:generate`.)

Access the application at:

http://localhost:8000

Install the Next.js dependencies:

npm install

Then, start Next.js:

npm run dev

Open your browser and go to http://localhost:3000 to view the application.

Alternatively, access phpMyAdmin in your browser at:

http://localhost:8080

Username: octohaus
Password: octohaus
