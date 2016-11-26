 var mainApp = angular.module("LunchCheck", []);

 mainApp.controller('LunchCheckController', function($scope) {

    $scope.checkIf =function(abc){
    $scope.result='';
    if(angular.isUndefined(abc)||abc===''){
    $scope.result = 'Please enter data first';
        return;
    }
    var num =abc.split(',');
    var total=0;
     angular.forEach(num, function(value, key) {
     total+=parseInt(value.trim());

     });
    if(total<=3){
    $scope.result = 'Enjoy!';
    }else if(total>3){
    $scope.result = 'Too much!';
    }else{
     $scope.result = 'Please enter number!';
     }

    };
 });