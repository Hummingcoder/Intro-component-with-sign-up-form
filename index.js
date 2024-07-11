const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input_Container");

form.addEventListener("submit", (e) => {
  let valid = true;

  inputs.forEach((input) => {
    const childInput = input.querySelector(".input");
    childInput.addEventListener("click", () => {
      childInput.parentElement.classList.remove("err");
    });
    if (childInput.id === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (childInput.value.trim() === "") {
        valid = false;
        input.classList.add("err");
        input.querySelector(".error").innerHTML = "email cannot be empty";
      } else if (!emailPattern.test(childInput.value)) {
        valid = false;
        valid = false;
        input.classList.add("err");
        input.querySelector(".error").innerHTML =
          "looks like this is not an email";
      }
    } else {
      if (childInput.value.trim() === "") {
        valid = false;
        if (childInput.id !== "email") {
          input.classList.add("err");
          input.querySelector(".error").innerHTML =
            childInput.placeholder + " cannot be empty";
        } else if (childInput.id === "email") {
        }
      }
    }
  });

  if (!valid) {
    e.preventDefault();
  }
});
