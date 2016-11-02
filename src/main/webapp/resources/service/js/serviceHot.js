$(function(){
	showPermissionControl();
	
	var router = '/service/serviceHot';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '名称',
		search: true,
	},{
		field: 'kind',
		title: '种类',
	},{
		field: 'companyName',
		title: '所属公司',		
	},{
		field: 'publisher',
		title: '发布人',
	},{
		field: 'publishDatetime',
		title: '更新时间',	
		formatter: dateTimeFormat,
	}];
	buildList(router, columns);
	
	$('#upBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		var url = $("#basePath").val()+ '/service/serviceHot/up';
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
		var url = $("#basePath").val()+ '/service/serviceHot/down';
		ajaxPost(url, {"code": selRecords[0].code}).then(function(res) {
			if (res.success) {
				alert("操作成功");
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
});