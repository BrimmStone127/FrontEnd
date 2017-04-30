/*jshint esversion:6*/
function displayResults(arr) {
    var results = "";
    for (var item of arr) {
        results += `<option>${item}</option>`;
    }
    $("#search-results").html(results);
}

function getSearchInput() {
    displayResults($("#search-input").val().split(" "));
}

function insertEntry() {
    console.log(getInsertData());
}

function getInsertData() {
    var data = {};
    data.title = $("#insert-title").val();
    data.keywords = $("#insert-keywords").val().split(",");
    data.abstract = $("#insert-abstract").val();
    data.citation = $("#insert-citation").val();
    return data;
}

//TODO add jquery for document ready, ajax and easier selection of elements