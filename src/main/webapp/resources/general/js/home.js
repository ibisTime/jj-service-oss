$(function() {
	//按钮权限判断
	showPermissionControl();
	
	var router = '/general/home';
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : 'name',
		title : '位置',
		search: true
	},{
		field : 'domain',
		title : '图1',
    },{
    	field : 'slogan',
		title : '图2'
    },{
		field : 'corporation',
		title : '图3'
	}, {
		field: 'userId',
		title: '发布人'
	}, {
		field: 'userId',
		title: '发布时间'
	}, {
		field: 'userId',
		title: '备注'
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

