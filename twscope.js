function createScope(){

    // Initialise Store when createScope() is called
    var Store = {};

    var scope = {

        // Save a key and value to the Store
        save: function(key, value){
            if(key !== "" && value !== ""){
                Store[key] = `${value}`;
                // console.log(Store);
            }
        },

        // Compile the binding of [scope] to the classes
        compile: function(){
            var scopeTags = document.querySelectorAll("[\\[scope\\]]");
            scopeTags.forEach((ele) => {
                try{
                    var scopeBinding = ele.getAttribute("[scope]");
                    // console.log(`scopeBinding is ${scopeBinding}`);
                    // console.log(`scopeBinding value: ${JSON.stringify(Store[scopeBinding])}`)
                    var allClasses = Store[scopeBinding].split(" ");
                    allClasses.forEach((c) => {
                        ele.classList.add(c);
                    })
                }
                catch(error){
                    // console.log(error);
                }
                ele.removeAttribute("[scope]");
            });
        }
    }

    return scope;

}

export default createScope;