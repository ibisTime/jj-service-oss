$(function(){
	showPermissionControl();
	
	var router = '/service/demand';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field: 'mobile',
		title: '手机号',
		search: true
	},{
		field: 'name',
		title: '需求名称'
	},{
		title: '意向企业',
		field: 'expCompany',
		type: 'select',
		url: $('#basePath').val() + '/general/company/list',
		keyName: 'code',
		valueName: 'name',
		defaultOption: 'All'
	},{
		title: '紧急程度',
		field: 'urgentLevel',
		type: 'select',
		key : 'urgent_level',
		search: true,
		formatter : Dict.getNameForList('urgent_level'),
	},{
		field: 'status',
		title: '状态',
		type: 'select',
		data: {'0': '违规', '1': '正常'}
	}, {
		field: 'dealNote',
		title: '违规提示'
	}, {
		field : 'publishDatetime',
		title : '更新时间',
		formatter: dateTimeFormat
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