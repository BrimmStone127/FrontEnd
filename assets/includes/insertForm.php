<div class="splashHeader">
    <h2>Insert A Paper</h2>
</div>
<form class="insertForm" id="insert-form">
    <div class="form-group">
        <input type="text" class="form-control" form="insert-form" id="insert-title" placeholder="Title" required />
        <br />
        <textarea class="form-control" id="insert-keywords" form="insert-form" placeholder="Comma Separated Keywords" required ></textarea>
        <br />
        <textarea class="form-control" id="insert-abstract" form="insert-form" placeholder="Abstract"></textarea>
        <br />
        <textarea class="form-control" id="insert-citation" form="insert-form" placeholder="Citation"></textarea>
        <br />
        <button type="button" class="btn btn-primary" onclick="insertEntry();" form="insert-form">Insert Entry</button>
    </div>
</form>
