$(document).ready(function() {
    showTable(1)
});


var currentPage = 1;
var totalPages = 0;

var u = $("#users");
var cleanAppend = function () {
    u.empty();
    u.append('<tr><td></td><td>Id</td><td>First Name</td> <td>Last Name</td> <td>Foto</td> <tr>');
};

var showTable = function (page) {
    $.get(
        "https://reqres.in/api/users?page="+page+"" ,
        function(data){
            totalPages = data.total_pages;
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr><td>edit</td><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }
        }
    );
};



$("#1").on('click', function () {
    cleanAppend();
    currentPage = 1;
    showTable(currentPage);
});


$("#2").on('click', function () {
    cleanAppend();
    currentPage = 2;
    showTable(currentPage);
});

$("#3").on('click', function () {
    cleanAppend();
    currentPage = 3;
    showTable(currentPage);
});

$("#4").on('click', function () {
    cleanAppend();
    currentPage = 4;
    showTable(currentPage);
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
