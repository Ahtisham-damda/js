//Pattern 2: Decreasing Numbers


let rows = 5;

for (let i = rows; i >= 1; i--) {     
    let line = "";
    for (let j = rows; j >= rows - i + 1; j--) {   
        line += j + " ";
    }
    console.log(line);
}