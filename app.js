const { popperGenerator } = require("@popperjs/core");

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['pacom','raquenet', 'pepe'];
var ext = ['.com', '.net', '.es'];



for(var obj1 of pronoun){
       for(var obj2 of adj){
                for(var obj3 of noun){
                    for(obj4 of ext){
                        if(obj3.substring(obj3.length-obj4.length).includes(obj4.substring(1))){
                            console.log(obj1 + obj2 + obj3.slice(0,obj3.length+1-obj4.length) + obj4);
                    } else {
                        console.log(obj1 + obj2 + obj3 + obj4)
                    }
        }
    }
}

}
