# CANONICAL Home Test

## Introduction
This is a simple blog post viewer layout created with Vite. The project fetches blog post data from an API and displays the posts in a three-column layout using Canonical's Vanilla Framework for styling.

## Installation
1. Clone this repository to your local machine.
2. Ensure you have Node.js and npm installed on your system.
3. Open a terminal or command prompt, navigate to the project's root folder, and run the following command to install the required dependencies:

```bash
yarn install
# or
npm install
```
## Usage
1. The blog posts will be fetched from the API specified in the `VITE_API_URL` environment variable file. Make sure to set the correct API URL before running the development server. You can do this by renaming the `.env.example` file and placing the URL in there.

2. To start the development server and view the project, use the following command:
```bash
yarn dev
# or
npm run dev
```
This will start the Vite development server, and you can access the project tipically at `http://localhost:5173` (check in the terminal) in your web browser.

You can see this project live at: https://mg-canonical-home-test.netlify.app/