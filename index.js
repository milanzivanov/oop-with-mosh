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

    console.log(`Wife: I have the ${ticket}`);
    console.log(`Husband: We should go in`);
    console.log(`Wife: No I am hungry`);

    let popcorn = await getPopcorn;

    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I dont like popcorn without butter!"`);
    
    let butter = await addButter;
    console.log(`added ${butter}`);

    console.log(`Husband:Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    console.log(`Husband: thanks for the reminder *grin*`);
    
    return ticket;
}

preMovie().then((m) => console.log(`person3 shows ${m}`));

console.log(`Person 4 shows ticket`);
console.log(`Person 5 shows ticket`);
