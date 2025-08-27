// get all HTML elements
const button = document.querySelector("#button");
const result = document.querySelector("#result");
const userInput = document.querySelector("#date");

// prevent user from choosing future date
userInput.max = new Date().toISOString().split("T")[0];

//MAIN function to calculate user age
function calculateAge() {

    // user birthday
    let birthDate = new Date(userInput.value);
    let userDay = birthDate.getDate();
    let userMonth = birthDate.getMonth() + 1;
    let userYear = birthDate.getFullYear();

    // current date
    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    // start differences
    let years = currentYear - userYear;
    let months = currentMonth - userMonth;
    let days = currentDay - userDay;

    // adjust days
if (days < 0) {
    months = months - 1; 
    let daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    days = days + daysInPrevMonth; 
}

// If months are negative, it means birthday this year hasn't happened yet
if (months < 0) {
    years = years - 1; 
    months = months + 12; 
}

    // show result
    result.style.display = "block"
    result.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}

// click button to show the result
button.addEventListener("click", calculateAge);

// even you can press the Enter key to show the result
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        calculateAge();
    }
});


