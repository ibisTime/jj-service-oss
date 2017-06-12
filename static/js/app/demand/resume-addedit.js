$(function() {

    var code = getQueryString('code');
    var view = getQueryString('v');
    var isTzStatus = {
        '1': '有',
        '0': '没有'
    };
    var opResume = { '1': '是', '0': '否' };
    var genderKind = { '1': '男', '0': '女' };
    var eduKind = {
        "1": "本科",
        "2": "大专",
        "3": "高中",
        "4": "其他"
    };
    var workType = {
        "1": "全职",
        "2": "兼职",
        "3": "实习"
    };
    var positionKind = {
        "A": "运营总监 ",
        "B": "运营主管",
        "C": "运营",
        "D": "设计总监",
        "E": "设计 / 美工",
        "F": "推广专员",
        "G": "客服主管",
        "H": "客服 / 售后",
        "I": "仓储经理",
        "J": "采购经理",
        "K": "其他"
    };
    var workStatus = { '1': '已离职，可立即上岗', '2': '未离职，需一段时间才可上岗' };
    var fields = [{
            title: '个人信息',
            type: 'title'
        }, {
            title: '姓名',
            field: 'userName',
            required: true,
            maxlength: 30,
            readonly: true,
            formatter: function(v, data) {
                return data.user.nickname;
            }
        }, {
            title: '出生时间',
            field: 'birthday',
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return data.user.birthday;
            }
        }, {
            title: '性别',
            field: 'gender',
            type: 'select',
            formatter: function(v, data) {
                return genderKind[data.user.gender];
            },
            required: true,
            readonly: true
        }, {
            title: '手机号码',
            field: 'mobile',
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return data.user.mobile;
            }
        }, {
            title: '邮箱地址',
            field: 'email',
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return data.user.email;
            }
        }, {
            title: '工作年限',
            field: 'useTimes',
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.useTimes;
            }
        },
        // {
        //     title: '证件',
        //     field: 'idKind',
        //     search: true,
        //     readonly: true,
        //     formatter: Dict.getNameForList('id_kind'),
        //     type: 'select',
        //     key: 'id_kind'
        // },
        //  {
        //     title: '证件号',
        //     field: 'idNo',
        //     maxlength: 32,
        //     readonly: true
        // },

        {
            title: '居住地',
            field: 'address',
            maxlength: 255,
            readonly: true,
            formatter: function(v, r) {
                // var data = r.user.userExt;
                // return data.province ? (data.province + ' ' + data.city + ' ' + data.area + ' ' + data.address) : '-';
            }
        },
        {
            title: '简历信息',
            type: 'title'
        }, {
            title: '是否有实习经验',
            field: 'isWork',
            type: 'select',
            formatter: function(v, data) {
                return isTzStatus[data.resume.isWork]
            },
            required: true,
            readonly: true
        }, {
            title: '公司名称',
            field: 'preCompName',
            required: true,
            maxlength: 64,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.preCompName;
            }
        }, {
            title: '职位名称',
            field: 'prePosName',
            required: true,
            maxlength: 64,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.prePosName;
            }
        }, {
            title: '工作时间',
            field: 'preWorkTime',
            required: true,
            maxlength: 255,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.preWorkTime;
            }
        }, {
            title: '职位月薪',
            field: 'preMsalary',
            required: true,
            readonly: true,
            maxlength: 255,
            formatter: function(v, data) {
                return data.resume.preMsalary;
            }
        }, {
            title: '工作描述',
            field: 'preDescription',
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.preDescription;
            }
        }, {
            title: '教育经历',
            type: 'title'
        }, {
            title: '学历/学位',
            field: 'education',
            type: 'select',
            // key: 'edu_kind',
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return eduKind[data.resume.education];
            }
        }, {
            title: '是否统招',
            field: 'isTz',
            type: 'select',
            formatter: function(v, data) {
                return isTzStatus[data.resume.isTz]
            },
            required: true,
            readonly: true
        }, {
            title: '就读时间',
            field: 'studyTime',
            required: true,
            maxlength: 255,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.studyTime;
            }
        }, {
            title: '就读学校',
            field: 'school',
            required: true,
            maxlength: 255,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.school;
            }
        }, {
            title: '专业名称',
            field: 'profession',
            required: true,
            maxlength: 255,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.profession;
            }
        }, {
            title: '求职意向',
            type: 'title'
        }, {
            title: '工作性质',
            field: 'type',
            type: 'select',
            readonly: true,
            // key: 'work_type',
            required: true,
            formatter: function(v, data) {
                return workType[data.resume.type];
            }
        }, {
            title: '期望从事职业',
            field: 'expPosition',
            readonly: true,
            type: 'select',
            // key: 'position_kind',
            multiple: true,
            formatter: function(v, data) {
                return positionKind[data.resume.expPosition];
            }
        }, {
            title: '期望月薪',
            field: 'preMsalary2',
            required: true,
            readonly: true,
            maxlength: 255,
            formatter: function(v, data) {
                return data.resume.preMsalary;
            }
        }, {
            title: '工作状态',
            field: 'workStatus',
            type: 'select',
            // data: { '1': '已离职，可立即上岗', '2': '未离职，需一段时间才可上岗' },
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return workStatus[data.resume.workStatus];
            }
        }, {
            title: '期望工作地点',
            field: 'expProvince2',
            required: true,
            readonly: true,
            formatter: function(v, data) {
                return data.resume.expProvince + ' ' + data.resume.expCity;
            }
        }, {
            title: '是否公开简历',
            field: 'isOpen',
            type: 'select',
            formatter: function(v, data) {
                return opResume[data.resume.isOpen];
            },
            required: true,
            readonly: true
        }
    ];

    buildDetail({
        fields: fields,
        code: code,
        view: view,
        detailCode: '612186'
    });


});