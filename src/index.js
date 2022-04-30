//API: GCmLrIukJAlQrj769dOpFN9sPUh5D2n7mjFINweqMxo
//link: https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id={API}


const API = "GCmLrIukJAlQrj769dOpFN9sPUh5D2n7mjFINweqMxo";

import {navbar} from "../components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

import {searchImage, append} from "./fetch.js";

let search = (e) =>{
    if(e.key === "Enter"){
        let value = document.getElementById("query").value;
        searchImage(API, value).then((data) =>{
            console.log(data);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });
    }
}

document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

function categoriesSearch(){
    console.log(this.id);
    searchImage(API, this.id).then((data) =>{
        console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
};

for(let elem of categories){
    elem.addEventListener("click", categoriesSearch);
};
