$(function() {

    var code = getQueryString('code');


    var fields = [{
        title: '违规提示',
        field: 'dealNote',
        required: true,
        maxlength: 255,
        formatter: function(v, data) {
            var dataNote = data.resume.dealNote;
            return dataNote;
        }
    }];

    var options = {
        fields: fields,
        code: code,
        detailCode: '612186'
    };

    options.buttons = [{
        title: '确定',
        handler: function() {
            if ($('#jsForm').valid()) {
                var data = {};
                data['code'] = code;
                data['dealer'] = sessionStorage.getItem('userName');
                data["dealNote"] = $("#dealNote").val();
                reqApi({
                    code: "612183",
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