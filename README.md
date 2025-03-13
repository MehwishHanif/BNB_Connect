# BNB Connect

BNB Connect is an Airbnb clone that facilitates user authentication, property listings, property reviews, and bookings, providing a seamless experience for both hosts and guests.

## Tech Stack

**Frameworks and libraries:**

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/> 

**Database:**

<img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/> <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>

**Hosting:**

<img src="https://img.shields.io/badge/Render-4682B4?style=for-the-badge&logo=render&logoColor=white" alt="Render"/>

## BNB Connect Wiki

For more details on the architecture of BNB Connect, visit the project's wiki pages:

* [API Documentation](https://github.com/MehwishHanif/BNB_Connect/wiki/API-Documentation)
* [Database Schema](https://github.com/MehwishHanif/BNB_Connect/wiki/DB-Schema)

## BNB Connect UI

### Landing Page (Spots List)

* **Overview:** Displays a list of available properties with key details.
* **Property Cards:** Each property is shown in a card with images, title, price, and rating.
* **Navigation:** Users can click on a property card to view detailed information.

![Landing Page](https://github.com/user-attachments/assets/51a5e5f9-d0d3-421b-a5ed-41f7e61581ac)
<br>
### Spot Details

* **Overview:** Displays detailed information about a selected property.
* **Property Details:** Includes images, description and location.
* **Reviews:** Shows user reviews and ratings for the property.

![Spot Details](https://github.com/user-attachments/assets/87544de4-906c-418f-bfbb-6d138184d467)
<br>
### Submit Review

* **Overview:** Allows users to submit reviews and ratings for a property.
* **User Feedback:** Provides confirmation upon successful review submission.

![Add Review](https://github.com/user-attachments/assets/300e5e8e-8350-49b0-b9c0-50f8f1649f30)
<br>
### Create Spot

* **Overview:** Allows hosts to create new property listings.
* **Listing Form:** Includes fields for property details and images.
* **User Guidance:** Provides clear instructions for creating a listing.

![Create Spot](https://github.com/user-attachments/assets/e765344f-2ec2-4ca5-b551-39e4f20bab4a)
<br>
### Manage Spots

* **Overview:** Displays a list of properties owned by the logged-in user.
* **Spot Management:** Allows users to edit or delete their listings.
* **Clear Overview:** Provides a quick view of the user's properties.

![Manage Spots](https://github.com/user-attachments/assets/5a898789-341b-40e5-ad72-0164bfe0f667)
<br>
## Installation

To set up BNB Connect for local development, follow these steps:

1.  **Clone the repository:**

    ```bash
    gh clone MehwishHanif/BNB_Connect
    ```

2.  **Configure the backend environment:**

    ```bash
    cp backend/.env.example backend/.env
    ```

    * Edit `backend/.env` with your desired configuration.

3.  **Install backend dependencies:**

    ```bash
    cd backend && npm install
    ```

4.  **Database setup (development):**

    ```bash
    npx dotenv sequelize db:seed:undo:all
    npx dotenv sequelize db:migrate:undo:all
    npx dotenv sequelize db:migrate
    npx dotenv sequelize db:seed:all
    ```

5.  **Start the backend server:**

    ```bash
    npm start
    ```

6.  **Install frontend dependencies:**

    ```bash
    cd ../frontend && npm install
    ```

7.  **Start the frontend development server:**

    ```bash
    npm run dev
    ```

**Note:**

* BNB Connect is configured to use SQLite3 for development and PostgreSQL for production.
* Make sure you have node, npm, and git installed on your system.
