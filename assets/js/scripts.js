$("#add-user").submit(function(event){
    alert('Data inserted to DB.');
});

$("#update_user").submit(function(event){
    event.preventDefault();
    var data = {};
    var unindexed_array = $(this).serializeArray();
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value'];
    });

    console.log(data);

    var request = {
        "url" : 'http://localhost:5000/api/students/' + data.id,
        "method" : "PUT",
        "data" : data,
    }
    $.ajax(request).done(function(response){
        alert("data updated!");
    })
});

if(window.location.pathname == "/"){
    $onDelete = $(".table tbody td a.delete");
    $onDelete.click(function(){
        var id = $(this).attr("data-id");

        var request = {
            "url" : 'http://localhost:5000/api/students/' + id,
            "method" : "DELETE",
        }
        if(confirm("Delete the selected entry?")){
            $.ajax(request).done(function(response){
                alert("Entry deleted permanently.");
                location.reload();
            });
        }
    })
}
