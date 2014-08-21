module.exports = function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/home/home.html',
            controller: 'HomeCtrl'
        });
};