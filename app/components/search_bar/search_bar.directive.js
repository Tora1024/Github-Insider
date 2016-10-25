(function() {

    angular.module( "githubViewer" ).directive(
        "searchBar",
        function() {

            // Return the directive configuration.
            return({
                controller: "searchController",
                link: link,
                restrict: "A",
                templateUrl: "app/components/search_bar/search_bar.html"
            });


            // I bind the JavaScript events to the scope.
            function link( scope, element, attributes ) {

                console.log( "Search-bar layout directive linking." );

            }

        }
    );

})();