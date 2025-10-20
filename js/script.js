var input = document.getElementById("form-input");
var output = document.getElementById("output");

function back() {
    input.style.display = "block";
    output.style.display = "none";
}

function validate() {

    var fname = document.getElementById("fname-input").value;
    var lname = document.getElementById("lname-input").value;
    var gender = document.getElementById("gender-input").value;
    var email = document.getElementById("email-input").value;
    var phone = document.getElementById("phone-input").value;
    var from = document.getElementById("from-input").value;
    var dot = document.getElementById("dot-input").value;
    var to = document.getElementById("to-input").value;
    var age = document.getElementById("age-input").value;
    var ps = document.getElementById("ps-input").value;
    var address = document.getElementById("address-input").value;

    var fname_err = document.getElementById("fname-error");
    var lname_err = document.getElementById("lname-error");
    var gender_err = document.getElementById("gender-error");
    var email_err = document.getElementById("email-error");
    var phone_err = document.getElementById("number-error");
    var from_err = document.getElementById("from-error");
    var dot_err = document.getElementById("dot-error");
    var to_err = document.getElementById("to-error");
    var age_err = document.getElementById("age-error");
    var ps_err = document.getElementById("ps-error");
    var address_err = document.getElementById("address-error");

    fname_err.innerHTML = "";
    lname_err.innerHTML = "";
    gender_err.innerHTML = "";
    email_err.innerHTML = "";
    phone_err.innerHTML = "";
    from_err.innerHTML = "";
    dot_err.innerHTML = "";
    to_err.innerHTML = "";
    age_err.innerHTML = "";
    ps_err.innerHTML = "";
    address_err.innerHTML = "";

    if (fname == "") {
        fname_err.innerHTML = "Please Enter First Name";
        event.preventDefault();
    }
    if (lname == "") {
        lname_err.innerHTML = "Please Enter Last Name";
        event.preventDefault();
    }
    if (gender == "Select") {
        gender_err.innerHTML = "Please Select Gender";
        event.preventDefault();
    }
    if (email == "") {
        email_err.innerHTML = "Please Enter Email";
        event.preventDefault();
    }
    if (phone == "") {
        phone_err.innerHTML = "Please Enter Phone Number";
        event.preventDefault();
    }
    if (from == "") {
        from_err.innerHTML = "Please Enter City Name";
        event.preventDefault();
    }
    if (dot == "") {
        dot_err.innerHTML = "Please Enter Date";
        event.preventDefault();
    }
    if (to == "") {
        to_err.innerHTML = "Please Enter City Name";
        event.preventDefault();
    }
    if (age == "") {
        age_err.innerHTML = "Please Enter Age";
        event.preventDefault();
    }
    if (ps == "None") {
        ps_err.innerHTML = "Please Select Preferred Berth";
        event.preventDefault();
    }
    if (address == "") {
        address_err.innerHTML = "Please Enter Address";
        event.preventDefault();
    }

    if (ps == "Sleeper" || ps == "Seater") {
        ps_err.innerHTML = "";
    }
    if (gender == "Male" || gender == "Female") {
        gender_err.innerHTML = "";
    }
}

