//Task 4


function Arrayfunc () {
    var movies =["harry potter","narnia","fast and furious","Interstellar","aliens"];


var forthArray = movies[3];
if (forthArray.charAt(0) ==="I") {

    console.log("Yay");
}

else{
    console.log("Nay");
}




movies = [];
movies.pop("0");
movies.pop("1");
movies.pop("2");
movies.pop("3");
movies.push("Ironman");

console.log(movies);

}



Arrayfunc ();



function ObjectFunc () {
    var car ={
        model: "Bmwi8",
        color: "White",
        price: 45,
    
    
    };
    
    
    var car ={};
        model = "Bmwi8";
        color ="White";
        price =90;
    
    
    
    if (price>50){
        console.log("Expensive");
    }
    
    else{
        console.log("Affordable");
    }
    
    
}

ObjectFunc ();