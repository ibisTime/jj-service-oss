$(function() {
	$("#roleCode").val(getQueryString("roleCode"));
	$("#roleName").val(decodeURI(getQueryString("roleName")));
	
	//下拉菜单
	var data = {roleCode:$("#roleCode").val()};
	doGetAjaxIsAsync($("#basePath").val()+"/role/checkedlist", data, false, doMenuNode);
	
	$("#subBtn").click(function() {
		var menuList = new Array();
	    var menuData = $("#treeMenu").ligerGetTreeManager().getChecked();
		for (var i = 0; i < menuData.length; i++){
			menuList[i] = menuData[i]['data']['id'];
		}
		var url = $("#basePath").val()+"/role/menuRole/change";
    	var data = {roleCode:$("#roleCode").val(),menuList:menuList};
		doPostAjax(url, data, doSuccessBack);
	});
	
	//返回
	$('#backBtn').click(function() {
		location.href = $("#basePath").val()+"/security/role.htm";
	});
});

function doMenuNode(nodes){
	$("#treeMenu").ligerTree({
		nodeWidth:300,
		data:nodes.data,
		checkbox: true,
		isExpand: true,
		idFieldName: 'id',
        parentIDFieldName: 'pid'
	});
}

function doSuccessBack(res) {
	if (res.success == true) {
		alert("操作成功");
		window.location.href = $("#basePath").val()+"/security/role.htm";
	}else{
		alert(res.msg);
	}
}
