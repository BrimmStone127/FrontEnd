/*jshint esversion:6*/
function displayResults(arr) {
    var area = document.getElementById("results-area");
    var results = "";
    for (var item of arr) {
        results += `${item}\n`;
    }
    area.value = results;
}

function getSearchInput() {
    var input = document.getElementById("search-input");
    var arr = input.value.split(" ");
    displayResults(arr);
}

