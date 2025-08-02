# GEMINI.md

## Project Overview

This is an Angular web application named "StockDashboardWeb". Based on the file structure and the `README.md`, it was generated using Angular CLI. The project is set up with a standard Angular structure, including a root component, routing, and configuration for building, serving, and testing the application. The main technologies used are Angular, TypeScript, and RxJS.

## Building and Running

### Development Server

To start a local development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Building

To build the project, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To run unit tests, execute:

```bash
ng test
```

## Development Conventions

The project follows the standard Angular conventions.

*   **Components:** Components are located in the `src/app` directory.
*   **Routing:** The application's routes are defined in `src/app/app.routes.ts`.
*   **Styling:** Global styles are in `src/styles.css`, and component-specific styles are in their respective `.css` files.
*   **Linting:** While not explicitly defined in the provided files, Angular projects typically use a linter like ESLint.
*   **Formatting:** The `package.json` includes a `prettier` configuration for formatting HTML files.