function formvalidate() {

    var fname = document.getElementById("fname-input").value;
    var lname = document.getElementById("lname-input").value;
    var gender = document.getElementById("gender-input").value;
    var email = document.getElementById("email-input").value;
    var phone = document.getElementById("phone-input").value;
    var from = document.getElementById("from-input").value;
    var dot = document.getElementById("dot-input").value;
    var to = document.getElementById("to-input").value;
    var age = document.getElementById("age-input").value;
    var ps = document.getElementById("ps-input").value;
    var address = document.getElementById("address-input").value;

    var first_output = document.getElementById("fname-input");
    var last_output = document.getElementById("lname-input");
    var gender_output = document.getElementById("gender-input");
    var email_output = document.getElementById("email-input");
    var number_output = document.getElementById("phone-input");
    var from_output = document.getElementById("from-input");
    var dot_output = document.getElementById("dot-input");
    var to_output = document.getElementById("to-input");
    var age_output = document.getElementById("age-input");
    var ps_output = document.getElementById("ps-input");
    var seat_output;
    var address_output = document.getElementById("address-input");

    var fname_err = document.getElementById("fname-error");
    var lname_err = document.getElementById("lname-error");
    var gender_err = document.getElementById("gender-error");
    var email_err = document.getElementById("email-error");
    var phone_err = document.getElementById("number-error");
    var from_err = document.getElementById("from-error");
    var dot_err = document.getElementById("dot-error");
    var to_err = document.getElementById("to-error");
    var age_err = document.getElementById("age-error");
    var ps_err = document.getElementById("ps-error");
    var address_err = document.getElementById("address-error");

    fname_err.innerHTML = "";
    lname_err.innerHTML = "";
    gender_err.innerHTML = "";
    email_err.innerHTML = "";
    phone_err.innerHTML = "";
    from_err.innerHTML = "";
    dot_err.innerHTML = "";
    to_err.innerHTML = "";
    age_err.innerHTML = "";
    ps_err.innerHTML = "";
    address_err.innerHTML = "";

    if (fname == "") {
        fname_err.innerHTML = "Please Enter First Name";
        event.preventDefault();
    }
    if (lname == "") {
        lname_err.innerHTML = "Please Enter Last Name";
        event.preventDefault();
    }
    if (gender == "Select") {
        gender_err.innerHTML = "Please Select Gender";
        event.preventDefault();
    }
    if (email == "") {
        email_err.innerHTML = "Please Enter Email";
        event.preventDefault();
    }
    if (phone == "") {
        phone_err.innerHTML = "Please Enter Phone Number";
        event.preventDefault();
    }
    if (from == "") {
        from_err.innerHTML = "Please Enter City Name";
        event.preventDefault();
    }
    if (dot == "") {
        dot_err.innerHTML = "Please Enter Date";
        event.preventDefault();
    }
    if (to == "") {
        to_err.innerHTML = "Please Enter City Name";
        event.preventDefault();
    }
    if (age == "") {
        age_err.innerHTML = "Please Enter Age";
        event.preventDefault();
    }
    if (ps == "None") {
        ps_err.innerHTML = "Please Select Preferred Berth";
        event.preventDefault();
    }
    if (address == "") {
        address_err.innerHTML = "Please Enter Address";
        event.preventDefault();
    }
    if (ps == "Sleeper" || ps == "Seater") {
        ps_err.innerHTML = "";
    }
    if (gender == "Male" || gender == "Female") {
        gender_err.innerHTML = "";
    }

    if (fname != "" && lname != "" && gender != "Select" && email != "" && phone != "" && from != "" && dot != "" && to != "" && age != "" && ps != "None" && address != "") {
        input.style.display = "none";
        output.style.display = "block";
        event.preventDefault();

        if (ps == "Seater") {
            seat_output = 1;
        }
        if (ps == "Sleeper") {
            seat_output = 2;
        }

        let text_1 = first_output.value + " " + last_output.value;
        let text_2 = gender_output.value;
        let text_3 = email_output.value;
        let text_4 = number_output.value;
        let text_5 = from_output.value;
        let text_6 = to_output.value;
        let text_7 = dot_output.value;
        let text_8 = age_output.value;
        let text_9 = ps_output.value;
        let text_10 = address_output.value;

        document.getElementById("fullname").innerHTML = text_1;
        document.getElementById("gender").innerHTML = text_2;
        document.getElementById("email").innerHTML = text_3;
        document.getElementById("phonenumber").innerHTML = text_4;
        document.getElementById("from").innerHTML = text_5;
        document.getElementById("to").innerHTML = text_6;
        document.getElementById("dateoftravel").innerHTML = text_7;
        document.getElementById("age").innerHTML = text_8;
        document.getElementById("preferredseat").innerHTML = text_9;
        document.getElementById("seatnumber").innerHTML = seat_output;
        document.getElementById("address").innerHTML = text_10;
    }
}
function reseterror() {

    var fname_err = document.getElementById("fname-error");
    var lname_err = document.getElementById("lname-error");
    var gender_err = document.getElementById("gender-error");
    var email_err = document.getElementById("email-error");
    var phone_err = document.getElementById("number-error");
    var from_err = document.getElementById("from-error");
    var dot_err = document.getElementById("dot-error");
    var to_err = document.getElementById("to-error");
    var age_err = document.getElementById("age-error");
    var ps_err = document.getElementById("ps-error");
    var address_err = document.getElementById("address-error");

    fname_err.innerHTML = "";
    lname_err.innerHTML = "";
    gender_err.innerHTML = "";
    email_err.innerHTML = "";
    phone_err.innerHTML = "";
    from_err.innerHTML = "";
    dot_err.innerHTML = "";
    to_err.innerHTML = "";
    age_err.innerHTML = "";
    ps_err.innerHTML = "";
    address_err.innerHTML = "";

}