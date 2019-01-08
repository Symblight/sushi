

 // arrow down
$(document).ready(function() {
    $(".down").click(function() {
         $('html, body').animate({
             scrollTop: $(".form").offset().top
         }, 700);
     });
});

$(document).ready(function() {
    $(".down-a").click(function() {
         $('html, body').animate({
             scrollTop: $(".about-p").offset().top
         }, 700);
     });
});

function submitJobs(form) {
    const data = {
        job: {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            text: form.text.value
        }
    };
    $.ajax({
        type: "POST",
        url: "/api/v1/jobs",
        data: JSON.stringify(data),
        headers: { 
            Accept : "text/plain; charset=utf-8",
            "Content-Type": "application/json; charset=utf-8"
        },
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}

function submitReview(form) {
    const data = {
        review: {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            text: form.text.value
        }
    };
    $.ajax({
        type: "POST",
        url: "/api/v1/review",
        data: JSON.stringify(data),
        headers: { 
            Accept : "text/plain; charset=utf-8",
            "Content-Type": "application/json; charset=utf-8"
        },
        dataType: "json",
        success: function(data){alert(data);},
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}

function submitAuth(form) {
    const data = {
        user: {
            email: form.email.value,
            password: form.password.value,
        }
    };
    $.ajax({
        type: "POST",
        url: "/api/v1/auth",
        data: JSON.stringify(data),
        headers: { 
            Accept : "text/plain; charset=utf-8",
            "Content-Type": "application/json; charset=utf-8"
        },
        dataType: "html",
        success: function(data){
            var modal = document.querySelector('.modal-wrap');
            modal.style.display = "none";
        },
        failure: function(errMsg) {
            alert("error");
        }
    });
}

document.addEventListener('keydown', (event) => {
    var modal = document.querySelector('.modal-wrap');
    var auth_modal = document.getElementById('auth-modal');

    if (event.keyCode == 27 && !auth_modal) {
        modal.style.display = "none";
    }
})

function closePromotion () {
    var modal = document.getElementById('promotion-modal');
    modal.style.display = "none";
}