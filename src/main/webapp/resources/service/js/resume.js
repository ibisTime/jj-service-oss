$(function(){
	showPermissionControl();
	
	var router = '/service/resume';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '简历名称'
	}, {
		field: 'publisher',
		title: '属于人',
		search: true
	}, {
		field: 'use_times',
		title: '使用次数'
	}, {
		field : 'deal_datetime',
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
		//window.location.href = $("#basePath").val()+ (options.pageRouter || router) + "_addedit.htm?code="+(selRecords[0].code || selRecords[0].id) + urlParamsStr;
	});
});