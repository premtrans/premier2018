$(document).ready(function () {
    $(".HideAndShow").change(function () {
        var divShow = $("#" + $(this).attr("data-divshow"));

        if ($(this).attr("type") == "checkbox")
        {
            if ($(this).is(':checked') + "" == $(this).attr("data-cond"))
            {
                divShow.show();
            }
            else {
                divShow.hide();
            }
        }
        else if ($(this).val() == $(this).attr("data-cond")) {
            divShow.show();
        }
        else {
            divShow.hide();
        }
    });

    $(".cancelbtn").click(function () {
        window.location.href = window.location.href;
    });

    var anythingChanged = false;

    $("#btnYesSave").click(function () {
        $(".aformsubmit").click();
    });

    $("#btnGoBack").click(function () {
        $('#BackConfirmDialog').dialog('close');
        window.location.href = "/" + $(".backbtn").attr("data-nav");
    });

    $("input, select").change(function () {
        anythingChanged = true;
    });

    $(".backbtn").click(function () {
        if (anythingChanged || $('#error_box').length > 0)
            $("#BackConfirmDialog").dialog({ width: 370, modal: true });
        else
            window.location.href = "/" + $(this).attr("data-nav");
    });

    $(".aformsubmit").click(function () {
        if ($(this).attr("data-check") == "true")
        {
            CheckPreviousApplication($(this));
        }
        else if ($(this).attr("data-sec") == undefined)
            $(this).closest("form").submit();
    });

    $(".datetype").datepicker();    

    $(".mapper").each(function () {
        var mapto = $(this).attr("data-mapto");
        var val = $(this).attr("data-val");

        if ($('[name="' + mapto + '"]').is("input")) {
            if ($('[name="' + mapto + '"]').attr("type") == "radio") {
                $('input[name="' + mapto + '"][value="' + val + '"]').prop('checked', true);
            }
            else if ($('[name="' + mapto + '"]').attr("type") == "checkbox") {
                var arr = val.split(',');

                if (arr != null && arr.length > 0) {
                    for (var i = 0; i < arr.length; i++) {
                        $('input[name="' + mapto + '"][value="' + arr[i] + '"]').prop('checked', true);
                    }
                }
            }
            else
                $('[name="' + mapto + '"]').val(val);
        }
        else {

            if (val == "True")
                val = "true";
            else if (val == "False")
                val = "false";

            $('[name="' + mapto + '"]').val(val);
        }
    });

    $(".HideAndShow").each(function () {
        var divShow = $("#" + $(this).attr("data-divshow"));

        if ($(this).attr("type") == "checkbox") {
            if ($(this).is(':checked') + "" == $(this).attr("data-cond")) {
                divShow.show();
            }
            else {
                divShow.hide();
            }
        }
        else if ($(this).val() == $(this).attr("data-cond")) {
            divShow.show();
        }
        else {
            divShow.hide();
        }
    });

    var errorKeys = $("#errorkeys").val();

    $("label[for]").each(function () {

        if (errorKeys != undefined) {
            var arr = errorKeys.split(',');

            if (arr != null && arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if ($(this).attr("for") == arr[i]) {
                        $(this).css("color", "red");
                        break;
                    }
                }
            }
        }
    });

    $(".PhoneFor").mask("999-999-9999");
    $(".SSNFor").mask("999-99-9999");
    $(".YearFor").mask("9999");
    $("form").attr("autocomplete", "off")
});

function taMaxLength(which) {
    var val = which.value;
    if (val.length > 150) {
        alert("Maximum number of characters entered");
        which.value = val.substr(0, 150);
    }
}

function textAreaMaxLength(which, limit) {
    var val = which.value;
    if (val.length > limit) {
        alert("Maximum number of characters entered");
        which.value = val.substr(0, limit);
    }
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
