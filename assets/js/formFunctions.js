/*jshint esversion:6*/

$(document).ready(function() {
    loadExistingDocuments();
});

/*************START SEARCH FUNCTIONS*****************/
/**
 * Test function that parses comma separated keywords
 * from the input and displays them in the select elements
 * @method displayResults
 */
function displayResults() {
    var arr = $("#search-input").val().split(" ");
    var results = "";
    $.each(arr, function( index, value) {
        results += `<option>${value}</option>`;
    });
    $("#search-results").html(results);
}

/**
 * Searches for documents matching the entered
 * keywords and displays them
 * @method searchDocuments
 */
function searchDocuments() {
    displayResults();
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
/*************END SEARCH FUNCTIONS*****************/

/*************START INSERT FUNCTIONS*****************/
/**
 * Adds data from input and textareas to a js object
 * and then logs the object to display the user entered data
 * @method insertEntry
 */
function insertEntry() {
    var data = {};
    data.title = $("#insert-title").val();
    data.keywords = $("#insert-keywords").val().split(",");
    data.abstract = $("#insert-abstract").val();
    data.citation = $("#insert-citation").val();
    console.log(data);
}
/*************END INSERT FUNCTIONS*****************/

/*************START UPDATE FUNCTIONS*****************/
/**
 * This will receive data about a specific faculty
 * user's existing documents from our api, and populate
 * the select menu with these documents
 * @method loadExistingDocuments
 */
function loadExistingDocuments() {
    //for each document associated to a specific faculty
    $("#existing-documents").html("<option onclick='getDocInfo();'>Existing Documents</option>");
}


/**
 * Onclick event from an option within the existing documents
 * select menu, which will contact the api for information related
 * to the selected option. Then it will populate the fields with
 * the related information.
 * @method getDocInfo
 */
function getDocInfo() {
    //get data about documents
    //display data about document
    displayExistingDocumentInfo();
}

/**
 * Receives the data from getDocInfo that we got
 * from the api, and stores the values into each input
 * and textarea
 * @method displayExistingDocumentInfo
 */
function displayExistingDocumentInfo() {
    //$("#update-title").val(value);
    //$("#update-keywords").val(value);
    //$("#update-abstract").val(value);
    //$("#update-citation").val(value);
}
/*************END UPDATE FUNCTIONS*****************/

/*************START DELETE FUNCTIONS*****************/
function deleteDocument() {
    //send delete request with document name
    var docName = $("#existing-documents").val();
    console.log(docName);
}
/*************END DELETE FUNCTIONS*****************/

//example usage of myXHR function
// myXHR('get', {'path':'/mypath/'}).done(function(json){
//   console.log(json);
// });

/**
 * AJAX Utility
 * @param  {String} t 'get' or 'put'
 * @param  {String} d {"path":"/undergrad/"}
 */
function myXHR(t,d) {
  return $.ajax({
    type: t,
    cache:false,
    async:true,
    dataType:'json',
    url:'our url',
    data:d,
    beforeSend:function(){
      //happens before sending...

    }
  }).always(function() {
    //happens no matter what...

  }).fail(function() {
    //handle failures...
    console.log("we failed");
  });
}