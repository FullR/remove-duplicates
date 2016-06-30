const {timeFunction} = require("./util");
const filterDuplicate = require("./filter-duplicate");
const defaultEmailList = require("./default-email-list");

const $ = document.querySelector.bind(document);

// cache elements
const elements = {
  filterButton: $(".filter-button"),
  emailInput: $(".email-input"),
  filteredEmailOutput: $(".filtered-email-output"),
  filterTimeOutput: $(".filter-time-output")
};

// render default email list
elements.emailInput.value = defaultEmailList.join(",\n");

elements.filterButton.addEventListener("click", () => {
  const inputEmailList = elements.emailInput.value
    .split(",")
    .map((s) => s.trim()) // cut off whitespace
    .filter((s) => s.length > 0); // remove blank lines


  const {result, elapsed} = timeFunction(() => filterDuplicate(inputEmailList));

  elements.filteredEmailOutput.value = result.join(",\n");
  elements.filterTimeOutput.textContent = `Completed in ${elapsed}ms`;
});
