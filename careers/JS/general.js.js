$(document).ready(function () {
    $.ajaxSetup({ cache: false });

    $(document).on("click", ".valDuplicate", function () {
        eraseCookie("loginuser");
        createCookie("loginuser", $(this).attr("data-key"), 0);
        window.location.href = "/GeneralInfo";
    });

    $("#HasMiddleName").change(function () {
        if ($(this).is(':checked')) {
            $(".mi dd, .mi dt").hide();
        }
        else {
            $(".mi dd, .mi dt").show();
        }
    });

    $("#find_learn").change(function () {
        $("#LearnAboutDesc").prop("readonly", false);
        $("#other").show();

        if ($(this).val() == "other") {
            $("#other").show();
        }
        else if ($(this).val() == "appcast") {
            $("#other").show();
            $("#LearnAboutDesc").prop("readonly", true);
        }
        else {
            $("#other").hide();
        }

        if ($(this).val() == "referral") {
            $("#referral,#refemail").show();
        }
        else {
            $("#referral,#refemail").hide();
        }
    });

    $("#find_learn").each(function () {
        ShowLearAboutOpp();
    });

    $("#CountryID").change(function () {
        if ($("#CountryID option:selected").text() == "United States") {
            $("#StateID").show();
            $("#ForeignState").hide();
        }
        else {
            $("#StateID").hide();
            $("#ForeignState").show();
        }
    });

    if ($("#CountryID option:selected").text() == "United States") {
        $("#StateID").show();
        $("#ForeignState").hide();
    }
    else {
        $("#StateID").hide();
        $("#ForeignState").show();
    }

    $("#LocationID").change(function () {
        $(".posloading").show();
        $("#LocationPositionID").hide();

        $.ajax({
            url: "/home/GetLocationsForPositions?s=" + $(this).val(),
            type: "post",
            success: function (data) {
                $(".posloading").hide();
                $("#LocationPositionID").show();

                var sel2 = $("#LocationPositionID");
                sel2.empty();
                sel2.append('<option></option>');

                for (var i = 0; i < data.length; i++) {
                    sel2.append('<option value="' + data[i].KeyID + '">' + data[i].Description + '</option>');
                }
            },
            error: function () {
            }
        });
    });

    if ($("#HasMiddleName").is(':checked')) {
        $(".mi dd, .mi dt").hide();
    }
    else {
        $(".mi dd, .mi dt").show();
    }

    $(".appStatusNo").click(function () {
        $('#appStatusDialog').dialog('close');
        $("#appform").submit();
    });
    
    ShowLearAboutOpp();
});

function ShowLearAboutOpp() {

    if ($("#find_learn").val().toLowerCase() == "other") {
        $("#other").show();
    }
    else {
        $("#other").hide();
    }

    if ($("#find_learn").val() == "appcast") {
        $("#other").show();
        $("#LearnAboutDesc").prop("readonly", true);
    }
    else {

        if ($("#find_learn").val().toLowerCase() == "other") {
            $("#other").show();
        }
        else {
            $("#other").hide();
        }

        $("#LearnAboutDesc").prop("readonly", false);
    }

    if ($("#find_learn").val() == "referral") {
        $("#referral,#refemail").show();
    }
    else {
        $("#referral,#refemail").hide();
    }
}

function CheckPreviousApplication(aSubmit)
{
    $.ajax({
        url: "/home/CheckForDuplicats",
        type: "post",
        data: aSubmit.closest("form").serialize(),
        success: function (data) {
            if (data != null && data != undefined && data.length > 0) {

                var tab = "<table><thead><tr><th>Application Start Date</th><th>Action</th></tr></thead><tbody>";

                for (var i = 0; i < data.length; i++) {
                    tab += "<tr>";
                    tab += "<td>" + data[i].Description + "</td>";
                    tab += "<td><a class='valDuplicate myButton' href='#' data-key='" + data[i].KeyID + "'>Re-Open</a></td>";
                    tab += "</tr>";
                }

                tab += "</tbody></table>";

                $(".applications").html(tab);

                $("#appStatusDialog").dialog({
                    width: 500,
                    modal: true
                });
            }
            else {
                aSubmit.closest("form").submit();
            }
        },
        error: function () {
        }
    });
}