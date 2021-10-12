// console.log(customers)
// let customer = customers[0]
// console.log(customer)

// Identifies the root div in the html doc
const root = document.getElementById("root")
// Creates a container div
const container = document.createElement("div")
// Adds the container div to the root div
root.appendChild(container);
// Identify the styles that will apply to the container div
container.classList.add("container")

// create a div for each customer in our list, 
for (let customer of customers) {
    const customerCard = document.createElement("div");
    customerCard.id = `${customer.id.value}`;
    container.appendChild(customerCard);
// Identify the styles that will pertain to the card
    customerCard.classList.add(
        "card",
        "card-content",
        // "card-default",
        // "width-style",
    )
    // customerCard.id = `$(customer.id)`;
    // console.log(customerCard)
   
    // use template literals to create html elements that show up inside of the customer card
    // idenitfy style inline. Example: <h3 class="class-name-for-h3">
    customerCard.innerHTML = `
    <img class="card-image" src=${customer.picture.thumbnail} alt="person-headshot" />
    <h3 class="card-header-title.is-centered">${customer.name.first} ${customer.name.last}</h3>
    <p>${customer.email}</p>
    <p>${customer.location.street.number} ${customer.location.street.name}<br>${customer.location.city}, ${customer.location.state} ${customer.location.postcode}</p>
    <p>DOB: ${customer.dob.date}<br>Customer since: ${customer.registered.date}
    `
}





// window.addEventListener("load") =>