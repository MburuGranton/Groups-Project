const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const totalData = data.length;


function divide(totalData, chunkSize) {
    var divide = totalData / parseInt(chunkSize);
    alert(`The total of groups are ${ divide }.`);
}

const container = document.getElementById("container");

const containerLength = divide;

// function randomizeAndSplit(data, chunkSize) {
//     var arrayOfArrays = [];
//     var shuffled = [...data]; //make a copy so that we don't mutate the original array

//     //shuffle the elements
//     for (let i = shuffled.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }

//     //split the shuffled version by the chunk size
//     for (var i = 0; i < shuffled.length; i += chunkSize) {
//         arrayOfArrays.push(shuffled.slice(i, i + chunkSize));
//     }
//     return arrayOfArrays;
// }

function randomize() {
    for (i = 0; i < containerLength; i++) {

        // randomizeAndSplit(data, chunkSize);


        var newDiv = document.createElement("div");
        document.getElementById("container").appendChild(newDiv);
        newDiv.className = "addedClass";
        var textHere = document.createTextNode(arrayOfArrays);
        newDiv.appendChild(textHere);
        var addHere = document.getElementById("addHere");
        addHere.appendChild(newDiv);


    }
}