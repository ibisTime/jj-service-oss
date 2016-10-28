//页面初始化
var parentId = null;
$(function(){
	//页面数据字典初始化
	initData();
	
	var id = getQueryString('id');
	//新增修改判断
	if(isBlank(id)){
		$("#operate").val("add");
	}else{
		$("#operate").val("edit");
		$("#operContent").text("修改数据字典");
		var data = {"id":id};
		var url = $("#basePath").val()+"/general/qualification/detail";
		doGetAjax(url, data, doGetDetailBack);
	}
	
	//提交
	$('#subBtn').click(function() {
	    if(!$("#jsForm").valid()){
			return false;
		}
		var data = $('form').serializeObject();
		var url = $("#basePath").val()+"/general/qualification/" + $("#operate").val();
		doPostAjax(url, data, doSuccessBack);
	});
	
	//返回
	$('#backBtn').click(function() {
		location.href = $("#basePath").val()+"/general/qualification.htm";
	});
	
	//入参合法性校验
	$("#jsForm").validate({
		rules: {
			type: {
				maxlength: 5
			},
			name: {
				maxlength: 15
			},
			updater: {
				maxlength: 15
			},
			description: {
				maxlength: 50
			},
			remark: {
				maxlength: 200
			}
		},
		messages: {
			type: {
				required: "请选择类型",
			},
			name: {
				required: "请输入名称",
			},
			updater: {
				required: "更新人不能为空",
			},
			description: {
				required: "描述不能为空"
			},
			remark: {
				maxlength: jQuery.format("备注不能大于{0}个字符")
			}
		}
	});
});
function initData(){
	//父编号
	var url =$("#basePath").val()+"/general/qualification/list";
	doGetAjaxIsAsync(url,{"type":"0"},false, function(res) {
		$('#parentKey').renderDropdown(res.data, 'dkey', 'dvalue', '<option value="0">选此创建种类</option>');
		$('#parentKey').on('change', function() {
			$('#type').val(this.value == 0 ? '0' : '1');
		});
	});
}
function doGetDetailBack(res){
	if (res.success) {
		$("#type").val(res.data.type);
		$('#parentKey').replaceWith($('<span>'+(res.data.parentKey || '无')+'</span>'));
		$('#parentKey_chosen').remove();
		$('#updater').replaceWith($('<span>'+res.data.updater+'</span>'));
		$("#name").val(res.data.name);
		$("#remark").val(res.data.remark);
		$("#description").val(res.data.description);
	}else{
		alert(res.msg);
	}
}

function doSuccessBack(res) {
	if (res.success == true) {
		alert("操作成功");
		window.location.href = $("#basePath").val()+"/general/qualification.htm";
	}else{
		alert(res.msg);
	}
}
//数据字典（父编号）关联的回执方法
function doSucBackPId(res){
	parentId = res.data;
	var html = "<option value=''>请选择</option><option value='0'>无父编号</option>";
	if(typeof(parentId) != "undefined"){//判断undifined
		for(var i = 0;i < parentId.length;i++){
			html += "<option value='"+parentId[i].id+"'>"+parentId[i].key+"</option>";
		}
	}
	//父编号
	$("#pId").html(html);
}

function doSucBackValue(res){
	$("#key").val(res.data[0].value);
}