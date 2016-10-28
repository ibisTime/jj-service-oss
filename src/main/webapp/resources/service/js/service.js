$(function(){
	showPermissionControl();
	
	var router = '/service/service';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '服务名称',
	}, {
		field: '',
		title: '所属服务',
		type: 'select',
		key : 'serve_level',
		search: true
	}, {
		field: '',
		title: '所属企业',
		search: true,
	},{
		field: '',
		title: '联系人'
	},{
		title: '联系电话',
		field: 'mobile',
	},{
		title: '价格区间',
		field: '',
	},{
		field : 'publish_datetime',
		title : '更新时间',
		formatter: dateTimeFormat
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