"use strict";
const result=document.getElementById("result");
const C=document.getElementById("C");
const Del=document.getElementById("del");
const dot=document.getElementById("dot");
const divide=document.getElementById("divide");
const seven=document.getElementById("seven")
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const mul=document.getElementById("mul");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const subs=document.getElementById("subs");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const add=document.getElementById("add");
const double00=document.getElementById("double00");
const zero=document.getElementById("zero");
const equal=document.getElementById("equal");

    C.addEventListener("click",()=>{
        result.value=" ";
    })

    Del.addEventListener("click",()=>{
        // let delet=Del.slice(0,-1)
        result.value=`${result.value.slice(0,-1)}`;
    })

    dot.addEventListener("click",()=>{
        result.value+=".";
    })
    divide.addEventListener("click",()=>{
        result.value+="/";
    })

    seven.addEventListener("click",()=>{
        result.value+="7";
    })

    eight.addEventListener("click",()=>{
        result.value+="8";
    })

    nine.addEventListener("click",()=>{
        result.value+="9";
    })

    mul.addEventListener("click",()=>{
        result.value+="*";
    })


    four.addEventListener("click",()=>{
        result.value+="4";
    })

    five.addEventListener("click",()=>{
        result.value+="5";
    })

    six.addEventListener("click",()=>{
        result.value+="6";
    })
    subs.addEventListener("click",()=>{
        result.value+="-";
    })

    one.addEventListener("click",()=>{
        result.value+="1";
    })

    two.addEventListener("click",()=>{
        result.value+="2";
    })

    three.addEventListener("click",()=>{
        result.value+="3";
    })

    add.addEventListener("click",()=>{
        result.value+="+";
    })

    double00.addEventListener("click",()=>{
        result.value+="00";
    })

    zero.addEventListener("click",()=>{
        result.value+="0";
    })

    equal.addEventListener("click",()=>{
        result.value=eval(result.value);
    })