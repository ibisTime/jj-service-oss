$(function(){
	showPermissionControl();
	
	var router = '/service/positionHot';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名称'
	},{
		field: 'kind',
		title: '种类',
		type: 'select',
		data: {'A':'运营'},
	},{
		field: 'type',
		title: '类型',
		type: 'select',
	    key: 'work_type',
	    formatter: Dict.getNameForList('work_type'),
		search: true,
	},{
		field: 'publishDatetime',
		title: '更新时间',	
		formatter: dateTimeFormat,
	},{
		field : 'description',
		title : '备注',
    }];
	buildList(router, columns);
	
	$('#upBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		var url = $("#basePath").val()+ '/service/positionHot/up';
		ajaxPost(url, {"code": selRecords[0].code}).then(function(res) {
			if (res.success) {
				alert("操作成功");
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
	$('#downBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		var url = $("#basePath").val()+ '/service/positionHot/down';
		ajaxPost(url, {"code": selRecords[0].code}).then(function(res) {
			if (res.success) {
				alert("操作成功");
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
});