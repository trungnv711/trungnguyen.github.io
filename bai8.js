//function calculater_if
function calculater_if() {
    const operator = prompt('Enter operator ( either +, -, * or / ): ');

    let a = parseFloat(prompt("Nhập số a: "));
    let b = parseFloat(prompt("Nhập số b: "));
    let result;

    if (operator == "+") {
        result = a + b;
        alert(result)
    } else if (operator == "-") {
        result = a - b;
        alert(result)
    } else if (operator == "*") {
        result = a - b;
        alert(result)
    } else if (operator == "/") {
        result = a / b;
        alert(result)
    }else {
        result = "Bạn nhập phép tính không hợp lệ!"
        alert(result)
    }
}
//function calculater_switch
function calculater_switch() {
    const operator = prompt('Enter operator ( either +, -, * or / ): ');

    let a = parseFloat(prompt("Nhập số a: "));
    let b = parseFloat(prompt("Nhập số b: "));
    let result;

    switch (operator) {
        case "+":
            result = a + b;
            alert(result)
            break;
        case "-":
            result = a - b;
            alert(result)
            break;
        case "*":
            result = a * b;
            alert(result)
            break;
        case "/":
            result = a / b;
            alert(result)
            break;
        default:
            result = "Bạn nhập phép tính không hợp lệ!"
            alert(result)
            
    }
}
//function forlook
function forlook(){
    const number = parseInt(prompt("Enter a positive number: "));
    let isPrime = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (number < 2){
        isPrime = false;
    }
    else if (number == 2){
        isPrime = true;
    }
    else if (number % 2 == 0){
      isPrime = false;
    }
    else{
        // lặp từ 2 
        for (let i = 2; i < number; i++)
        {
            if (number % i == 0){
                isPrime = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến isPrime
    if (isPrime == true){
        alert(number + " là số nguyên tố ");
    }
    else{
        alert(number + " không phải là số nguyên tố ");
    }
}