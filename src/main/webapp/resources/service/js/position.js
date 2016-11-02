$(function(){
	showPermissionControl();
	
	var router = '/service/position';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '所属职位',
		search: true,
	}, {
		field: 'companyName',
		title: '申请公司',
		search: true
	}, {
		field: 'publisher',
		title: '联系人'
	},{
		field: 'mobile',
		title: '手机号',
		formatter: function(v,r){
			return r.company.mobile;
		},
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
		window.location.href = $("#basePath").val()+"/service/illegalPosition.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
	
	$('#hotBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/service/hotPosition.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
});