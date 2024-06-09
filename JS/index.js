// let btn = document.getElementById("bouttonClick").onclick = cliquerBoutton();
let text = document.getElementById("text");
let ul = document.getElementById("list");
let btn = document.getElementById("buttonClick");
let btnSupp = document.getElementById("buttonClickSupp");


function cliquerBoutton() {

    let input = text.value;

    document.addEventListener("DOMContentLoaded", function() {
        let items = JSON.stringify(localStorage.setItem ("items")) || [];
        items.forEach(item => {
            addItemToList(item);
        });
    });

    // Ajout de la condition pour vérifier si l'input est vide
    if (input.trim() === "") {
        return; // Si l'input est vide, on quitte la fonction sans rien faire
    }


    let li = document.createElement("li");
    ul.appendChild(li);

    li.textContent = input;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        ul.removeChild(li);
    });
    

// function recupererTaches () {
//             let taches = JSON.parse(localStorage.getItem("taches")) || [];
//             return taches
//         }
//         console.log(recupererTaches());
    

//         let tabs = recupererTaches ();
//         for (let tache of tabs) {
//         console.log(tache);
//       }
    

    text.value = ""; // On remet le champ de texte à vide après l'ajout
    li.appendChild(deleteButton);
    
    
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(input);
    localStorage.setItem("items", JSON.stringify(items));
    // deleteButton.removeItem(items)
    
            for (let elementItem of items) {
                console.log(elementItem);
            }
            console.log(items);
            
        }
        
        // Ajout de l'événement sur le bouton
        btn.addEventListener('click', cliquerBoutton);
        

    
        

        
        













// localStorage.setItem('nom','paradis')
// localStorage.setItem('prénom','Nicolas')
// localStorage.removeItem('nom')
// console.log(localStorage.getItem('nom'));
// localStorage.clear()
// let maListe = ["pomme", "banane", "abricot", "ananas"]
// console.log(maListe);
// // console.log(maListe[maListe.length-1]);
// localStorage.setItem('array', maListe)
// console.log(localStorage.getItem('array'));

// localStorage.setItem('newArray', JSON.stringify(maListe))
// let newList = localStorage.getItem('newArray')
// console.log(JSON.parse(newList));

// for (let item of maListe) {
//     console.log(item);
// }

// for (let i = 0; i < maListe.length - 1; i++) {
//     console.log(maListe[i]);
// }

// console.log(maListe.sort()); //trié par ordre ascendant
// console.log(maListe.reverse()); //trié par ordre descendant
// console.log(maListe.indexOf('ananas'));//sélectionner un élément
// let index = maListe.indexOf('ananas')
// console.log(maListe.splice(index, 1)) //supprimer une valeur
// console.log(maListe);
// console.log(maListe.find(Element => Element === "abricot")); //chercher une valeur si elle existe dans une liste
// if (maListe.find(Element => Element === "abricot")) { //afficher si mon élement est dans la liste avec le SI
//     console.log("Element existe déja");
// } else {
//     console.log("Ajout d'un nouveau élement");
// }




// function cliquerBoutton() {

//     let li = document.createElement("li");
//     ul.appendChild(li);
//     let input = document.getElementById("text").value;

//     li.textContent = input; 

//     let deleteButton = document.createElement("button");
//     deleteButton.textContent = " Delete ";
//     deleteButton.addEventListener("click", function () {
//         ul.removeChild(li);
//     });
//     text.value = ""
//     li.appendChild (deleteButton);
// } 




// btn.addEventListener('click', cliquerBoutton)

// let list = document.createElement ("ul")
// document.getElementById ('text').addEventListener ('click', ul,)

// function list() {
//     let li = document.createElement ("ul")
//     ul.appendChild(li)
//     document.getElementById ('paragraphe').textContent = "paragraphe"
