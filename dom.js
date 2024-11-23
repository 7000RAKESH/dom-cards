import { data } from "./data.js";

let body = document.body;
let div;
let iimage;
let title;
let price;
let details;
let div2;
let div3;
let div4;
let button;
body.style.display = "grid";
body.style.gridTemplateColumns = "1fr 1fr 1fr";
body.style.rowGap = "2rem";
let information;
for (let info in data) {
  // console.log(data[info]);
  information = data[info];
  div = document.createElement("div");
  body.appendChild(div);
  divStyling(div);
  iimage = document.createElement("img");
  div.appendChild(iimage);
  imageStyling(iimage);
  title = document.createElement("h4");
  div.appendChild(title);
  title.textContent = information.title;
  price = document.createElement("p");
  price.innerText = `price: ${information.price} $`;
  div.appendChild(price);
  details = document.createElement("div");
  div.appendChild(details);
  detailss(details);
  div2 = document.createElement("div");
  div3 = document.createElement("div");
  div4 = document.createElement("div");
  divs(div2);
  divs(div3);
  divs(div4);
  details.appendChild(div2);
  details.appendChild(div3);
  details.appendChild(div4);
  div2.innerText = `Rating:${information.rating.rate}`;
  div3.innerText = `Count:${information.rating.count}`;
  div4.innerText = `Category:${information.category}`;
  button = document.createElement("button");
  div.appendChild(button);
  buttons(button);
  button.innerText = "Add to Cart";
}

function buttons(container) {
  container.style.width = "80%";
  container.style.height = "2rem";
  container.style.marginTop = "10%";
  container.style.height = "3rem";
  container.style.borderRadius = "2rem";
}
function divs(container) {
  container.style.display = "flex";
  container.style.width = "30%";
  container.style.height = "3rem";
  container.style.backgroundColor = "white";
  container.style.borderRadius = "2rem";
  container.style.fontSize = "0.8rem";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.border = " solid 0.1rem  black";
}
function detailss(container) {
  container.style.width = "90%";
  container.style.height = "4rem";
  container.style.backgroundColor = "Grey";
  container.style.borderRadius = "2rem";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "space-evenly";
  container.style.border = " solid 0.1rem  black";
}

function divStyling(container) {
  container.style.width = "90%";
  container.style.height = "auto";
  container.style.backgroundColor = "lightGrey";
  container.style.borderRadius = "2rem";
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.flexDirection = "column";
  container.style.textAlign = "center";
  container.style.border = " solid 0.2rem  black";
}
function imageStyling(images) {
  images.setAttribute("src", information.image);
  images.style.borderRadius = "2rem";
  images.style.paddingTop = "0.5rem";
  images.style.width = "60%";
  images.style.height = "50%";
  images.style.objectFit = "fill";
}
