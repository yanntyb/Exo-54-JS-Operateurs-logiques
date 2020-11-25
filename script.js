let x = 1
let y = 4
let z = -1

if(x < 2){
    document.getElementById("result1").innerHTML = "x < 2"
}
if(y > 3){
    document.getElementById("result2").innerHTML = "y > 3"
}
if(z <= 0){
    document.getElementById("result3").innerHTML = "z <= 0"
}

if (x<2 && y>3 && z<=0){
    document.getElementById("result4").innerHTML = "tout est bon"
}

if ((x<2 && y>3 ) || (z === -1)){
    document.getElementById("result5").innerHTML = "verif"
}