const logo = document.getElementById("logo");
const age = document.getElementById("age");
const name = document.getElementById("name");
const description = document.getElementById("description");
const edulist = document.getElementById("edulist");

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
const educations = () =>
  fetch("http://localhost:8080/users/1/educations", {
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
let edu;
window.onload = async () => {
  user = await userdata();
  edu = await educations();
  window.history.pushState({}, null, `/users/${user.id}`);
  logo.src = user.avatar;
  age.innerText = user.age;
  name.innerText = user.name;
  description.innerText = user.description;
  let a = "";
  edu.forEach((e) => {
    a += `<li class="edu"><div class="eduyear">${e.year}</div><div class="des"><p class="de">${e.description}</p><p>${e.title}</p></div></li>`;
  });
  edulist.innerHTML = a;
};

export default userdata;
