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
                    $('#users').append('<tr><td><a href="javascript: onClick=showPage(' + data.data[i].id + ')" >edit</a></td><td>' + data.data[i].id + '</td><td>' + page + data.data[i].first_name +
                        '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
                }
            });
    };


    // , data.data[i].first_name, data.data[i].last_name, data.data[i].avatar

    $.get(
        "https://reqres.in/api/users?page=1",
        function (data) {

            showTable(1);

            var totalPages = data.total_pages;

            for (var j = 1; j < totalPages + 1; j++) {
                $('#pagination').append('<li class="page-item"><a class="page-link" href="javascript:void(0)" >' + j + '</a></li>');
            }

            $("li.page-item").on("click", function () {
                var current;
                current = $(this).index() - 1;
                currentPage = current;
                cleanAppend();
                showTable(current);

            });

            $("#next").on('click', function () {
                if (currentPage < totalPages) {
                    cleanAppend();
                    currentPage++;
                    showTable(currentPage);
                }
            });

            $("#prev").on('click', function () {
                if (currentPage > 1) {
                    cleanAppend();
                    currentPage--;
                    showTable(currentPage);
                }
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

            $('[name="id"]')[0].placeholder='id: '+id;
            $('[name="firstName"]')[0].placeholder='First Name: '+firstName;
            $('[name="lastName"]')[0].placeholder='Last Name: '+lastName;
            $('[name="avatar"]')[0].placeholder='url foto: '+avatar;

            $(".bg-modal").show();
        })
};


$('.close').click(function(){
    $(".bg-modal").hide();
});




