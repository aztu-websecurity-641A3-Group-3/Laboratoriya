function div2(array) {   
    for (let i=0; i<array.length; i++) {        
        if (array[i]%2==0) {
            return array[i];
        }      
    }
    return -1;
}
const sample_array = [1,3,5,7,71,11,4,9,100];
console.log(div2(sample_array));