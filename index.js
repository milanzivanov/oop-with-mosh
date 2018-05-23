console.log(`Person 1 shows ticket`);
console.log(`Person 2 shows ticket`);

const preMovie = async () => {
    // async returns Promise
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket is hire after 3sec!!!'), 3000);
    });
    // we can use await inside async function
    let ticket = await promiseWifeBringingTicks;

    return ticket;
}

preMovie().then((m) => console.log(m));

console.log(`Person 4 shows ticket`);
console.log(`Person 5 shows ticket`);
