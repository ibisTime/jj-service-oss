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
		title: '类别',
		type: 'select',
		key: 'position_kind',
		formatter: Dict.getNameForList('position_kind'),
		search: true
	},{
		field: 'type',
		title: '工作性质',
		type: 'select',
	    key: 'work_type',
	    formatter: Dict.getNameForList('work_type'),
		search: true
	},{
		field: 'orderNo',
		title: '次序'
	},{
		field: 'publishDatetime',
		title: '更新时间',	
		formatter: dateTimeFormat
	}];
	buildList(router, columns, {
		searchParams: {
			isHot: 1,
			orderDir: 'asc',
			orderColumn: 'order_no'
		}
	});
	
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
	$('#hotBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(!confirm("确认是否移出该记录？")){
    		return false;
    	}
		var url = $("#basePath").val()+ '/service/position/hot';
		ajaxPost(url, {"code": selRecords[0].code, 'isHot': 0}).then(function(res) {
			if (res.success) {
				alert("操作成功");
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
});