namearray=[]

function submit(){
    
    var display_student_array = []

    for (var j = 1; j <= 4; j++)
    {
        var student_name = document.getElementById("student"+j).value;
        namearray.push(student_name);
    }

    for (var k = 0; k < namearray.length; k++){
        display_student_array.push("<h4>Name - " + namearray[k] + "</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("buttonsubmit").style.display = "none";
}

function sorting(){

    namearray.sort();

    var display_student_array_sorting = [];
    
    for (var k = 0; k < namearray.length; k++){
        display_student_array_sorting.push("<h4>Name - " + namearray[k] + "</h4>");
    }

    var remove_commas = display_student_array_sorting.join(" ");

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + namearray + "</h1>";
}