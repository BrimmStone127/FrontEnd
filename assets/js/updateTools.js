/*jshint esversion:6*/

$(document).ready(function() {
    loadExistingDocuments();


});

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

/**
 * Retrieves the updated info and sends it
 * to the api so that db can be updated
 * @method updateDocInfo
 */
function updateDocInfo() {
    //$("#update-title").val();
    //$("#update-keywords").val();
    //$("#update-abstract").val();
    //$("#update-citation").val();
}