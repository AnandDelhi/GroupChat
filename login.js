const user1 = {
  username: "farhan",
  password: "1234",
};
const user2 = {
  username: "rancho",
  password: "2345",
};
const user3 = {
  username: "raju",
  password: "3456",
};
let currentUser;

const usernameInput = document.querySelector(".inputUsername");
const passwordInput = document.querySelector(".inputPassword");

const loginButton = document.querySelector(".btn");

const checkCredentials = function (usernameInput, passwordInput) {
  return (
    (usernameInput.value.toLowerCase() === user1.username &&
      passwordInput.value === user1.password) ||
    (usernameInput.value.toLowerCase() === user2.username &&
      passwordInput.value === user2.password) ||
    (usernameInput.value.toLowerCase() === user3.username &&
      passwordInput.value === user3.password)
  );
};

loginButton.addEventListener("click", function () {
  if (checkCredentials(usernameInput, passwordInput)) {
    window.location.href = "main.html";
  } else {
    alert("Invalid username password");
  }
  currentUser = usernameInput.value.toLowerCase();
  localStorage.setItem("user", currentUser);
});
