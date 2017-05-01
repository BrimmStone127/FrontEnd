/*jshint esversion:6*/
/*jshint loopfunc: true */

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

function searchDocuments(idArr) {
    var documents = [];
    getEntities().done(function(entities) {
        $.each(entities, function(ind, entity) {
            if (idArr.indexOf(entity.Id) >= 0) {
                documents.push(entity.Title);
            }
        });
        displayResults(documents);
    });
}

function getEntities() {
    return $.ajax({
        type: 'GET',
        cache: false,
        async: true,
        dataType: 'json',
        url: '../../proxy.php',
        data: {
            path: '/Entity/'
        }
    });
}

function findMatches() {
    var arr = $("#search-input").val().split(" ");
    var ids = [];
    getKeywords().done(function(jsonArray) {
        $.each(jsonArray, function(index, jsonObj) {
            for (var input of arr) {
                if (jsonObj.Keyword.indexOf(input) >= 0) {
                    if (ids.indexOf(jsonObj.Id) == -1) {
                        ids.push(jsonObj.Id);
                    }
                }
            }
        });
        searchDocuments(ids);
    });
}

function getKeywords() {
    return $.ajax({
        type: 'GET',
        cache: false,
        async: true,
        dataType: 'json',
        url: '../../proxy.php',
        data: {
            path: '/SearchTerm/'
        }
    });
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