$(function(){
	showPermissionControl();
	
	var router = '/service/demand';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		//不清楚，要改
		field : 'user_name',
		title : '用户名'
	},{
		field: 'mobile',
		title: '手机号',
		search: true
	},{
		field: 'name',
		title: '需求名称'
	},{
		field: 'kind',
		title: '需求类型',
		search: true,
		type: 'select',
		key: 'position_kind',
	},{
		title: '紧急程度',
		field: 'urgent_level',
		type: 'select',
		key : 'urgent_level',
		search: true,
	},{
		field : 'publish_datetime',
		title : '更新时间',
		formatter: dateTimeFormat,
		search: true,
    }];
	buildList(router, columns);
	
	$('#rockBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
    	var url = $("#basePath").val()+ router + '/cancel';
    	var data = {code:selRecords[0].code};
		ajaxPost(url, data).then(function(res) {
			if (res.success) {
				alert('操作成功');
				$('#tableList').bootstrapTable('refresh',{url: $('#tableList').bootstrapTable('getOptions').url});
			} else {
				alert(res.msg);
			}
		});
	});
});