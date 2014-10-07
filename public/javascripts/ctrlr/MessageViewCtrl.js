angular.module('MessageView.controllers', []).
  controller('MessageViewController', function($scope/*, ergastAPIservice*/) {

    $scope.myData = [{time: '15:49:15.091', dir: 'In', lineNo: 28490, port: 'g_pt_ranap', ptc: 'IU_CS_PTC_1', msg: '', encData:'', remarks:''},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:''},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:''},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:''},
                 {time: "Moroni", lineNo: 50, port: '', ptc: '', msg: '', encData:'', remarks:''}];

    $scope.gridOptions = { data: 'myData',
        				   enablePinning: true,
    					   columnDefs: [
    					       {field: 'time',   displayName: 'Time'}, 
    					       {field: 'lineNo', displayName: 'Line No.'},
    					       {field: 'port',   displayName: 'Port'},
    					       {field: 'ptc',    displayName: 'PTC'},
    					       {field: 'msg',    displayName: 'Message'},
    					       {field: 'encData',displayName: 'Encoded Data'},
    					       {field: 'remarks',displayName: 'Remarks'}
    					   ],
    					   enableColumnResize: true,
    					   enableCellSelection: false,
    					   sortable: true
    					 };

//resize
  $(function() {
    $('#resizable').resizable();
  });


  });

