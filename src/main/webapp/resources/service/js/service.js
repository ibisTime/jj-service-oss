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
		field: 'kind',
		title: '所属服务',
		type: 'select',
		key : 'serve_type',
		search: true
	}, {
		field: 'companyName',
		title: '所属企业',
		search: true,
	},{
		field: 'pubisher',
		title: '联系人'
	},{
		title: '联系电话',
		field: 'mobile',
	},{
		title: '价格区间',
		formatter: function(value, record) { 
			  return record.quoteMin + '~' + record.quoteMax;
			}
	},{
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
		window.location.href = $("#basePath").val()+"/service/illegalService.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
	
	$('#hotBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/service/hotService.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
});