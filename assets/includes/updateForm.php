<main class="update-form-container">
    <form class="updateForm" id="update-form">
        <div class="existing-entries-container">
            <select class="form-control" id="existing-entries" size="5">
                <option>Results</option>
            </select>
            <br />
        </div>
        <div class="form-group">
            <input type="search" class="form-control" form="update-form" id="update-title" placeholder="New Title"/>
            <br />
            <textarea class="form-control" id="update-keywords" form="update-form" placeholder="New Keywords and Search Terms"></textarea>
            <br />
            <textarea class="form-control" id="update-abstract" form="update-form" placeholder="New Abstract"></textarea>
            <br />
            <textarea class="form-control" id="update-citation" form="update-form" placeholder="New Citation"></textarea>
            <br />
            <button type="submit" class="btn btn-primary" onclick="updateEntry();" form="update-form">Update Entry</button>
        </div>
    </form>
</main>