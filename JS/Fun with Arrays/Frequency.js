function freqObject(arr){
    let frequency = {}

    arr.forEach(num =>{
        if (frequency[num]){
            frequency[num] ++;
        } else {
            frequency[num] = 1;
        }
    });

    return frequency;
}

const arr = [1,2,3,1,2,3,1,2,3,3,3,3]
const frequency = freqObject(arr);

console.log(frequency)