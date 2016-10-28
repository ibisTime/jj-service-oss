$(function(){
	showPermissionControl();
	
	var router = '/service/position';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'kind',
		title : '所属职位',
		formatter : Dict.getNameForList('position_kind'),
		search: true,
		type: 'select',
		key: 'position_kind'
	}, {
		field: 'company_code',
		title: '申请公司',
		search: true
	}, {
		field: 'publisher',
		title: '联系人'
	},{
		field: 'mobile',
		title: '手机号'
	}, {
		field : 'publishDatetime',
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