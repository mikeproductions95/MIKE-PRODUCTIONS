function searchFunction() {
    const input = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const category = card.querySelector(".card-meta").textContent.toLowerCase();

      if (title.includes(input) || category.includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }