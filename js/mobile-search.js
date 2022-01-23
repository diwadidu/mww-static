(function() {

  var cse_id = '005080790043434952430:owombz81muo',

    is_open = false,



    MSearch = {

      init: function() {
        MSearch.loadLibrary();
        document.getElementById('open-search').onclick = MSearch.onSearchClick;

        window.__gcse = {
          parsetags: 'explicit',
          callback: MSearch.onLoadComplete
        }
      },

      loadLibrary: function() {
        var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
          '//www.google.com/cse/cse.js?cx=' + cse_id;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
      },


      onLoadComplete: function() {},


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
            resultsUrl: '/search-results'
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


