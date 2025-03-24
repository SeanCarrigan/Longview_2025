document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer-container").innerHTML = data;
        setCurrentYear(); // Ensure the year updates dynamically
      })
      .catch((error) => console.error("Error loading the footer:", error));
  });
  
  function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  }