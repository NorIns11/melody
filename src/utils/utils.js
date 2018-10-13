var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&');
    var sParameterName = undefined;

    for (var i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var apiUrl = "http://localhost:8080";
//var apiUrl = "http://192.168.1.48:8080";

var AjaxIO = {

    _getUrl: function (action) {
        return apiUrl + action + '.do'
    },

    _ajax: function (url, method, param, callback) {

        if (callback === undefined) {
            callback = param;
        }
        var token = localStorage.getItem('token');
        var headers = undefined;
        if (token != null) {
            // headers = {'Authorization': 'Basic ' + token};
            param.Authorization = 'Basic ' + token;
        }
        $.ajax({
            url: this._getUrl(url),
            data: param,
            dataType: 'json',
            // headers:headers,
            method: method,
            statusCode: {
                401: function (result) {
                    alert('401')
                },
                404: function () {
                    alert('404')
                },
                201: function () {
                    alert('201')
                },
                202: function () {
                    alert('202')
                }
            },
            success: callback,
            error: function () {
                alert('error');
            }

        });
    },

    getJSON: function (url, param, callback) {

        this._ajax(url, 'GET', param, callback);

    },

    post: function (url, param, callback) {

        this._ajax(url, 'POST', param, callback)
    }
};


var StringUtils = {
    isEmpty: function (str) {
        if (!str) {
            //str is empty
            return true;
        }
        return false;

    },

    isNotEmpty: function (str) {
        return !this.isEmpty(str);
    }
};


/**
 * 分页
 */
function PageKit(params, pageEvent) {
    this.divId = params.id;
    this.totalPage = params.totalPage;
    this.currentPage = 1;
    this.pageSkipEvent = pageEvent;
    var _self = this;
    var pageDiv = $('#' + _self.divId);
    pageDiv.html("");
    pageDiv.append("<a class='page-up' href='javascript:void(0)' >上一页</a>");
    pageDiv.append("<span class='first-num'>1/" + params.totalPage + "</span>");
    pageDiv.append("<a class='page-down' href='javascript:void(0)'>下一页</a>");
    pageDiv.append("<input type='text' class='inputPage'>");
    pageDiv.append("<button class='btn btn-primary'>跳转</button>");

    pageDiv.on('click', 'button', function () {
        var inputValue = _self._inputValue();
        if (isNaN(inputValue)) {
            return;
        }

        _self.skipToPage(parseInt(inputValue));
    });

    //上一页
    pageDiv.on('click', '.page-up', function () {
        _self.skipToPage(_self.currentPage - 1);
    });

    //下一页
    pageDiv.on('click', '.page-down', function () {
        _self.skipToPage(_self.currentPage + 1);
    });
}

PageKit.prototype._inputValue = function () {
    return $('#' + this.divId + ' input').val()
};

PageKit.prototype.skipToPage = function (pageNum) {
    if (isNaN(pageNum) || pageNum < 1 || pageNum > this.totalPage) {
        return;
    }

    $('#' + this.divId + ' .first-num').html(pageNum + "/" + this.totalPage);
    this.currentPage = pageNum;
    $('#' + this.divId + ' input').val('');
    this.pageSkipEvent(pageNum);
};

var Page = {

    render: function (params, pageEvent) {
        return new PageKit(params, pageEvent);
    }
};

//绑定右上角的退出按钮的事件
$(function () {
    $('.quit button').on('click', function () {
        window.location.href = "/manage/login.html";
    })
});