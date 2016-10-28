$(function(){
	showPermissionControl();
	
	var router = '/examination';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : '',
		title : '申请机构',
		search: true
	}, {
		field: '',
		title: '联系人',
	}, {
		field: 'mobile',
		title: '联系电话'
	}, {
		field: '',
		title: '资质',
		formatter : Dict.getNameForList('qua_kind'),
		search: true,
		type: 'select',
		key: 'qua_kind',
	}, {
		field : '',
		title : '更新时间',
		formatter: dateTimeFormat
    }];
	buildList(router, columns, {
		pageRouter: '/customer/examination'
	});
	
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
})