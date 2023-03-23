

function loopWhile(){
    let i = 0;
    const end = 5;

    while(i < end){
        const result = `${i} hello`;
        console.log(result);
        i++;
    
    }
}

function madLib(name, car, color){
    const sentence = `Hello my name is ${name}. I drive a ${car} which is ${color}`;
    console.log(sentence);
}

madLib('David', 'tesla', 'silver');

