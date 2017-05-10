/*jshint esversion:6*/
/*jshint loopfunc: true */

/**
 * Creates an option element for each Title
 * passed in through the docs array. Adds
 * these options to the select element "search-results"
 * @method displayResults
 * @param {Array}   docs    A collection of titles to be displayed
 */

$(document).ready(function() {
    loadSearch();
});

function displayResults(docs) {
    var results = "";
    $.each(docs, function(index, value) {
        results += `<option id=${value.Id}>${value.Title}</option>`;
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
                documents.push(entity);
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
 * Converts to results page and looks up selection
 * @method lookupResult
 */
function lookupResult() {
    var value = $("#search-results option:selected").attr("id");
    if (value !== undefined) {
        loadResult();
        displayResultInfo(value);
    } else {
        alert("Please select a document to look-up");
    }
}


function loadResult() {
    $('#switchMe').load("../../assets/includes/resultForm.php");
}

/**
 * Returns a jQuery ajax request
 * @method getPaperInfo
 * @param  {Number}     id the id associated with a paper
 * @return {Object}        a jQuery ajax request object
 */
function getPaperInfo(id) {
    return $.ajax({
        type: 'GET',
        cache: false,
        async: true,
        dataType: 'json',
        url: '../../proxy.php',
        data: {
            path: `/Entity/${id}`
        }
    });
}

function getPaperKeywords(id) {
    return $.ajax({
        type: 'GET',
        cache: false,
        async: true,
        dataType: 'json',
        url: '../../proxy.php',
        data: {
            path: `/SearchTerm/${id}`
        }
    });
}

function displayResultInfo(value) {
    var keywords = "";
    getPaperKeywords(value).done(function(kwords) {
        $.each(kwords, function(ind, val) {
            if(ind === 0) {
                keywords += `${val.Keyword}`;
            }
            keywords += `, ${val.Keyword}`;
        });
        getPaperInfo(value).done(function(entity) {
            $("#insert-title").val(entity.Title);
            $("#insert-keywords").val(keywords);
            $("#insert-abstract").val(entity.Abstract);
            $("#insert-citation").val(entity.Citation);
        });
    });


}

function loadSearch() {
    $('#switchMe').load("../../assets/includes/searchForm.php");
}