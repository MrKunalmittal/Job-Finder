/*---------------------------------------------------
    Intro to Third party API's
    Kunal Mittal

    Assignment-02

--------------------------------------------------------*/
'use strict';

function select (selector, parent = document){
    return parent.querySelector(selector);

}
const content = select('.box-3');

const url = 'https://randomuser.me/api/?nat=CA&results=10';

const options = {
    method: 'GET',
    mode: 'cors'
};

let arr = [];
async function getMovies() {
    try {
        const result = await fetch(url, options);


        if( result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const movies = data.results;
            console.log(data);

            for(let i = 0;i<movies.length;i++){
               let newDiv = document.createElement("div");
               newDiv.classList.add('box');
                let fullname = document.createElement("p");

                let picdiv= document.createElement("div");
                picdiv.classList.add('avatar');

                let fname = movies[i].name.first;
                let lname = movies[i].name.last;
                let name = fname+""+lname;
                // console.log(name);
                let cityname = document.createElement("p");
                let city = movies[i].location.city;
                console.log(city);

                let pic = movies[i].picture.medium;
                picdiv.style.background = `#000 url(${pic}) center center / cover no-repeat `;


                fullname.innerText =  name;
                fullname.innertext = city;
                
                newDiv.appendChild(picdiv);
                newDiv.appendChild(fullname);
                newDiv.appendChild(cityname);
                
                console.log(pic);
                content.appendChild(newDiv);

            }
        }
    } catch (error) {
        console.log(error);
    }
}
getMovies();

   
  
