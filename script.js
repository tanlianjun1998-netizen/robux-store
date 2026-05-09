function submitOrder() {
  const product = document.getElementById("product").value;
  const username = document.getElementById("username").value;
  const contact = document.getElementById("contact").value;

  if (!username || !contact) {
    alert("Please fill all fields!");
    return;
  }

  // Save locally (demo)
  console.log({
    product,
    username,
    contact
  });

  document.getElementById("msg").innerText =
    "Order submitted successfully! We will contact you soon.";

  document.getElementById("username").value = "";
  document.getElementById("contact").value = "";
}