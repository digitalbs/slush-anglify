require("angular/angular");
require("angular-mocks/angular-mocks");

var homeController = require("../../app/home/HomeCtrl");

describe("Controller: HomeCtrl", function () {
    var scope,
        ctrl;

    beforeEach(function () {
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();

            ctrl = $controller(homeController, {
                $scope: scope
            });
        });
    });
    describe("Description", function () {
        it("will set value to <%= appDescription %>", function () {
            expect(scope.description).toBe('<%= appDescription %>');
        });

    });

});