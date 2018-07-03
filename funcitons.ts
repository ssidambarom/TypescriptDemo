module Tsfunction{

    function greeter2(name) {
        return "Bonjour, " + name;
     }
     
     
     function greeter3(name: string): string {
         return "Bonjour, " + name;
      }
      
     function greeter5(name: string, lastname?: string): string {
         var fullName:string = name;
     
         if(lastname)
             fullName+=" "+lastname;
     
         return "Bonjour, " + fullName;
      }
      
     function greeter6(name: string, lastname: string=""): string {
        var fullName:string = name;
    
        if(lastname !=="")
            fullName+=" "+lastname;
    
        return "Bonjour, " + fullName;
     }

      var message = greeter5("sylvain");
}

