<main class="search-form-container">
    <form class="searchForm" id="search-form">
        <div class="form-group">
            <input type="search" class="form-control" form="search-form" id="search-input" placeholder="Keyword or Phrase" required />
            <br />
            <button type="submit" class="btn btn-primary" onclick="searchDocuments();" form="search-form">Search for Documents</button>
            <br />
        </div>
        <div class="form-group">
            <select class="form-control" id="search-results" size="5">
                <option>Results</option>
            </select>
            <br />
            <button type="button" class="btn btn-primary" onclick="lookupResult();">Look-up Result</button>
        </div>
    </form>
</main>