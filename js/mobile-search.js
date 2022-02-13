(function() {

  var cse_id = '005080790043434952430:owombz81muo',

    is_open = false,

    MSearch = {

      init: function() {
        document.getElementById('open-search').onclick = MSearch.onSearchClick;
      },

      onSearchClick: function(e) {
        e.preventDefault();
        if (!is_open) {
          MSearch.renderSearchElement();
        }
      },

      renderSearchElement: function() {
        document.getElementById('search-box').style.display = 'block';

        google.search.cse.element.render({
          div: "search-box",
          attributes: {
            resultsUrl: '/search-results.html'
          },
          tag: 'searchbox-only'
        });

        is_open = true;
      }
    };

  // Only load asynch box if we're NOT on the search results page
  if (window.location.pathname.indexOf('search-results') < 0) {
    MSearch.init();
  }
}());


