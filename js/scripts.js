function newItem() {
  // 1. Adding a new item to the list of items:
  let li = document.createElement("li");
  li.classList.add("list-group-item"); // Add list-group-item class
  let inputValue = document.getElementById("input").value;
  li.textContent = inputValue;

  if (inputValue.trim() === "") {
    // Trim to avoid spaces-only input
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }

  // 2. Crossing out an item from the list of items:
  li.addEventListener("dblclick", function () {
    li.classList.toggle("strike");
  });

  // 3(i). Adding the delete button "X":
  let crossOutButton = document.createElement("button");
  crossOutButton.textContent = "X";
  crossOutButton.classList.add("btn", "btn-danger"); // Add btn btn-danger classes
  li.appendChild(crossOutButton);

  // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the CSS:
  crossOutButton.addEventListener("click", function () {
    li.remove(); // Use remove() instead of adding a class for deletion
  });

  // 4. Reordering the items:
  $("#list").sortable(); // jQuery UI sortable still applies here
}
