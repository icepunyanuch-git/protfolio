//window.onload = pageLoad;

//function pageLoad(){
	
//}

//function showData(data){
	
//}

window.onload = pageLoad;

function pageLoad(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "cloth.json", true);

    xhr.onload = function(){

        let data = JSON.parse(xhr.responseText);

        showData(data);
    };

    xhr.onerror = function(){
        alert("ERROR");
    };

    xhr.send();
}

function showData(data){
    
    let layer = document.getElementById("layer");
    let boxes = layer.children;

    for(let i = 0; i < data.length; i++){
        let img = document.createElement("img");
        img.src = "pic/" + data[i].img;
        img.width = 180;

        let brand = document.createElement("p");
        brand.textContent = data[i].brand;

        let price = document.createElement("p");
        price.textContent = "Price: " + data[i].price + " Baht";

        boxes[i].appendChild(img);
        boxes[i].appendChild(brand);
        boxes[i].appendChild(price);
    }
}