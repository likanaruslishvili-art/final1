
document.addEventListener("DOMContentLoaded", () => {
  // მობილური მენიუ
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  // ფილმების ძებნა
  const searchInput = document.querySelector("#search-input");
  const filmCards = document.querySelectorAll(".film-card");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchText = searchInput.value.toLowerCase();

      filmCards.forEach((card) => {
        const filmName = card.textContent.toLowerCase();
        card.style.display = filmName.includes(searchText)
          ? ""
          : "none";
      });
    });
  }

  // ჟანრის ფილტრაცია
  const genreButtons = document.querySelectorAll(".genre-btn");

  genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedGenre = button.dataset.genre;

      filmCards.forEach((card) => {
        const filmGenre = card.dataset.genre;

        card.style.display =
          selectedGenre === "all" || filmGenre === selectedGenre
            ? ""
            : "none";
      });
    });
  });

  // რჩეულებში დამატება
  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      button.textContent = button.classList.contains("active")
        ? "♥"
        : "♡";
    });
  });

  // გვერდის დასაწყისში დაბრუნება
  const topButton = document.querySelector("#back-to-top");

  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  console.log("Cinema & History JavaScript Loaded Successfully!");
});
