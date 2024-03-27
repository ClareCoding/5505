
var noe = 0;


function sayHi() {
    alert("Hi2");
    alert("Hi3");
}

function es(n) {
    // update the database
    noe += 1;
    ds();


    // ds()这样直接和prompt联系
    // ds在函数内，不影响，如果在外面是在define之前call就不可以
}

function ds() {
    // alert(noe);
    alert("Number of student is " + noe);

    // 会在inspect 里的console执行：
    // console.log("b" + "a" + +"a" + "a");

    // 跳出来一个对话框，默认值是7； 如果什么都不输入，点击cancel，实际上return的是null值 
    prompt("Give me a num", 7);


}


// function factorial(n) {
//     let rec = factorial(n-1);
//     return n*rec;
// }

// alert(5);
// factorial(5);

function removestudent() {
    // 新增到feature 2
}