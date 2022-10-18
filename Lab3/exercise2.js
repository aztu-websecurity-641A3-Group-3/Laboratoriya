function minimumElement(array) {
    let min = array[0];
   
    for (let i=0; i<array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
   
    return min;
}

const sample_array = [1,2,4,6,71,2,4,9,100];

console.log(minimumElement(sample_array));