<h3 align="center">The Documentation Compendium</h3>

---
# Phone Directory

## Table of Contents

- [About](#about)
- [Deliverables](#deliverables)
- [Acceptance Criteria](#acceptance_criteria)
- [Development server](#server)


## About: <a name = "about"></a>

This project was created using [HTML](#), [CSS](#), and [Javascript](#)

## Deliverables: <a name = "deliverables"></a>

- Create a Phone Directory component as shown below:
  <p align="center">
   <img src="https://p79.f0.n0.cdn.getcloudapp.com/items/p9uZoNpb/1f6202b9-2315-4ef0-b744-8e2ab8d58eaf.jpeg?source=viewer&v=44cfa8ec344540f7231be83a9f8f08a4" alt="Phone Directory"></a>
  </p>

## Acceptance Criteria: <a name = "acceptance_criteria"></a>

- The name input field should pass the following validations. In case of error, the `Invalid Input!` message should be shown in `<div id="error" data-testid="error"></div>`.
  - The field is required.
  - It should contain only Alphabets and Space.
  - It should be less than or equal to 20 characters in length.
- The mobile input field should pass the following validations. In case of error, the `Invalid Input!` message should be shown in `<div id="error" data-testid="error"></div>`.
  - The field is required.
  - It should contain only Numbers.
  - It should be equal to 10 characters in length.
- The email input field should pass the following validations. In case of error, the `Invalid Input!` message should be shown in `<div id="error" data-testid="error"></div>`.
  - The field is required.
  - A valid email address should have the following rules:
  - It should start with a letter and can contain combinations of only letters, digits, and dots until it reaches the symbol @.
  - It can have 2 to 10 characters before the symbol @.
  - After the symbol @, it should contain 2 to 20 alphabetic characters before encountering the dot symbol (.).
  - After the (.) dot symbol, it should contain 2 to 10 alphabetic characters.
  - Eg: `john.doe3@gmail.com` is a valid email address.
- If the submit button is clicked and any of the above-mentioned validations fail, show the alert box `<div id="error" data-testid="error"></div>`.
- When the submit button is clicked, and all the validations pass,

## Development server: <a name = "server"></a>

On root directory run `node main.js` to serve the site. Navigate automatically to `http://localhost:4201/`.

