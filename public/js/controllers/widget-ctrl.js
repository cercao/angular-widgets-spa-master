angular.module('angular-widget-app')
  .controller('widget-ctrl', function($scope, widgetFactory) {
    
    $scope.widget = {};       
    
    // find widgets
    widgetFactory.getWidgets()
      .then(function (response) {
          $scope.widgets = response.data;
      }, function (error) {
          error.message ? 
                alert('Unable to list widget data: ' + error.message) : alert('Unable to list widget data.')
      }); 
       
     // habilitates creating mode and sets new widget
     $scope.create = function(){
         $scope.creating = true;
         $scope.editing = false;
         $scope.widget = {};         
     };
     
     // habilitates editing mode and use the selected widget to edit
     $scope.edit = function(widget){         
         
         // call detail 
         widgetFactory.getWidget(widget.id)
            .then(function (response) {
                $scope.editing = true;
                $scope.creating = false;
                $scope.widget = response.data;                
            }, function (error) {
                error.message ? 
                    alert('Unable to getting widget data: ' + error.message) : alert('Unable to getting widget data.')
            });            
     };
     
     $scope.submit = function(){
        
        if (!$scope.widgetForm.$valid) {
            alert('Please, insert at least Name.');
	        return;
        }
        
        if ($scope.creating)
            widgetFactory.insertWidget($scope.widget)
                .then(function (response) {
                    $scope.editing = false;
                    $scope.creating = false;
         
                    alert("New widget saved!");
                    
                }, function (error) {
                    error.message ? 
                        alert('Unable to creating widget data: ' + error.message) : alert('Unable to creating widget data.')
                });   
         else
            widgetFactory.updateWidget($scope.widget)
                .then(function (response) {
                    $scope.editing = false;
                    $scope.creating = false;
                    
                    alert("Selected widget was saved!");
                    
                }, function (error) {
                    error.message ? 
                        alert('Unable to update widget data: ' + error.message) : alert('Unable to update widget data.')
                });   
          
     };
     
  });