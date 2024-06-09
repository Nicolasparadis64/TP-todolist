let nouvellesTache = document.getElementById("nouvellesTache");
let ajouter = document.getElementById("ajouter");
let listeTaches = document.getElementById("listeTaches");

// Fonction pour récupérer les tâches depuis localStorage
function recupererTaches() {
    let taches = JSON.parse(localStorage.getItem('taches')) || [];
    return taches;
}

// Fonction pour afficher les tâches
function afficherTaches() {
    listeTaches.innerHTML = ''; // Vider la liste pour éviter les doublons
    const tasks = recupererTaches();
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.textContent = task;
        let btn = document.createElement('button');
        btn.textContent = 'supprimer';
        btn.addEventListener('click', () => supprimer(index));
        li.appendChild(btn);
        listeTaches.appendChild(li);
    });
}

// Fonction pour ajouter une tâche
function ajouterTask() {
    let tasks = recupererTaches();
    tasks.push(nouvellesTache.value);
    localStorage.setItem('taches', JSON.stringify(tasks));
    nouvellesTache.value = "";
    nouvellesTache.focus();
    afficherTaches();
}

// Fonction pour supprimer une tâche
function supprimer(index) {
    let tasks = recupererTaches();
    tasks.splice(index, 1);
    localStorage.setItem('taches', JSON.stringify(tasks));
    afficherTaches();
}

// Attacher l'événement au bouton d'ajout
ajouter.addEventListener('click', ajouterTask);

// Afficher les tâches au chargement de la page
afficherTaches();






// let nouvellesTache = document.getElementById("nouvellesTache")
// let ajouter = document.getElementById("ajouter")
// let listeTaches = document.getElementById("listeTaches")
// let btnSupp = document.getElementById("buttonClickSupp");


// //function to get data from localStorage

// function recupererTaches() {
//     let taches = JSON.parse(localStorage.getItem('list')) || []
//     return taches
// }
// console.log(recupererTaches());

// function afficherTaches() {
//     const tasks = recupererTaches()
//     console.log(tasks);
//     for (let task of tasks) {
//         console.log(tasks);
//         let li = document.createElement('li')
//         let btn = document.createElement ('button')
//         btn.textContent = 'supprimer'
//         li.appendChild(btn)
//         btn.addEventListener('click', supprimer)
//         li.textContent = task
//         listeTaches.appendChild(li)
//     }
// }

// function ajouterTask(){
//     let tasks = recupererTaches()
//     tasks.push(nouvellesTache.value)
//     localStorage.setItem('taches',JSON.stringify(tasks))
//     nouvellesTache.value = ""
//     nouvellesTache.focus()
//     afficherTaches()
// }
// ajouter.addEventListener('click',ajouterTask())

// function supprimer() {
// let tasks = recupererTaches()
// let index = tasks.indexOf(task)
// tasks.splice(index,1)
// localStorage.setItem('taches',tasks)
// }









// afficherTaches()
