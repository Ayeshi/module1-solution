(function () {
'use strict';

angular.module('module1', [])
.controller('Module1Controller', Module1Controller);

Module1Controller.$inject = ['$scope'];
function Module1Controller($scope) {
     $scope.lunchItemSet = "";
     $scope.message = "";

     var comma = ',';

     $scope.checkItems = function () {
          var numOfLunchItem = splitLunchItems($scope.lunchItemSet , comma);
          if($scope.lunchItemSet == "" || $scope.lunchItemSet == " " ){
               $scope.message = "Please enter data first!";
          }else if (numOfLunchItem <= 3) {
               $scope.message = "Enjoy!";
          }else if (numOfLunchItem > 3) {
               $scope.message = "Too much!";
          }else {
               $scope.message = "Error"
          }
     }

     function splitLunchItems(itemsToSplit,separator){

          var arrayOfLunchItems = itemsToSplit.split(separator);

          var totalLunchItems = arrayOfLunchItems.length;

          return totalLunchItems;
     }
}

})();
