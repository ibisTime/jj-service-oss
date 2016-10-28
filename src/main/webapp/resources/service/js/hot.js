$(function(){
	showPermissionControl();
	
	var router = '/service/hot';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	},{
		field : '',
		title : '名称'
	},{
		field: '',
		title: '类型',
	},{
		field: '',
		title: '热门位置',
		type: 'select',
		search: true,
	},{
		field: 'order_no',
		title: '次序',		
	},{
		field : 'remark',
		title : '备注',
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