require("angular/angular");
require("angular-mocks/angular-mocks");

var <%= controllerName %>Controller = require("../../app/<%= directoryName %>/<%= controllerName %>Ctrl");

describe("Controller: <%= controllerName %>Ctrl", function () {
    var scope,
        ctrl;

    beforeEach(function () {
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();

            ctrl = $controller(<%= controllerName %>Controller, {
                $scope: scope
            });
        });
    });
    describe("Description", function () {
        it("will set value to example", function () {
            expect(ctrl.example).toBe('Example');
        });

    });

});
