# fagui_demo

This project is a chat application built using React. It utilizes the ChatUI library for rendering chat messages and components. The application interacts with the FastGPT API to fetch responses based on user input.

## Project Structure

- **src/**: Contains the main application code.
  - **App.js**: The main component that manages chat messages and user input.
  - **agents/**: Contains the logic for interacting with external APIs.
    - **fastgptAgent.js**: Implements the `fetchFromFastGpt` function to retrieve responses from the FastGPT API.
  - **cards/**: Contains components for rendering specific types of messages.
    - **LinkCard.js**: Renders a card with a link.
    - **ScheduleCard.js**: Renders a card related to scheduling.
- **public/**: Contains static files.
  - **index.html**: The entry point for the web application.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **Dockerfile**: Defines the Docker image for the project.
- **README.md**: Documentation for the project.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fagui_demo
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Docker

To build and run the application using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t fagui_demo .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 fagui_demo
   ```

The application will be accessible at `http://localhost:3000` in your web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.