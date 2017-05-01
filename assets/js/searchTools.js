/*jshint esversion:6*/
/*jshint loopfunc: true */

/**
 * Creates an option element for each Title
 * passed in through the docs array. Adds
 * these options to the select element "search-results"
 * @method displayResults
 * @param {Array}   docs    A collection of titles to be displayed
 */
function displayResults(docs) {
    var results = "";
    $.each(docs, function(index, value) {
        results += `<option>${value}</option>`;
    });
    $("#search-results").html(results);
}

/**
 * Loops through each entity and if the current
 * entity's id matches a value in idArr, then the
 * title is added to documents and passed to display.
 * @method searchDocuments
 * @param  {Array}  idArr   An array of ids
 */
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

/**
 * Makes an ajax call for all entities
 * @method getEntities
 * @return {Object}    Ajax request object
 */
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

/**
 * Finds matches between user input keywords
 * and keywords from the api, and stores the ids
 * and passes the ids along to searchDocuments
 * @method findMatches
 */
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

/**
 * Makes an ajax call for all search terms
 * @method getKeywords
 * @return {Object}    An ajax request object
 */
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