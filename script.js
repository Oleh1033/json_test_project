$(document).ready(function () {

    var currentPage = 1;
    var u = $("#users");
    var cleanAppend = function () {
        u.empty();
        u.append('<tr><td></td><td>Id</td><td>First Name</td><td>Last Name</td><td>Foto</td><tr>');
    };

    var showTable = function (page) {
        $.get(
            "https://reqres.in/api/users?page=" + page + "",
            function (data) {
                for (var i = 0; i < data.data.length; i++) {
                    $('#users').append('<tr><td><a href="javascript: onClick=showPage(' + data.data[i].id + ')" >edit</a></td><td>' + data.data[i].id + '</td><td>' + data.data[i].first_name +
                        '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
                }
            });
    };

    var chekNumber = function () {

        var activeButton  = $('.active').attr("id");
        var m =  +activeButton;
        console.log(m);
        if(m>3){
            console.log('valva');
            $("a#next").addClass(" disabled");
        }else $("a#next").removeClass(" disabled");

        if(m<2){
            console.log('valva');
            $("a#prev").addClass(" disabled");
        }else $("a#prev").removeClass(" disabled");

    };


    $.get(
        "https://reqres.in/api/users?page=1",
        function (data) {

            showTable(1);

            var totalPages = data.total_pages;
            var prev;

            for (var j = 1; j < totalPages + 1; j++) {
                $('#pagination').append('<li class="page-item" id="'+ j +'"><a class="page-link" href="javascript:void(0)" >' + j + '</a></li>');
            }
            $("li#1").addClass(" active");
            chekNumber();

            $("li.page-item").on("click", function () {
                var current;
                current = $(this).index() - 1;
                currentPage = current;
                cleanAppend();
                showTable(current);
                $('.active').removeClass('active');
                $(this).addClass(" active");
                chekNumber()
            });

            $("#next").on('click', function () {
                if(currentPage==4)return;
                if (currentPage < totalPages) {
                    cleanAppend();
                    currentPage++;
                    showTable(currentPage);
                }
                prev = $('.active').attr("id");
                var n =  +prev + 1;
                $('.active').removeClass('active');
                $('#'+ n +'').addClass(" active");
                chekNumber()
            });

            $("#prev").on('click', function () {
                if(currentPage==1)return;
                if (currentPage > 1) {
                    cleanAppend();
                    currentPage--;
                    showTable(currentPage);
                }
                prev = $('.active').attr("id");
                var n = +prev - 1;
                $('.active').removeClass('active');
                $('#'+ n +'').addClass(" active");
                chekNumber()
            });
        })
});


var showPage = function (id) {
    $.get(
        "https://reqres.in/api/users/"+ id +"",
        function (data) {
            var id = data.data.id;
            var firstName = data.data.first_name;
            var lastName = data.data.last_name;
            var avatar = data.data.avatar;

            $('[name="id"]')[0].value=id;
            $('[name="firstName"]')[0].value=firstName;
            $('[name="lastName"]')[0].value=lastName;
            $('[name="avatar"]')[0].value=avatar;

            $(".bg-modal").show();

            $('.submit').click(function(){
                $.post('https://reqres.in/api/users/2',
                    {"data":{
                        "id":""+ $('[name="id"]')[0].value +"",
                        "first_name":"" + $('[name="firstName"]')[0].value + "",
                        "last_name":""+$('[name="lastName"]')[0].value+"",
                        "avatar":""+$('[name="avatar"]')[0].value+""}}
                );
            });
        })
};

$('.close').click(function(){
    $(".bg-modal").hide();
});






