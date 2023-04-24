# Note Taker

## Description

Note Taker is a simple, easy-to-use web application that allows users to create, read, and delete notes. This application is perfect for managing to-do lists, reminders, or any type of personal notes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the Note Taker application, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run `node server.js` to start the server.
4. Access the application in your browser at `http://localhost:3001`.

## Usage

- To create a new note, click the "+" icon in the top-right corner.
- To view an existing note, click on the note title in the left-hand panel.
- To delete a note, click on the trash bin icon next to the note title.

## Project Structure

- `public`: Contains the HTML, CSS, and JavaScript files for the front-end of the application.
- `routes`: Contains route files for handling API and HTML requests.
- `controllers`: Contains controller functions that handle the actual business logic for each route.
- `db`: Contains the `db.json` file, which is used as a simple database to store notes.

## API Endpoints

- `GET /api/notes`: Retrieves all notes.
- `POST /api/notes`: Creates a new note.
- `DELETE /api/notes/:id`: Deletes a note with the specified ID.

## Contributing

If you'd like to contribute to the project, feel free to submit a pull request or open an issue. All contributions are welcome!

## License

This project is not licensed.
