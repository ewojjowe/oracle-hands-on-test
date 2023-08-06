function onSubmit(form) {
	// Get form input contact info
	let name = form.name.value;
	let mobile = form.mobile.value;
	let email = form.email.value;

	// Get the error element
	let errorElement = document.getElementById("error");

	// Validate form input
	if (validateFormInput(name, mobile, email)) {
		errorElement.style.display = "none";
	} else {
		errorElement.style.display = "block";
		return
	}

	// Reset form
	document.getElementById("addContactForm").reset();

	// Append contact to table
	addContact(name, mobile, email)
}

function addContact(name, mobile, email) {
	// Get the table element in which you want to add row
	let table = document.getElementById("contactTable");

	// Specify index where to add the row
	let row = table.insertRow(-1); // We are adding at the end
	// row.classList.add('custom-tr');

	// Create table cells
	let c1 = row.insertCell(0);
	let c2 = row.insertCell(1);
	let c3 = row.insertCell(2);

	// Add data to c1, c2, and c3
	c1.innerHTML = name;
	c2.innerHTML = mobile;
	c3.innerHTML = email;
}

function validateFormInput(name, mobile, email) {
	// General input check
	if (
		!name
		|| !mobile
		|| !email
	) {
		return false
	}

	/**
	* The name input field should pass the following validations.
	* - The field is required.
	* - It should contain only Alphabets and Space.
	* - It should be less than or equal to 20 characters in length.
	*/
	let nameRegex = new RegExp("^[a-zA-Z ]+$")
	if (!nameRegex.test(name) || name.length > 20) {
		return false
	}

	/**
	* The mobile input field should pass the following validations.
	* - The field is required.
	* - It should contain only Numbers.
	* - It should be equal to 10 characters in length.
	*/
	if (mobile.length !== 10) {
		return false
	}

	/**
	* The email input field should pass the following validations.
	* - The field is required.
	* - A valid email address should have the following rules:
	* 	- It should start with a letter and can contain combinations of only letters, digits, and dots until it reaches the symbol @.
	* 	- It can have 2 to 10 characters before the symbol @.
	* 	- After the symbol @, it should contain 2 to 20 alphabetic characters before encountering the dot symbol (.).
	* 	- After the (.) dot symbol, it should contain 2 to 10 alphabetic characters.
	* 	- Eg: john.doe3@gmail.com is a valid email address.
	*/
	let emailRegex = new RegExp("^[a-zA-Z][a-zA-Z0-9.]{1,9}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$")
	if (!emailRegex.test(email)) {
		return false
	}

	return true
}
