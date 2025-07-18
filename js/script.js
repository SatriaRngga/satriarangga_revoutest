document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome");
  const name = prompt("Hi, what is your name?");
  welcome.textContent = `Hi ${name}, Welcome To Satria Rangga Portofolio`;

  const form = document.getElementById("contactForm");
  const result = document.getElementById("result");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const gender = document.querySelector("input[name='gender']:checked").value;
    result.innerHTML = `
      <p><strong>Current time:</strong> ${new Date().toString()}</p>
      <p><strong>Nama:</strong> ${document.getElementById("name").value}</p>
      <p><strong>Tanggal Lahir:</strong> ${document.getElementById("birthDate").value}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${document.getElementById("messageInput").value}</p>
    `;
  });
});