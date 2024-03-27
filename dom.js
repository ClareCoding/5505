// 变量和常量
// let count = 0
{
    let count = 0
    count++
}
// 花括号里面是一个block，内部的count不能再被外部访问


   // if (target.length != guess.length) {
    //     console.log()
    //     return;
    // }

// function wordle(target,guess) {
 
//     for (i = 0; i < 5; i++) {
        
//         if (target[0] != guess[0]){
//             if (target.includes(guess[0])) {
//                 console.log(" the firstletter appears in the word, but in a different position")
//             }
//             else {
//                 console.log(`the first letter does not appear in the word ${target}.`)
//             } }
//             else {
//                 console.log("The first letter is in the correct position")
//         }
//     }
// }


function getOrdinalNumber(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder10 = number % 10;
    const remainder100 = number % 100;

    if (remainder10 === 1 && remainder100 !== 11) {
        return number + "st";
    } else if (remainder10 === 2 && remainder100 !== 12) {
        return number + "nd";
    } else if (remainder10 === 3 && remainder100 !== 13) {
        return number + "rd";
    } else {
        return number + "th";
    }
}

function wordle(target, guess) {
    for (let i = 0; i < 5; i++) {
        if (target[i] !== guess[i]) {
            if (target.includes(guess[i])) {
                console.log(`The ${getOrdinalNumber(i + 1)} letter appears in the word, but in a different position.`);
            } else {
                console.log(`The ${getOrdinalNumber(i + 1)} letter does not appear in the word '${target}'.`);
            }
        } else {
            console.log(`The ${getOrdinalNumber(i + 1)} letter is in the correct position.`);
        }
    }
}


wordle("scope", "scoop");

        
    
