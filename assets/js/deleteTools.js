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
    $("#existing-documents").html("<option>Existing Documents</option>");
}

function deleteDocument() {
    //send delete request with document name
    var docName = $("#existing-documents").val();
    console.log(docName);
}