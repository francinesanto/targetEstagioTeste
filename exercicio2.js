//criar a sequencia de fibonacci


function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let fib = b;
    
    while (fib < number) {
      fib = a + b;
      a = b;
      b = fib;
      
    }
    if(  fib === number) {
        console.log(`${number} está na sequência`)
    } else (
        console.log(`${number} não está na sequência`)
    )
     
    }

    isFibonacci(34)