<main class="insert-form-container">
    <form class="insertForm" id="insert-form">
        <div class="form-group">
            <input type="search" class="form-control" form="insert-form" id="insert-title" placeholder="Title" required />
            <br />
            <textarea class="form-control" id="insert-keywords" form="insert-form" placeholder="Associated Keywords and Search Terms" required></textarea>
            <br />
            <textarea class="form-control" id="insert-abstract" form="insert-form" placeholder="Abstract" required></textarea>
            <br />
            <textarea class="form-control" id="insert-citation" form="insert-form" placeholder="Citation" required></textarea>
            <br />
            <button type="submit" class="btn btn-primary" onclick="insertEntry();" form="insert-form" required>Insert Entry</button>
        </div>
    </form>
</main>