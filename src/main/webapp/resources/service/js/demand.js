$(function(){
	showPermissionControl();
	
	var router = '/service/demand';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'publisher',
		title : '用户名'
	},{
		field: 'mobile',
		title: '手机号',
		search: true
	},{
		field: 'name',
		title: '需求名称'
	},{
		field: 'type',
		title: '需求类型',
		search: true,
		type: 'select',
		key: 'qua_kind',
		formatter : Dict.getNameForList('qua_kind'),
	},{
		title: '紧急程度',
		field: 'urgentLevel',
		type: 'select',
		key : 'urgent_level',
		search: true,
		formatter : Dict.getNameForList('urgent_level'),
	},{
		field : 'publishDatetime',
		title : '更新时间',
		formatter: dateTimeFormat,
    }];
	buildList(router, columns);
	
	$('#illegalBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/service/illegalDemand.htm?code="+selRecords[0].code;
	});
});