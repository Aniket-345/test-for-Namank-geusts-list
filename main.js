function check(){
    data_check_1= document.getElementById("code_box").value;
    console.log(data_check_1);
    code_1="1100-3"
    if(data_check_1==code_1){
        code_receved="code_receved"
        console.log("code_receved")
        document.getElementById("code_verified").innerHTML="verified"
        document.getElementById("no_of_people").innerHTML="3"

    }
}
function add_person_1(){
    person_code_check_1=document.getElementById("code_for_person1").value;
    code_for_person_1="1100-3-1"
    console.log(code_for_person_1)

    if(person_code_check_1==code_for_person_1){
        code_receved_peson_1="code_receved_person_1"
        console.log("code_receved_peson_1")
        document.getElementById("code_for_person_added").innerHTML="added"
        document.getElementById("no_of_people_allowed").innerHTML="1"

    }
}




