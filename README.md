# DaisyUI Starter Pack with Alpine.js

Welcome to the DaisyUI Starter Pack with Alpine.js! This guide will help you set up and run this project on your local machine. Don't worry if you're new to JavaScript, NPM, or other tools – we'll walk you through each step.

## What You Need

Before you begin, make sure you have the following installed on your computer:

1. **Node.js**: This is the JavaScript runtime you'll need to run the project.
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

## Setting Up the Project

1. **Clone the Repository**: Open your terminal or command prompt and run the following command to clone the project to your local machine:

    ```sh
    git clone https://github.com/mannyebi/Daisyui_starter_pack.git
    ```

2. **Navigate to the Project Directory**: Change into the project directory by running:

    ```sh
    cd Daisyui_starter_pack
    ```

3. **Install Project Dependencies**: Run the following command to install all necessary dependencies:

    ```sh
    npm install
    ```

## Building the CSS

This project uses Tailwind CSS for styling. Tailwind CSS only includes the styles that are used in your HTML files in the final output CSS file. This helps keep the file size small.

4. **Build the CSS**: Run the following command to build the CSS file:

    ```sh
    npm run build
    ```

## Running the Project

5. **Serve the Project**: You can use a simple static server to serve your project. If you don't have one installed, you can use the `serve` package. First, install it globally:

    ```sh
    npm install -g serve
    ```

    Then, run the server:

    ```sh
    serve -s .
    ```

6. **Open the Project in Your Browser**: After running the server, you should see a message indicating the local address where the project is being served (e.g., `http://localhost:5000`). Open your web browser and navigate to that address to see the project in action.

## Project Structure

Here's a quick overview of the important files and directories in this project:

- `src/`: This directory contains the source files.
  - `styles.css`: The main CSS file where Tailwind directives are included.
  - `index.html`: The main HTML file for the project.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `postcss.config.js`: Configuration file for PostCSS.
- `package.json`: Contains project metadata and dependencies.

## Summary

You've successfully set up and run the DaisyUI Starter Pack with Alpine.js! Feel free to explore and modify the project. If you have any questions or run into issues, don't hesitate to reach out for help.

Happy coding!