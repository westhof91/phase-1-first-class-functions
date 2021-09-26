function receivesAFunction(callback){
    return callback()
}


function returnsANamedFunction()  {
    return function index() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {

    }

}
