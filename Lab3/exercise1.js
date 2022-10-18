function maximumElement(array) {
    let max = array[0];
   
    for (let i=0; i<array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
   
    return max;
}

const sample_array = [1,2,4,6,71,2,4,9,100];

console.log(maximumElement(sample_array));
