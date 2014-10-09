var msgViewModule = angular.module('MessageView.controllers', []);

msgViewModule.controller('MessageViewController', function($scope/*, ergastAPIservice*/) {
    //constants for settings
    var tableViewSettings = [
    	{field: 'time', width:85},
    ];
    //move to constants


    $scope.treeview = {};
	$scope.filterOptions = {
        filterText: ''
    };


    $scope.myData = [{time: '15:49:15.091', dir: 'In', lineNo: 28490, port: 'g_pt_ranap', ptc: 'IU_CS_PTC_1', msg: '', encData:'', remarks:'', treeview: {SCCP_UP_Prims: { nstr: { affected: 1, affected2: 2}}}},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:'', treeview: {}},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:'', treeview: {}},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:'', treeview: {}},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:'', treeview: {}}];

    $scope.gridOptions = { data: 'myData',
    					   columnDefs: [
    					       {field: 'time',   displayName: 'Time', width: 85}, 
    					       {field: 'lineNo', displayName: 'Line No.', width: 55},
    					       {field: 'port',   displayName: 'Port', width: 80},
    					       {field: 'ptc',    displayName: 'PTC', width: 100},
    					       {field: 'msg',    displayName: 'Message', width: 150},
    					       {field: 'encData',displayName: 'Encoded Data', width: 150},
    					       {field: 'remarks',displayName: 'Remarks'}
    					   ],
						   filterOptions: $scope.filterOptions,
        				   enablePinning: true,
        				   showGroupPanel: true,
    					   enableColumnResize: true,
    					   enableCellSelection: false,
    					   sortable: true,
    					   multiSelect: false,
    					   rowTemplate: '<div ng-dblclick="foo(row)" ng-style="{\'cursor\': row.cursor, \'z-index\': col.zIndex() }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}" ng-cell></div>'
    					 };	

    $scope.foo= function(r) {
    	console.log(r.entity);
        $scope.treeview = r.entity.treeview;
    }
    $scope.maintainColSize = function(){
       

    };

});

msgViewModule.directive('resizable', function() {

    return {
    	 restrict: 'A',
    	 scope: {
    	 	callback: '&onResize'
    	 },
    	 link: function postLink(scope, elem, attrs) {
    	 	elem.resizable();
    	 	elem.on('resizestop', function (evt, ui) {
    	 		if (scope.callback) {scope.callback();}
    	 	});
    	 }
    };
});

