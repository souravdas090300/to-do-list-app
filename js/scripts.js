function newItem() {
  // 1. Adding a new item to the list of items:
  let inputValue = $("#input").val();
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let li = $("<li></li>").text(inputValue);
    $("#list").append(li);

    // 2. Crossing out an item from the list of items:
    li.on("dblclick", function () {
      $(this).toggleClass("strike");
    });

    // 3(i). Adding the delete button "X":
    let crossOutButton = $("<button></button>").text("X");
    li.append(crossOutButton);

    // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on("click", function () {
      li.addClass("delete");
    });
  }

  // 4. Reordering the items:
  $("#list").sortable();
}
