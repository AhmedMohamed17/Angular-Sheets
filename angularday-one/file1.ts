var username : string = "ahmed ";
console.log(username);

var age : number = 15 ;
console.log(age);

var tools : Array<string> = ["php","node", "Angular"];
console.log(tools);

var userEducation : any = "Cs" ;

userEducation= null;
// functions 

function getUserName (Fname:string , Lname:string) : string{
return  Fname+Lname;
    
}
console.log(getUserName("ahmed" , "sayed"))

// UNION TYPES  = 2 types 
var usernamee : string  | null = "ahmed ";

usernamee = "sayed";

usernamee = null;

// var num : number  | string = "ahmed ";

// num = 15 ;

// interface 

var userObj : User =  {
    name : "ahmed ",
    age : 26 , 
    education :"CS",
    skills : ["php ", "JS", "Ts"],
    isGraduated : true,
}
interface User {
    name : string,
    age: number,
    education : string,
    skills:Array<string>,
    isGraduated : boolean,
    graduationYear ?:string ,      
}

// ?: optional 

console.log(userObj.name);

// classes 

class Shape {
    height :number ;
    width : number ; 
    constructor (height : number , width : number){
this.height = height;
this.width = width;
    }
}



var shape = new Shape (10,2);

console.log(shape.width);

class Square extends Shape {
    name : string;
    constructor (height , width , name){
       super(height , width );
       this.name = name ;
    }
    calculateSquare ():string {
        return `${this.name} is ${this.height*this.width}`
    }
}


var square = new Square (10,3 , "square");
console.log(square.calculateSquare())



export {getUserName};


















































