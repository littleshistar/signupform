const pass1_input = document.getElementById("pass1");
const pass2_input = document.getElementById("pass2");

pass2_input.addEventListener("change", validatePass);

function validatePass(e) {
    const pass2_message = document.getElementById("pass2_message");
    let pass1 = document.getElementById("pass1");
    let pass2 = e.target;

    if (pass1.value === pass2.value) {
        pass1_input.setAttribute("class", "good");
        pass2_input.setAttribute("class", "good");

        pass2_message.innerText = "";
    } else {
        pass1_input.setAttribute("class", "error");
        pass2_input.setAttribute("class", "error");

        pass2_message.innerText = "* Passwords must match.";
    }
}