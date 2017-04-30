<main class="search-form-container">
    <form class="searchForm" id="search-form">
        <div class="form-group">
            <input type="search" class="form-control" form="search-form" id="search-input" placeholder="Keyword or Phrase" required />
            <br />
            <select class="form-control" id="results-select" size="5">
                <option>Results</option>
            </select>
            <br />
            <button type="button" class="btn btn-primary" onclick="getSearchInput();" form="search-form">Look-up Result</button>
        </div>
    </form>
</main>