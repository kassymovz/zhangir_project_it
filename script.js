function f1(num1){
    document.getElementById("somedigit").value += num1;
}
function f2(num2){
    document.getElementById("somedigit").value += num2;
}
function f3(num3){
    document.getElementById("somedigit").value +=num3;
}
function f4(num4){
    document.getElementById("somedigit").value +=num4;
}
function f5(num5){
    document.getElementById("somedigit").value +=num5;
}
function f6(num6){
    document.getElementById("somedigit").value +=num6;
}
function f7(num7){
    document.getElementById("somedigit").value +=num7;
}
function f8(num8){
    document.getElementById("somedigit").value +=num8;
}
function f9(num9){
    document.getElementById("somedigit").value += num9;
}
function f10(num10){
    document.getElementById("somedigit").value +=num10;
}
function f11(num11){
    document.getElementById("somedigit").value +=num11;  
}
function f12(num12){
    document.getElementById("somedigit").value +=num12;  
}
function f13(num13){
    document.getElementById("somedigit").value +=num13;  
}
function f14(num14){
    document.getElementById("somedigit").value +=num14;  
}
function f16(num16){
    document.getElementById("somedigit").value +=num16;  
}
function f17(num17){
    document.getElementById("somedigit").value +=num17; 
}
function f18(num18){
    document.getElementById("somedigit").value +=num18; 
}
function f19(num19){
    document.getElementById("somedigit").value +=num19; 
}
function f20(num20){
    document.getElementById("somedigit").value +=num20; 
}
function subtract(minus){
    document.getElementById("somedigit").value +=minus; 
}
function add(plus){
    document.getElementById("somedigit").value +=plus; 
}
function multiply(multiplication){
    document.getElementById("somedigit").value +=multiplication; 
}
function devide(devision){
    document.getElementById("somedigit").value +=devision;
}
function clearFun(){
    document.getElementById("somedigit").value = '';
}
function equall(){
    try{
        const result = eval(document.getElementById("somedigit").value);
        document.getElementById("somedigit").value = result;
    }
    catch(e){
        document.getElementById("somedigit").value = 'Error';
    }
}