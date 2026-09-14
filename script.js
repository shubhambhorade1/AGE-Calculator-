let dobInput = document.getElementById("dob");
let calculateButton = document.getElementById("calculateButton");

let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");

let message = document.getElementById("message");


// Calculate age
calculateButton.addEventListener("click", function () {

    let birthDate = new Date(dobInput.value);
    let today = new Date();

    // Check if date is entered
    if (dobInput.value === "") {
        message.innerText = "Please select your date of birth.";
        return;
    }

    // Check if birth date is in the future
    if (birthDate > today) {
        message.innerText = "Date of birth cannot be in the future.";
        return;
    }

    message.innerText = "";

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust days
    if (ageDays < 0) {
        ageMonths--;

        let previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        ageDays += previousMonth.getDate();
    }

    // Adjust months
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    years.innerText = ageYears;
    months.innerText = ageMonths;
    days.innerText = ageDays;
});
