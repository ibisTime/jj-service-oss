$(function(){
	showPermissionControl();
	
	var router = '/customer/serviceQuery';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '名称',
		search: true
	}, {
		field: 'contacts',
		title: '联系人',
		formatter:function(v,r){
			return r.company.contacts;
		}
	}, {
		field: 'mobile',
		title: '联系人电话',
		formatter:function(v,r){
			return r.company.mobile;
		}
	},{
		title: '更新时间',
		field: 'publishDatetime',
		formatter: dateTimeFormat,
	}];
	buildList(router, columns);
	
	$('#exportBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		//window.location.href = $("#basePath").val()+"/service/hot_addedit.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
	
	$('#quaBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/customer/qua.htm?companyCode="+selRecords[0].companyCode;
	});
})