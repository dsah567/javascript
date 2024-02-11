const mul =(a,b)=> {
        a=a+1
        b= b+1
        return a*b
    }
    
    console.log(mul(1,2))
    
    let s = [ 2,4,4,4,5,8]
    console.log(mul.apply(null,s));
    console.log(mul.call(null,1,2));
    console.log(mul.call(null,s));
    
    // console.log(mul(2,4,8,4,5,))
    
    const array = ["a", "b"];
    const elements = [0, 1, 2];
    // array.push.apply(array, elements);
    // console.info(array); 
    array.push.call(array, elements);
    console.info(array); 