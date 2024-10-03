// Q1

// Function to check coding scores
function CodingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        // calcualte the avg
        const avgScore = marks.reduce((sum, mark) => sum + mark,0)/ marks.length;

        // set a timeout to simulate behaviour
        setTimeout(() => {
            // Checking if avg score is greater than or equal to the cutoff
            if (avgScore >= cutoff) {
                resolve(avgScore);  // resolving with avg score
            } else {
                reject('Sorry, you have not cleared the coding round.') // rejecting with msg
            }
        }, 2000);
    });
}

const scores = [70,85,90,75,80];
const cutoffscores = 80; // cutoff score set

CodingScoreCheck(scores,cutoffscores)
.then((average) => {
    console.log(`Congratulation! You passed with an average score of ${average}`);
})
.catch((error) => {
    console.log(error);
});


console.log('----------------------------------------------------------------------------')


// Q2

// Function to check HUKUMU scores
function HUKUMUScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        // calcualte the avg
        const averageScore = marks.reduce((sum, mark) => sum + mark,0)/ marks.length;

        // set a timeout to simulate behaviour
        setTimeout(() => {
            // Checking if avg score is greater than or equal to the cutoff
            if (averageScore >= cutoff) {
                resolve(averageScore);  // resolving with avg score
            } else {
                reject('Sorry, you have not cleared the HUKUMU round.') // rejecting with msg
            }
        }, 2000);
    });
}

const hukumuscores = [70,85,50,60,80];
const hukumucutoff = 70; // cutoff score set

HUKUMUScoreCheck(hukumuscores,hukumucutoff)
.then((average) => {
    console.log(`Congratulation! You passed with an average score of ${average}`);
})
.catch((error) => {
    console.log(error);
});



// Q3

// Function to check final scores
function unitMovementCheck(codingScore, hukumuScore,cutoff) {
    return new Promise((resolve, reject) => {
        // calcualte the avg
        const avergScore = (codingScore + hukumuScore) / 2;

        // set a timeout to simulate behaviour
        setTimeout(() => {
            // Checking if avg score is greater than or equal to the cutoff
            if (avergScore >= cutoff) {
                resolve(avergScore);  // resolving with avg score
            } else {
                reject('Sorry, you have not cleared the final cutoff.') // rejecting with msg
            }
        }, 2000);
    });
}

const avgCodingScore = 85;
const avgHukumuScore = 70;
const finalCutoff = 80; // cutoff score set

unitMovementCheck(avgCodingScore,avgHukumuScore,finalCutoff)
.then((average) => {
    console.log(`Congratulation! You passed with an average score of ${average}`);
})
.catch((error) => {
    console.log(error); // Handle the rejection
});