//APP//
angular.module("app", []);

//CONTROLLER//
(function() {
	var $inject = ["$scope"];
	function controllerCB($scope) {

		/////Start your coding here//////
		// $scope.test = "this is controller test";
		
		document.getElementById("input").focus();

		$scope.itemsArray = [];
		
		$scope.addItems = function(items) {
			// console.log(items);
			if (items === "") {
				alert("You must first enter an item into the input box");
				return;
			} else {
				$scope.itemsArray.push(items);
			// console.log($scope.itemsArray.length);
			$scope.items = "";
			}
			
		}

		$scope.deleteItem = function(index) {
			$scope.itemsArray.splice(index, 1);
			// console.log(index);
			console.log($scope.itemsArray, index, $scope.itemsArray.length);
		}

		
		//////End your coding here///////
	}
	controllerCB.$inject = $inject;
	angular.module("app").controller("controller", controllerCB)
})();