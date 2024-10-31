function changeBackgrounColor(){
    const backgrounColor = prompt("ingrese un color de fondo para la web");
document.body.style.backgroundColor = backgrounColor;
}

//changeBackgrounColor();

function registerBrothers(){

    const brotherQuantity =Number(prompt("Ingrese la cantidad de heramnos"));
    const brothers = [];

    const counter=0
    while(counter < brotherQuantity){
        
        const brotherName = prompt("Ingrese el nombre de tu hermano" + (counter+1));
        brothers.push(brotherName);
        counter++
    }

    console.log(brothers);

}