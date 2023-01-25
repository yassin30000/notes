// Common JS Modules

    // *notes*
        // file = module
        // we want to seperate each module for a single responsibility
        // in order to make variables or functions available to other files
        // we must export and import them

    // node
        // each module in node has acces to the module object. this object
        // holds properties

    // 3 ways to export

        // 1: (most common)
            module.exports = {
                hi,
                bye
            };

        // 2:
            module.exports.hi = hi;
            module.exports.bye = bye;

        // 3:
            exports.hi = hi;
            exports.bye = bye;
