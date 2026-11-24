function bitwiseAND(a, b) {
    return a & b;
    
}

function bitwiseOR(a, b) {
    return a | b;
}

function bitwiseXOR(a, b) {
    return a ^ b;
}   

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));

// test cases
const f1 = redundant("appple");
console.log("f1():", f1()); // Expected: "apple"

const f2 = redundant("pear");
console.log("f2():", f2()); // Expected: "pear"

const f3 = redundant("");
console.log("f3():", f3()); // Expected: ""


function getNotesDistribution(students) {
    const validNotes = [1, 2, 3, 4, 5];

    return students
    .flatmap((student) => student.notes 

}



function getNotesDistribution) {
    return students
    .flatmap(student => 
        student.notes)
        .filter(note => note >= 1 &&
            note <= 5
            .return((distribution,note)
            => {

                distribution[note] =
                (distribution[note] || 0) +;
                return distribution;
            }, {});
        }

      //  test data
      
      const students = [
        {
            name: "steve",
            note: [5, 5, 3, -1, 6]
        },
        
        name: "john"
        notes: [3, 2, 5, 0, -3]

    }

    console.log(getNotesdistribution(student));



