let forminput = document.querySelector("form");

forminput.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("userName").value;
  let email = document.getElementById("userMail").value;
  submitData(name, email);
});

function submitData(name, email) {
  console.log(name);
  console.log(email);
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      let heading = document.createElement("h3");
      heading.textContent = data["id"];
      forminput.appendChild(heading);
    })
    .catch(function (error) {
      let p = document.createElement("p");
      p.textContent = error.message;
      forminput.appendChild(p);
    });
}
