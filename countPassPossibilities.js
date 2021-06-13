function countPassPossibilities(num1, num2) {
    let count = 0
    for(num1; num1<num2; num1++) {
        const toString = num1.toString()
        const arrOfNums = Array.from(toString, x => Number(x))

        let isDouble = false
        let isIncreasing = true

        // interating each number
        for (let i = 0; i< arrOfNums.length-1; i++) {
            
            //check is increasing value or not
            if(arrOfNums[i] > arrOfNums[i+1]){
                isIncreasing = false
                break
            }
            
            //check is double or not
            if(arrOfNums[i] === arrOfNums[i+1]){
                isDouble = true
            }
        }
        
        //increment count if both condition fulfilled
        if (isDouble && isIncreasing) {
            count++
        }
    }
    return count
}