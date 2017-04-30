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

function insertEntry() {
    var insertData = getInsertData();
    console.log(insertData);
}

function getInsertData() {
    var data = {};
    data.title = document.getElementById("insert-title").value;
    data.keywords = document.getElementById("insert-keywords").value.split(",");
    data.abstract = document.getElementById("insert-abstract").value;
    data.citation = document.getElementById("insert-citation").value;
    return data;
}