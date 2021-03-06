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
		search: true
	},{
		field: 'qualityCode',
		title: '所属资质',
		url: $('#basePath').val() + '/general/qualification/list',
		search: true,
		type: 'select',
		keyName: 'code',
		valueName: 'name'
	},{
		field: 'companyName',
		title: '所属公司',
		formatter: function(v, r) {
			return r.company.name;
		}
	},{
		field: 'orderNo',
		title: '次序',
		sortable: true
	},{
		field: 'publishDatetime',
		title: '更新时间',	
		formatter: dateTimeFormat
	}];
	buildList(router, columns, {
		searchParams: {
			isHot: 1
		},
		sortName: 'orderNo',
		sortOrder: 'asc'
	});
	
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
	$('#hotBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		if(!confirm("确认是否移出该记录？")){
    		return false;
    	}
		var url = $("#basePath").val()+ '/service/service/hot';
		ajaxPost(url, {"code": selRecords[0].code, 'isHot': 0}).then(function(res) {
			if (res.success) {
				alert("操作成功");
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			}
		});
	});
});