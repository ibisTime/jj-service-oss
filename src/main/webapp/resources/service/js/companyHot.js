$(function(){
	showPermissionControl();
	
	var router = '/general/company';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '名称',
		search: true
	}, {
		field: 'contacts',
		title: '联系人'
	}, {
		field: 'mobile',
		title: '联系人电话'
	},{
		field: 'orderNo',
		title: '次序',
		sortable: true
	},{
		title: '更新时间',
		field: 'updateDatetime',
		formatter: dateTimeFormat,
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
		var url = $("#basePath").val()+ '/general/company/up';
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
		var url = $("#basePath").val()+ '/general/company/down';
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
		var url = $("#basePath").val()+ '/general/company/hot';
		ajaxPost(url, {"code": selRecords[0].code, 'isHot': 0}).then(function(res) {
			if (res.success) {
				alert("操作成功");
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
});