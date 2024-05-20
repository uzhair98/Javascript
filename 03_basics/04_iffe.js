// Immediately Invoked Function Expression (IFFE)

(function chai(){
    //name IFFE
    console.log("DB Connected");
})();

((name) => {
    console.log(`DB Connected to ${name}`)
})("Uzhair")