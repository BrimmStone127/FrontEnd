<div class="splashHeader">
    <h2>Search For A Paper</h2>
</div>
<form class="searchForm" id="search-form">
    <div class="form-group">
        <input type="search" class="form-control" form="search-form" id="search-input" placeholder="Keyword or Phrase" required />
        <br />
        <button type="button" class="btn btn-primary" onclick="findMatches();" form="search-form">Search for Documents</button>
        <br />
    </div>
    <div class="form-group">
        <select class="form-control" id="search-results" size="5">
        </select>
        <br />
        <button type="button" class="btn btn-primary" onclick="lookupResult();">Look-up Result</button>
    </div>
</form>
