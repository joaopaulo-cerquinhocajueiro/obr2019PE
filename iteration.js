
var tamanhos = {"Recife":647,
                "Limoeiro":76,
                "Araripina":58,
                "Paulista":51,
                "Arcoverde":50,
                "JaboataoDosGuararapes":37,
                "Itapissuma":35,
                "VitoriaDeSantoAntao":34,
                "SaoVicenteFerrer":28,
                "Palmares":28,
                "Olinda":27,
                "IlhaDeItamaraca":27,
                "Goiana":25,
                "TaquaritingaDoNorte":20,
                "Petrolina":20,
                "Caruaru":19,
                "Carnaiba":18,
                "Exu":18,
                "Jatoba":16,
                "AbreuELima":15,
                "Surubim":15,
                "Ribeirao":12,
                "Camaragibe":10,
                "Igarassu":10,
                "Pocao":8,
                "Pesqueira":4,
                "Moreno":4,
                "AguasBelas":4,
                "CaboDeSantoAgostinho":4,
                "Saire":4,
                "LagoaDoCarro":4,
                "Garanhuns":4,
                "Ipojuca":4};

var nomes = {"Recife":"Recife",
    "Limoeiro":"Limoeiro",
    "Araripina":"Araripina",
    "Paulista":"Paulista",
    "Arcoverde":"Arcoverde",
    "JaboataoDosGuararapes":"Jaboatão Dos Guararapes",
    "Itapissuma":"Itapissuma",
    "VitoriaDeSantoAntao":"Vitória de Santo Antão",
    "SaoVicenteFerrer":"São Vicente Ferrer",
    "Palmares":"Palmares",
    "Olinda":"Olinda",
    "IlhaDeItamaraca":"Ilha de Itamaracá",
    "Goiana":"Goiana",
    "TaquaritingaDoNorte":"Taquaritinga do Norte",
    "Petrolina":"Petrolina",
    "Caruaru":"Caruaru",
    "Carnaiba":"Carnaíba",
    "Exu":"Exu",
    "Jatoba":"Jatobá",
    "AbreuELima":"Abreu e Lima",
    "Surubim":"Surubim",
    "Ribeirao":"Ribeirão",
    "Camaragibe":"Camaragibe",
    "Igarassu":"Igarassu",
    "Pocao":"Poção",
    "Pesqueira":"Pesqueira",
    "Moreno":"Moreno",
    "AguasBelas":"Águas Belas",
    "CaboDeSantoAgostinho":"Cabo de Santo Agostinho",
    "Saire":"Sairé",
    "LagoaDoCarro":"Lagoa do Carro",
    "Garanhuns":"Garanhuns",
    "Ipojuca":"Ipojuca"};
var a = document.getElementById("alphasvg");

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
a.addEventListener("load",function(){

    // get the inner DOM of alpha.svg
    var svgDoc = a.contentDocument;
    // get the inner element by id
    // var cidade;
    var legenda = svgDoc.getElementById("tooltip");
    legenda.setAttribute("visibility", "hidden");
    for(var cidade in tamanhos){
        var cidadeElement = svgDoc.getElementById(cidade);
        // var title = svgDoc.createElementNS("http://www.w3.org/2000/svg","title")
        // title.textContent = cidade +': ' + tamanhos[cidade] + ' participantes.';
        // cidadeElement.appendChild(title);
        cidadeElement.addEventListener("mousemove",function(event){
            // console.log(atual);
            var atual = event.srcElement.id;
            ShowTooltip(event, nomes[atual] +': ' + tamanhos[atual] + ' participantes.');
        }, false);
        cidadeElement.addEventListener("mouseout",function(event){
            var tooltip = svgDoc.getElementById('tooltip');
            // console.log(tooltip)
            tooltip.setAttribute("visibility", "hidden");    
        },false);
    }

    function ShowTooltip(evt, mouseovertext) {
        var tooltip = svgDoc.getElementById('tooltip');
        var xy = evt.target.getAttribute('d').split(' ')[1].split(',')
        var x = parseFloat(xy[0]);
        var y = parseFloat(xy[1]);
        console.log(x,y);
        tooltip.firstChild.setAttribute("x", x-70);
        tooltip.firstChild.setAttribute("y", y + 20);
        // console.log(tooltip.x,tooltip.y);
        // console.log(tooltip.firstChild)
        tooltip.firstChild.innerHTML = mouseovertext;
        tooltip.setAttribute("visibility", "visible");
    }
    
    function HideTooltip(evt) {
        var tooltip = svgDoc.getElementById('tooltip');
        tooltip.setAttribute("visibility", "hidden");
    }
}, false);

