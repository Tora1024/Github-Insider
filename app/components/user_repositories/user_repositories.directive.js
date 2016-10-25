(function() {

    angular.module( "githubViewer" ).directive(
        "userRepos",
        function() {

            // Return the directive configuration.
            return({
                link: link,
                restrict: "A",
                templateUrl: "app/components/user_repositories/user_repositories.html"
            });


            // I bind the JavaScript events to the scope.
            function link( scope, element, attributes ) {

                console.log( "User-repos layout directive linking." );

            }

        }
    );

})();