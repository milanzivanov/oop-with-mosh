console.log(`Person 1 shows ticket`);
console.log(`Person 2 shows ticket`);

const preMovie = async () => {
    // async returns Promise
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket!!!'), 3000);
    });

    const getPopcorn =  new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const addButter =  new Promise((resolve, reject) => {
        setTimeout(() => resolve('butter'), 3000);
    });

    // we can use await inside async function
    let ticket = await promiseWifeBringingTicks;
    let [popcorn, butter] = await Promise.all([getPopcorn, addButter]);

    console.log(`${popcorn}, ${butter}`);
    
    return ticket;
}

preMovie().then((m) => console.log(`person3 shows ${m}`));

console.log(`Person 4 shows ticket`);
console.log(`Person 5 shows ticket`);
