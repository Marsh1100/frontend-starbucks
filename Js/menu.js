

//DOM 
$bebidas = document.getElementById("bebidas");
$alimentos = document.getElementById("alimentos");


let mapa= new Map();
mapa.set("Café Caliente","img1.png");
mapa.set("Bebidas Heladas","img2.png");
mapa.set("Frappucinos","img3.png");
mapa.set("Refreshers","img1.png");
mapa.set("Té","img2.png");
mapa.set("Chocolate","img3.png");

mapa.forEach((valor,clave)=> {
    let html = `<div style="display: flex; flex-direction: column; width: 170px; align-items: center;
    ">
                    <div class="circulo">
                        <img src="../img/${valor}" alt="" style="height: 120px; width:100px ;">
                    </div> <br>
                    <p class="fw-bold " style="margin-left: 15px;">${clave}</p>
                </div>`;

    $bebidas.insertAdjacentHTML("beforeend", html);
})

let mapa2= new Map();
mapa2.set("Pastelería","a2.png");
mapa2.set("Panadería","a1.png");
mapa2.set("Paninis","a3.png");
mapa2.set("Tortas","a4.png");
mapa2.set("Comida Empacada","a5.png");

mapa2.forEach((valor,clave)=> {
    let html = `<div style="display: flex; flex-direction: column; width: 170px; align-items: center;
    ">
                    <div class="circulo">
                        <img src="../img/${valor}" alt="" style="height: 120px; width:100px ;">
                    </div> <br>
                    <p class="fw-bold " style="margin-left: 15px;">${clave}</p>
                </div>`;

    $alimentos.insertAdjacentHTML("beforeend", html);
})