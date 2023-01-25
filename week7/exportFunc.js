function hi(name) {
    console.log(`Hi, ${name}!`);
}

function bye() {
    console.log('Bye, Brother');
}

// assigning this property to a new object that holds our functions
module.exports = {
    hi,
    bye
};
