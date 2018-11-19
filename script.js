var count = 9;
var cnt = 3;
var ntt_pages = Math.ceil(count/cnt);

var paginator = document.querySelector(".paginator");
var num = 1;

$(document).ready(function(){
    getRate();
});
function getRate(){
//b10874877f771cfa82131f5ab75341b7
    $.get(
        "https://reqres.in/api/users?page=1" ,
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+num + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


           // console.log(data.data[1].first_name);
            console.log(data);
            num++;

        }
    );
}

$("#1num").on('click', function () {
    $("#users").empty();
    $.get(
        "https://reqres.in/api/users?page=1" ,
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+num + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


            // console.log(data.data[1].first_name);
            console.log(data);
            num++

        }
    );
});

$("#2num").on('click', function () {
    $("#users").empty();
    $.get(
        "https://reqres.in/api/users?page=2" ,
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+num + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


            // console.log(data.data[1].first_name);
            console.log(data);
            num++

        }
    );
});

$("#3num").on('click', function () {
    $("#users").empty();
    $.get(
        "https://reqres.in/api/users?page=3" ,
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+num + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


            // console.log(data.data[1].first_name);
            console.log(data);
            num++

        }
    );
});
// function getRate2(){
// //b10874877f771cfa82131f5ab75341b7
//     $.get(
//         "https://reqres.in/api/users?page=2" ,
//         function(data){
//             for(var i=0;i<data.data.length;i++){
//                 $('#users').append('<tr><td>' + data.data[i].id + '</td><td>' + data.data[i].first_name +
//                     '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
//             }
//
//
//             // console.log(data.data[1].first_name);
//             console.log(data);
//
//         }
//     );
// }
//
//
// getRate2();

