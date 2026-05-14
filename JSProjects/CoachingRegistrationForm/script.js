document
    .getElementById("submitRegistrationform")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        let fullname = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobilenumber").value;


        let gender = document.querySelector(
            "input[name='gender']:checked"
        );


        let timings = document.querySelectorAll(
            "input[name='timings']:checked"
        );

        if (fullname == "") {
            alert("Enter Full Name");
            return;
        }

        if (email == "") {
            alert("Enter Email");
            return;
        }


        if (mobile.length != 10) {
            alert("Enter 10 digit mobile number");
            return;
        }

        if (gender == null) {
            alert("Select Gender");
            return;
        }

        if (timings.length == 0) {
            alert("Select Batch Timing");
            return;
        }

        alert("Form Submitted Successfully");

        console.log({
            fullname,
            email,
            mobile,
            gender,
            dob,
            timings,
            address,
            city,
            pincode,
            guardianName,
            guardianNumber,
        });
    });