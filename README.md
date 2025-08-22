# Stock Dashboard Web

This project is a web application built with Angular for managing and visualizing a stock portfolio.

## Features

*   **Home:** A landing page for the application.
*   **Stock:** View and manage your stock portfolio.
*   **Transactions:** Track your stock transactions.
*   **Provents:** Monitor stock earnings, dividends, and other proceeds.
*   **Admin:** An administrative section for managing the application.
*   **About:** Information about the application.
*   **Upload Excel:** Import data from Excel files.

## Technologies

*   [Angular](https://angular.io/)
*   [RxJS](https://rxjs.dev/)
*   [TypeScript](https://www.typescriptlang.org/)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## deploy prod

build:
 ng build --configuration=production

go to resource
 cd .\dist\StockDashboardWeb\browser\

copy to prod
  scp * root@<site>:/var/www/<site>/html
