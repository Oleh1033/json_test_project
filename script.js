
var num = 1;
var currentPage = 0;
var totalPages = 0;

var showTable = function (page) {
    $.get(
        "https://reqres.in/api/users?page="+page+"" ,
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + ' id><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }
        }
    );
};


$(document).ready(function(){
    getRate();
});
function getRate(){
    $.get(
        "https://reqres.in/api/users?page=1" ,
        function(data){
            totalPages = data.total_pages;
            for(var j=1; j<totalPages+1; j++){
                $('#pagination').append('<li class="page-item"><a class="page-link" href="#" id="' + j + 'num">' + j + '</a></li>');
            }
            currentPage = 1;
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }
        }
    );
}



$("#1num").on('click', function () {
    $("#users").empty();
    currentPage = 1;
    showTable(currentPage);
});

$("#2num").on('click', function () {
    $("#users").empty();
    currentPage = 2;
    showTable(currentPage);
});

$("#3num").on('click', function () {
    $("#users").empty();
    currentPage = 3;
    showTable(currentPage);
});




$("#next").on('click', function () {
    if(currentPage<totalPages){
        $("#users").empty();
        currentPage++;
        $.get(
            "https://reqres.in/api/users?page=" + currentPage +" " ,
            function(data){
                for(var i=0;i<data.data.length;i++){
                    $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                        '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
                }
            }
        );
    }

});

$("#prev").on('click', function () {
    if(currentPage>1){
        $("#users").empty();
        currentPage--;
        $.get(
            "https://reqres.in/api/users?page=" + currentPage +" " ,
            function(data){
                for(var i=0;i<data.data.length;i++){
                    $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                        '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
                }
            }
        );
    }
});
