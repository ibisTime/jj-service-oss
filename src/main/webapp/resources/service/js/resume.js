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
		field: 'useTimes',
		title: '使用次数'
	}, {
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
		window.location.href = $("#basePath").val()+"/service/illegalResume.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
});