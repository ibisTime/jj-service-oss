$(function() {

    var code = getQueryString('code');


    var fields = [{
        title: '违规提示',
        field: 'dealNote',
        required: true,
        maxlength: 255
    }];

    options.buttons = [{
        title: '保存',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['dealer'] = sessionStorage.getItem('userName');
                data["dealNote"] = $("#dealNote").val();
                reqApi({
                    code: "612113",
                    json: data
                }).done(function() {
                    sucDetail();
                });
            }
        }
    }, {
        title: '返回',
        handler: function() {
            goBack();
        }
    }];

    buildDetail(options);


});