var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
  .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html',
    controller: ['testData',
      function(testData) {
        testData = 'QWERTY';
      }
    ],
    resolve: {
      testData: [
        function() {
          return 'ABCDEF';
        }
      ]
    }
  })

  // nested list with custom controller
  .state('home.a', {
    url: '/a',
    template: '{{data}}',
    controller: ['testData', '$scope',
      function(testData, $scope) {
        var data = testData;
        data = data + 'GHIJKL'
        $scope.data = data;
      }
    ]
  })

  // nested list with just some random string data
  .state('home.b', {
    url: '/b',
    template: '{{data}}',
    controller: ['testData', '$scope',
      function(testData, $scope) {
        $scope.data = testData;
      }
    ]
  })
});