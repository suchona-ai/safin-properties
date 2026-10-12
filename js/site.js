(function () {
  var openButton = document.querySelector("[data-open-quote]");
  var modal = document.querySelector("[data-quote-modal]");
  if (!openButton || !modal) return;

  var closeButton = modal.querySelector("[data-close-quote]");
  openButton.addEventListener("click", function () {
    modal.classList.add("open");
  });
  closeButton.addEventListener("click", function () {
    modal.classList.remove("open");
  });
  modal.addEventListener("click", function (event) {
    if (event.target === modal) modal.classList.remove("open");
  });

  modal.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(event.currentTarget);
    var body = [
      "Name: " + data.get("name"),
      "Email: " + data.get("email"),
      "Contact: " + data.get("contact"),
      "Property Info: " + data.get("propertyInfo")
    ].join("\n");
    window.location.href =
      "mailto:safinproperties@gmail.com?subject=" +
      encodeURIComponent("Free valuation request") +
      "&body=" +
      encodeURIComponent(body);
    modal.classList.remove("open");
  });
})();
