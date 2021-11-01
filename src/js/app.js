import 'bootstrap';


let weekElement = document.getElementById('week');
let week1 = document.getElementById("week1");
let week2 = document.getElementById("week2");
let whosOnKitchen = document.getElementById("whosOnKitchen")
let whosOnBins = document.getElementById("whosOnBins")

let now = new Date("November 2, 2021");
let onejan = new Date(now.getFullYear(), 0, 1);
let weekOfYear = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);

let week = !(weekOfYear % 2) ? "2" : "1";
const day = now.getDay();

let currentweek = week == 1 ? week1 : week2 ;

weekElement.innerHTML = `It's Week ${week}`;

console.log(week)

if( !(day == 0 || day == 6) ){
    var whosOnToday = {"Kitchen": currentweek.children[0].children[day].innerHTML, "Bins": currentweek.children[1].children[day].innerHTML} 
}else{
    var whosOnToday = {"Kitchen": "Nobody, it's a weekend :)", "Bins": "Nobody, it's a weekend :)"} 
}

whosOnKitchen.innerHTML = whosOnToday["Kitchen"] == "Alfie" ? "<a href='https://github.com/alfie-mills'>Alfie Mills</a> 😎" : whosOnToday["Kitchen"];
whosOnBins.innerHTML = whosOnToday["Bins"] == "Alfie" ? "<a href='https://github.com/alfie-mills'>Alfie Mills</a> 😎" : whosOnToday["Bins"];