const logo = document.getElementById("logo");
const age = document.getElementById("age");
const name = document.getElementById("name");
const description = document.getElementById("description");

const userdata = () =>
  fetch("http://localhost:8080/users/1", {
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
let user;
window.onload = async () => {
  user = await userdata();
  logo.src = user.imgURL;
  age.innerText = user.age;
  name.innerText = user.name;
  description.innerText = user.description;
};
