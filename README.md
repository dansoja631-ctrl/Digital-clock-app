#Digital Clock App

Description
This is a simple interactive digital clock built using HTML, CSS, and JavaScript. It displays the current time in real time and has a clean, responsive user interface.

Features
- Live digital clock
- 12-hour and 24-hour time display
- Responsive design
- Simple and user-friendly interface

Technologies Used
- HTML
- CSS
- JavaScript

How to Run
1. Download or clone the repository.
2. Open `index.html` in any web browser.

Project Structure
Digital-clock-app/
│── index.html
│── style.css
│── script.js
└── README.md

Running with Docker
Step 1: Build the Docker Image
docker build -t digital-clock .
 Step 2: Run the Docker Container
docker run -d -p 8080:80 digital-clock
Step 3: Open the Application
Visit the following URL in your browser:
http://localhost:8080
Application Screenshot
When the application starts, it displays:
- Current Time
- Current Date
The time updates automatically every second without refreshing the page.
 Future Improvements
- Countdown Timer
- Multiple Time Zones
- Analog Clock View
- Custom Themes
Learning Objectives
This project demonstrates:
- HTML page structure
- CSS styling and responsive design
- JavaScript DOM manipulation
- Date and Time API
- Docker containerization
Author
Mustapha Aliyu

License
This project is for educational purposes.
