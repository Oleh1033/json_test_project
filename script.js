$(document).ready(function() {
    showTable(1)
});

var currentPage = 1;
var totalPages = 2;
var jdk ;
var u = $("#users");
var cleanAppend = function () {
    u.empty();
    u.append('<tr><td></td><td>Id</td><td>First Name</td><td>Last Name</td><td>Foto</td><tr>');
};

for (var j = 1; j < 5; j++) {
    $('#pagination').append('<li class="page-item"><a class="page-link" href="javascript:void(0)" >' + j + '</a></li>');
}

var showTable = function (page) {
    $.get(
        "https://reqres.in/api/users?page="+page+"" ,
        function(data) {
            totalPages = data.total_pages;
            jdk = totalPages;
            for (var i = 0; i < data.data.length; i++) {
                $('#users').append('<tr><td>edit</td><td>' + data.data[i].id + '</td><td>' + page + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }
        })
};

$("li.page-item").on("click", function () {
    var current;
    current = $(this).index()-1;
    cleanAppend();
    showTable(current);

});

$("#next").on('click', function () {
    if(currentPage<totalPages){
        cleanAppend();
        currentPage++;
        showTable(currentPage);
    }
});

$("#prev").on('click', function () {
    if(currentPage>1){
        cleanAppend();
        currentPage--;
        showTable(currentPage);
    }
});


