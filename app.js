var app = angular.module('myApp',[]);
app.controller('servicesCtrl',function($scope){
	$scope.lists = [
		{
			"checked":false,
			"title":"web development",
			"cost":"$200"
		},
		{
			"checked":false,
			"title":"web desigin",
			"cost":"$250"
		},
		{
			"checked":false,
			"title":"photography",
			"cost":"$100"
		},
		{
			"checked":false,
			"title":"coffee drinking",
			"cost":"$10"
		}
	];
	$scope.total = 0;
	$scope.clickHandle = function(list){
		$scope.total = list.checked ? ($scope.total - parseInt(list.cost.slice(1),10) ) 
							: ($scope.total + parseInt(list.cost.slice(1),10) ) ;
		list.checked = !list.checked;
	};
});