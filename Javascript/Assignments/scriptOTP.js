const otp = document.querySelectorAll(".code");
otp[0].focus();

otp.forEach((num, index) => {
    num.addEventListener("input", (event) => {
        // console.dir(event.target);
        // console.log(event.target.value);
        if(event.target.value.length === 1 && index < otp.length -1) {
            otp[index+1].focus();
        }
    })

    num.addEventListener("keydown", (event) => {
        // console.log(event.targetvalue);
        // console.dir(event.target.value);
        if(event.key === 'Backspace' && index > 0 ) {
            otp[index-1].focus();
        }
    })
})