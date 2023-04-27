PWM_0 = "pwm_0.svg";
PWM_1 = "pwm_1.svg";
PWM_none = "pwm_none.svg";

let bits = document.getElementsByTagName("img");
let input = document.getElementById("input");

function pattern(item){
    return ["0","1"].contains(item);

}

input.addEventListener("input", (event) => {
    str = input.value.split('').filter(item => {
        return ["0","1"].includes(item);
    });
    input.value = str.join('');
    for (let i = 0; i < 8; i++){
        try{
            dig = str[i];
        }
        catch {
            dig = '*'
        }

        if (dig == "0"){
            bits[i].src = PWM_0;
        }
        else if (dig == "1"){
            bits[i].src = PWM_1;
        }
        else{
            bits[i].src = PWM_none;
        }
    }
});
