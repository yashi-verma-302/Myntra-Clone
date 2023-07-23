// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the search input element
  const searchInput = document.querySelector(".search");

  // Function to handle search
  function handleSearch(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      // Redirect to the search page with the search term as a query parameter
      window.location.href = `https://www.myntra.com/search/${encodeURIComponent(
        searchTerm
      )}`;
    }
  }

  // Add event listener to the search input
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  });

  // Get the profile, wishlist, and bag elements
  const profile = document.querySelector(".profile");
  const wishlist = document.querySelector(".wishlist");
  const bag = document.querySelector(".bag");

  // Function to handle profile, wishlist, and bag clicks
  function handleClick(event) {
    event.preventDefault();
    const target = event.target;
    if (target === profile) {
      // Redirect to the user profile page
      window.location.href = "https://www.myntra.com/profile";
    } else if (target === wishlist) {
      // Redirect to the wishlist page
      window.location.href = "https://www.myntra.com/wishlist";
    } else if (target === bag) {
      // Redirect to the shopping bag page
      window.location.href = "https://www.myntra.com/bag";
    }
  }

  // Add event listeners to the profile, wishlist, and bag elements
  profile.addEventListener("click", handleClick);
  wishlist.addEventListener("click", handleClick);
  bag.addEventListener("click", handleClick);
});
