 $(function() {


     var columns = [{
         field: '',
         title: '',
         checkbox: true
     }, {
         field: 'companyName',
         title: '申请企业',
         search: true,
         formatter: function(v, data) {
             return data.company.name;
         }
     }, {
         field: 'contacts',
         title: '联系人',
         formatter: function(v, data) {
             return data.company.corporation;
         }
     }, {
         field: 'mobile',
         title: '联系电话',
         formatter: function(v, data) {
             return data.company.mobile;
         }
     }, {
         field: 'qualifyCode',
         title: '所属资质',
         listCode: "612016",
         search: true,
         type: 'select',
         keyName: 'code',
         valueName: 'name',
         searchName: 'name',
         visible: false
     }, {
         field: 'qualifyName1',
         title: '所属资质',
         formatter: function(v, data) {
             return data.qualifyName
         }

     }, {
         field: 'status',
         title: '状态',
         search: true,
         type: 'select',
         formatter: Dict.getNameForList('cmpcerti_status'),
         key: 'cmpcerti_status',
         value: '1'
     }, {
         field: 'approveDatetime',
         title: '更新时间',
         formatter: function(v, r) {
             if (v) {
                 return dateTimeFormat(v);
             } else {
                 return dateTimeFormat(r.applyDatetime);
             }
         }
     }];
     buildList({
         columns: columns,
         pageCode: '612075',
         searchParams: {

         }
     });
     $('#checkBtn').click(function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             toastr.info("请选择记录");
             return;
         }
         if (selRecords[0].status == "1"&& selRecords[0].company.type == "1") {
             window.location.href = "examination_check.html?code=" + selRecords[0].code;
         } else  if (selRecords[0].status == "1"&& selRecords[0].company.type == "2") {
             window.location.href = "examindividual_check.html?code=" + selRecords[0].code;
         } else {
             toastr.warning("不是待审核的状态");
             return;
         }


     });
     $("#detaBtn").click(function() {
         var selRecords = $('#tableList').bootstrapTable('getSelections');
         if (selRecords.length <= 0) {
             toastr.info("请选择记录");
             return;
         }

         if (selRecords[0].company.type == "1") {
            //公司
             window.location.href = "examination_addedit.html?code=" + selRecords[0].code;
         } else {
            //个体户
             window.location.href = "examindividual_addedit.html?code=" + selRecords[0].code;
         }
     });
 });