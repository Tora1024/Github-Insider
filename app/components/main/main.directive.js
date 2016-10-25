(function() {

    angular.module( "githubViewer" ).directive(
        "main",
        function() {

            // Return the directive configuration.
            return({
                link: link,
                restrict: "A",
                templateUrl: "app/components/main/main.html"
            });


            // I bind the JavaScript events to the scope.
            function link( scope, element, attributes ) {

                console.log( "Main layout directive linking." );

            }

        }
    );

})();