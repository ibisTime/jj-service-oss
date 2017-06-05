$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');

    var fields = [{
        title: '个人信息',
        type: 'title'
    }, {
        title: '姓名',
        field: 'user-name',
        required: true,
        maxlength: 30,
        readonly: true
    }, {
        title: '出生时间',
        field: 'user-userExt-birthday',
        required: true,
        readonly: true
    }, {
        title: '性别',
        field: 'user-userExt-gender',
        type: 'select',
        required: true,
        data: { '1': '男', '0': '女' },
        readonly: true
    }, {
        title: '手机号码',
        field: 'mobile',
        required: true,
        readonly: true
    }, {
        title: '邮箱地址',
        field: 'user-userExt-email',
        required: true,
        readonly: true
    }, {
        title: '工作年限',
        field: 'workTime',
        required: true,
        readonly: true
    }, {
        title: '证件',
        field: 'idKind',
        search: true,
        readonly: true,
        formatter: Dict.getNameForList('id_kind'),
        type: 'select',
        key: 'id_kind'
    }, {
        title: '证件号',
        field: 'idNo',
        maxlength: 32,
        readonly: true
    }, {
        title: '居住地',
        field: 'address',
        maxlength: 255,
        readonly: true,
        formatter: function(v, r) {
            var data = r.user.userExt;
            return data.province ? (data.province + ' ' + data.city + ' ' + data.area + ' ' + data.address) : '-';
        }
    }, {
        title: '简历信息',
        type: 'title'
    }, {
        title: '是否有实习经验',
        field: 'isWork',
        type: 'select',
        data: { '1': '有', '0': '没有' },
        required: true,
        readonly: true
    }, {
        title: '公司名称',
        field: 'preCompName',
        required: true,
        maxlength: 64,
        readonly: true
    }, {
        title: '职位名称',
        field: 'prePosName',
        required: true,
        maxlength: 64,
        readonly: true
    }, {
        title: '工作时间',
        field: 'preWorkTime',
        required: true,
        maxlength: 255,
        readonly: true
    }, {
        title: '职位月薪',
        field: 'preMsalary',
        required: true,
        readonly: true,
        maxlength: 255
    }, {
        title: '工作描述',
        field: 'preDescription',
        required: true,
        readonly: true
    }, {
        title: '教育经历',
        type: 'title'
    }, {
        title: '学历/学位',
        field: 'education',
        type: 'select',
        key: 'edu_kind',
        required: true,
        readonly: true
    }, {
        title: '是否统招',
        field: 'isTz',
        type: 'select',
        data: { '1': '是', '0': '否' },
        required: true,
        readonly: true
    }, {
        title: '就读时间',
        field: 'studyTime',
        required: true,
        maxlength: 255,
        readonly: true
    }, {
        title: '就读学校',
        field: 'school',
        required: true,
        maxlength: 255,
        readonly: true
    }, {
        title: '专业名称',
        field: 'profession',
        required: true,
        maxlength: 255,
        readonly: true
    }, {
        title: '求职意向',
        type: 'title'
    }, {
        title: '工作性质',
        field: 'type',
        type: 'select',
        readonly: true,
        key: 'work_type',
        required: true
    }, {
        title: '期望从事职业',
        field: 'expPosition',
        readonly: true,
        type: 'select',
        key: 'position_kind',
        multiple: true
    }, {
        title: '期望月薪',
        field: 'expMsalary',
        required: true,
        readonly: true,
        maxlength: 255
    }, {
        title: '工作状态',
        field: 'workStatus',
        type: 'select',
        data: { '1': '已离职，可立即上岗', '2': '未离职，需一段时间才可上岗' },
        required: true,
        readonly: true
    }, {
        title: '期望工作地点',
        field: 'expProvince',
        required: true,
        readonly: true,
        formatter: function(v, r) {
            return r.expProvince + ' ' + r.expCity;
        }
    }, {
        title: '是否公开简历',
        field: 'isOpen',
        type: 'select',
        data: { '1': '是', '0': '否' },
        required: true,
        readonly: true
    }];


    var options = {};
    if (view) {
        options.buttons = [{
            'title': '返回',
            handler: function() {
                goBack();
            }
        }];
    }
    buildDetail(router, fields, code, options);

});