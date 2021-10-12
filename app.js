
const countdown = (6, 2)
let chain = true;
const num1 = () => {
    return new Promise((resolve, reject) => {
        if (chain) {
            resolve({
               add: 6 + 2
            });
        } ;
    });
};
countdown();

const countdown = (6, 2)
let chain = true;
const num1 = () => {
    return new Promise((resolve, reject) => {
        if (chain) {
            resolve({
               divide: 8 / 4
            });
        } ;
    });
};
countdown();