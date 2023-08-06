<h3 align="center">The Documentation Compendium</h3>

---
# Angular: Customer List

## Table of Contents

- [About](#about)
- [Deliverables](#deliverables)
- [Acceptance Criteria](#acceptance_criteria)
- [Development server](#server)


## About: <a name = "about"></a>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Deliverables: <a name = "deliverables"></a>

- Create a customer list component, as shown below. Please use the Angular Forms module to solve this challenge.
  <p align="center">
   <img src="https://p79.f0.n0.cdn.getcloudapp.com/items/GGu5e4nK/4dda0a6e-556b-447a-9cf2-0e03a150d9fb.jpeg?source=viewer&v=90ca472044b24ce8734306e77542537d" alt="Angular Customer List"></a>
  </p>

## Acceptance Criteria: <a name = "acceptance_criteria"></a>

- The input should initially be empty.
- If no value is entered, clicking on the 'Add Customer' button should not do anything.
- If a value is present, clicking on the 'Add Customer' button should add the input value to the list below. For this, add `<li>{input}</li> to the <ul data-test-id="customer-list">` element.
- After adding the value to the list, clear the value of the input box.
- Please note that the customer list `<ul>` element should only be rendered if it has at least one customer added (i.e., at least one `<li>` child). So initially, when the app is mounted, the `<ul>` element should not be rendered since no customers have been added.
- All the values added by the button should be rendered in the list below.

## Development server: <a name = "server"></a>

Run `npm run start` for a dev server. This will navigate automatically to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
