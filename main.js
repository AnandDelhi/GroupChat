const message = document.querySelector(".textBox");
const send = document.querySelector(".sendButton");
const thread = document.getElementById("thread");
const logout = document.querySelector(".logoutBtn");

const user = localStorage.getItem("user");
document.getElementById("t1").placeholder = `Welcome ${
  user[0].toUpperCase() + user.slice(1)
}, say Hi to others`;

if (user === "rancho") {
  document.getElementById("1").remove();
}
if (user === "raju") {
  document.getElementById("2").remove();
}
if (user === "farhan") {
  document.getElementById("3").remove();
}

send.addEventListener("click", function () {
  const html = `
    <div class="outgoingMessage">
    <div class="outgoingMessageText">${message.value}</div>
    </div>`;
  thread.insertAdjacentHTML("beforeend", html);

  message.value = "";
  thread.scrollTo(0, 1000);
});

logout.addEventListener("click", function () {
  window.location.href = "index.html";
});
