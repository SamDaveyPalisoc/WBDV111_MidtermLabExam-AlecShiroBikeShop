// Restrict Name field to letters only
document.getElementById("name").addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, "");
});

// FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    const nameRegex = /^[A-Za-z\s]+$/;

    // Validate name
    if (!nameRegex.test(name)) {
        status.textContent = "⚠️ Name must contain letters only.";
        status.style.color = "red";
        return;
    }

    // Validate empty fields
    if (name === "" || email === "" || message === "") {
        status.textContent = "⚠️ Please fill in all fields.";
        status.style.color = "red";
        return;
    }

    // Sending
    status.style.opacity = "1";
    status.textContent = "✅ Sending message...";
    status.style.color = "#ffe600";

    // Simulate sending
    setTimeout(() => {

        document.getElementById("contactForm").reset();

        status.textContent = "✅ Message sent!";
        status.style.color = "lime";

        setTimeout(() => {
            status.style.opacity = "0";
        }, 3000);

    }, 1000);
});

document.getElementById("slides").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("open");
});
