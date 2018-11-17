$(document).ready(function(){
    getRate();
});
function getRate(){
//b10874877f771cfa82131f5ab75341b7
    $.get(
        "https://reqres.in/api/users",
        function(data){
            for(var i=0;i<data.data.length;i++){
                $('#users').append('<tr><td>' + data.data[i].id + '</td><td>' + data.data[i].first_name +
                    '</td><td>' + data.data[i].last_name + '</td><td><img src="' + data.data[i].avatar + '" alt=""></td><tr>');
            }


           // console.log(data.data[1].first_name);
            console.log(data);

        }
    );
}
