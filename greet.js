function greet(name) {

    if(name == null) {
        return 'Hello, my friend.'
    } 
 
    else if( Array.isArray(name))  {
      var value = name.length;

        if(value<3){
            return  `Hello, ${name[0]} and ${name[1]}.`;
        }
        else {
            return  `Hello, ${name[0]}, ${name[1]}, and ${name[2]}.`;
        }
    }
    
    else if(name == name.toUpperCase()) {
        return  `HELLO ${name.toUpperCase()}!`;
    }

    

    return `Hello, ${name}.`;

}

module.exports = greet;