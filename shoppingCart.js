// Task 1: Conditional statement to check if the user is logged in
let loggedIn = true;  // Change to false to test the 'not logged in' scenario

// Task 2: Conditional statement to check if the user is logged in
if (loggedIn) {
    let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];
    
    // Loop over the cart's array and log the list of  products
    console.log("You are logged in! Here are the items in your cart:");
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i]);
    }
} else {
    // If the user is not logged in, tel them to log in
    console.log("You need to log in before you can view your cart.");
}