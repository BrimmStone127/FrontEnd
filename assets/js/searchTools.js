/*jshint esversion:6*/

/**
 * Test function that parses comma separated keywords
 * from the input and displays them in the select elements
 * @method displayResults
 */
function displayResults(docs) {
    var results = "";
    $.each(docs, function(index, value) {
        results += `<option>${value}</option>`;
    });
    $("#search-results").html(results);
}

function searchDocuments() {
    var arr = $("#search-input").val().split(" ");
    var documents = [];
    $.each(arr, function(index,value) {
        $.ajax({
            type: 'GET',
            cache: false,
            async: true,
            dataType: 'json',
            url: '../../proxy.php',
            data: {
                path: '/Entity/'
            },
            success: function(data) {
                console.log(data);
            },
            fail: function() {
                console.log("we failed");
            }
        });
    });
    //displayResults(documents);
}

/**
 * Logs the selected value of the search results
 * @method lookupResult
 */
function lookupResult() {
    var value = $("#search-results").val();
    if (value !== null) {
        console.log(value);
    } else {
        alert("Please select a document to look-up");
    }
}