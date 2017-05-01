/*jshint esversion:6*/

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