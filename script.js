inator = document.querySelector(".paginator");
var num = 1;
var currentPage = 0;
$(document).ready(function(){
    getRate();
});
function getRate(){
//b10874877f771cfa82131f5ab75341b7
    $.get(
        "https://reqres.in/api/users?page=1" ,
        function(data){
            currentPage = 1;
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
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
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


            // console.log(data.data[1].first_name);
            console.log(data);
            num++;
            currentPage = 1;
        }
    );
});

$("#2num").on('click', function () {
    $("#users").empty();
    currentPage = 2;
    $.get(
        "https://reqres.in/api/users?page=2" ,
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


            // console.log(data.data[1].first_name);
            console.log(data);
            num++;

        }
    );
});

$("#3num").on('click', function () {
    $("#users").empty();
    currentPage = 3;
    $.get(
        "https://reqres.in/api/users?page=3" ,
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


            // console.log(data.data[1].first_name);
            console.log(data);
            num++;

        }
    );
});

$("#next").on('click', function () {


    if(currentPage<3){
        $("#users").empty();
        currentPage++;
        $.get(
            "https://reqres.in/api/users?page=" + currentPage +" " ,
            function(data){
                for(var i=0;i<data.data.length;i++){
                    $('#users').append('<tr data-num='+ num + '><td>' + data.data[i].id + '</td><td>'+currentPage + data.data[i].first_name +
                        '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
                }


                // console.log(data.data[1].first_name);
                console.log(data);
                num++;

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


                // console.log(data.data[1].first_name);
                console.log(data);
                num++;

            }
        );

    }

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

