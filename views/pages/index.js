const { response } = require("express");

// get the form by it's id
const form = document.getElementById("contact_me");

// create event listener for when user submits form 
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    // when event is triggered, we'll create a FormData obect called mail
    // based on teh input values and their name attributes

    let mail = new FormData(form);

    // call a function called sendMail() with mail 
    // passed as a parameter. This function will use Fetch API 
    // to post the mail to the url send (specified in the form element attribute)
    sendMail(mail);
});

const sendMail = (mail) => {
    fetch("https://asialakaydotnet.herokuapp.com/", {
        method: "post",
        body: mail,
    }).then((response) => {
        return response.json();
    });
};