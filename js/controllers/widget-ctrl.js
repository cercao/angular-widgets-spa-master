angular.module('angular-widget-app')
  .controller('widget-ctrl', function($scope, widgetFactory) {
    
    $scope.widget = {};       
    
    // find widgets
    widgetFactory.getWidgets()
      .then(function (response) {
          $scope.widgets = response.data;
      }, function (error) {
          alert('Unable to load widget data: ' + error.message);
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
                alert('Unable to get widget data: ' + error.message);
            });            
     };
     
     $scope.submit = function(){
        
        if ($scope.creating)
            widgetFactory.insertWidget($scope.widget)
                .then(function (response) {
                    $scope.editing = false;
                    $scope.creating = false;
         
                    alert("New widget saved!");
                }, function (error) {
                    alert('Unable to insert widget data: ' + error.message);
                });   
         else
            widgetFactory.updateWidget($scope.widget)
                .then(function (response) {
                    $scope.editing = false;
                    $scope.creating = false;
                    
                    alert("Selected widget was saved!");
                }, function (error) {
                    alert('Unable to insert widget data: ' + error.message);
                });   
          
     };
     
  });