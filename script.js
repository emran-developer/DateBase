var DB =[];
    var userObject ={
        name:"",
        family:"",
        age:0,
        email:""
    };
    var condition =true;
    var x =+prompt("enter how many users data do you have :");
    for(var i=1;i<=x;i++){
        var permission =prompt("do you want to have user "+i+" ?(yes or no)");
        if(permission == "yes"){
        
        
        
            var userObject ={
                name:prompt("enter name of user "+i+":"),
                family:prompt("enter last name of user "+i+":"),
                age:+prompt("enter age of user "+i+":"),
                email:prompt("enter email of user "+i+":")
            }
        
            if((userObject.name).length <3 || (userObject.name).length>10){
                condition =false;
                alert("ERROR:length of your name have to be upper than 3 and lowwer than 10!");
            
                while(condition === false){
                    userObject.name = prompt("enter name of user "+i+":");
                    if((userObject.name).length >=3 && (userObject.name).length<=10){
                        condition=true;
                    
                    }
                }
            }
        
            if((userObject.family).length <3 || (userObject.family).length>15){
                condition =false;
                alert("ERROR:length of your family have to be upper than 3 and lowwer than 15!");
            
                while(condition === false){
                    userObject.family = prompt("enter family of user "+i+":");
                    if((userObject.family).length >=3 && (userObject.family).length<=15){
                        condition=true;
                    }
                }
            }
        
            if(String(userObject.age).length >3 || isNaN(userObject.age) == true){
                condition =false;
                alert("ERROR:length of your age have to be lowwer than 3 and it have to be a number!");
            
                while(condition === false){
                    userObject.age = +prompt("enter age of user "+i+":");
                    if(String(userObject.age).length<=3 && isNaN(userObject.age) == false){
                        condition=true;
                    }
                }
            }
            DB.push(userObject);
        }
    }
    console.log(DB);
