const randomMessages = [
  `Teacher Ne Gadhe Ke Saamne Ek Bottle Daaru Ki Aur Ek Balti Paani Ki Rakhi... Gadha Saara Paani Pi Gaya,
Teacher Ne Baccho Se Pucha... Ki Tumne Kya Seekha?
Bacche: Jo Daaru Nhi Pitaa Wo Gadha Hai.`,
  `Teacher: Agar Tumhara Best Friend Aur Girlfriend Dono Dubh Rahe Ho to Tum Kise Bachaaoge?
Student: Dubh Jaane Do Saalo Ko... Aakhir Wo Dono Ek Saath Kar Kya Rahe the?`,
  `Yamraj: Hello Friend, Mai Aa Gaya Hu,
Husband : Par Mai Toh Fit Hun Ekdam,
Yamraj : Tu Mobile Bina Lock Kiye Ghar Pe Bhul Aaya Hai
Aur Teri Biwi Tere Messages Padh Rahi Hai,
Husband: Chalo Nikalte Hai Fir.`,
  `Apni Fiki Si Zindgi Me Tadka Lagaaye,
Apni Love Story Apni Biwi Ko Bataaye.`,
  `Patni Ne Dur Se Ungli Ka Ishara Kar Pati Ko Bulaya.
Pati: Haa Bataao Kya Kaam Hai?
Patni: Kuch Nahi Bus Ungli Ki Shakti Check Kar Rahi Thi.`,
  `Etihas Gawaah Hai,
Aaj Tak Kisi Ke Sapne Me, Uski Biwi Nhi Aayi Hogi.`,
  `Girl: Kya Shaadi Ke Baad Bhi Tum Mujhe Itna Pyar Kroge?
Pappu: Kyo Nhi? Me to Diwaana Hu Shadi-shuda Aurto Ka.`,
];

const message = document.querySelector(".textBox");
const send = document.querySelector(".sendButton");
const thread = document.getElementById("thread");
const logout = document.querySelector(".logoutBtn");
const userList = ["farhan", "raju", "rancho"];

const user = localStorage.getItem("user");
document.getElementById("t1").placeholder = `Welcome ${
  user[0].toUpperCase() + user.slice(1)
}, say Hi to others`;

const randomUsers = userList.filter((e) => e !== user);

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
  const randomNo = Math.trunc(Math.random() * randomMessages.length - 1);
  const randomUser = randomUsers[Math.trunc(Math.random() * 2)];

  const html = `
    <div class="outgoingMessage">
    <div class="outgoingMessageText">${message.value}</div>
 </div>`;

  const html2 = `<div class="incomingMessage">
  <div class="messageLabel">${randomUser}</div>
  <div class="incomingMessageText">${randomMessages[randomNo]}</div>
</div>`;

  thread.insertAdjacentHTML("beforeend", html);
  message.value = "";
  thread.insertAdjacentHTML("beforeend", html2);
  thread.scrollTo(0, 100000);
});

logout.addEventListener("click", function () {
  window.location.href = "index.html";
});
