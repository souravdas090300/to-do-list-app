function newItem() {
  // 1. Adding a new item to the list of items:
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.text(inputValue);

  if (inputValue.trim() === "") {
    // Trim to avoid spaces-only input
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  // 2. Crossing out an item from the list of items:
  li.on("dblclick", function () {
    li.toggleClass("strike");
  });

  // 3(i). Adding the delete button "X":
  let crossOutButton = $("<button></button>");
  crossOutButton.text("X");
  li.append(crossOutButton);

  // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the CSS:
  crossOutButton.on("click", function () {
    li.remove(); // Use remove() instead of adding a class for deletion
  });

  // 4. Reordering the items:
  $("#list").sortable();
}
