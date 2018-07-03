var myObject = <any>{id:1, name:"John"};

myObject.id // id est du type any par le typage 
            // par déduction du compilateur

var myOtherObject = {id:2, name:"Peter"} as any;