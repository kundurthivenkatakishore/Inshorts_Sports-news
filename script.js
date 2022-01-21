let img=document.getElementsByClassName("card-img-top");
let title=document.getElementsByClassName("card-title");
let content=document.getElementsByClassName("card-text");
document.body.innerHTML = `<div class="heading-container">
<img src="https://play-lh.googleusercontent.com/hd-zjb0kvaVWufm0SEsant8zt0-HS_0tUMv79m2onY_wpkdrAArYV8oZ0vQPiMolpPIa" width="100px"
height="100px">
<h1>Inshorts</h1>
<div id="mainContainer" class="main-container"></div>`;

const getData = async () => {
  try {
    const data = await fetch("https://inshorts-api.herokuapp.com/news?category=sports");
    const satilites =await data.json();
    console.log(satilites)
    console.log(satilites.centres)
    mainContainer.innerHTML = "";
    satilites.data.forEach((satilite) => {
      displayData(satilite);
    });
  } catch (error) {
    console.log(error);
  }
};
getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <div class="card" style="width: 18rem;">
  <img src="${obj.imageUrl}" width="290px" height="250px">
  <div class="card-body">
    <h4 class="card-title">${obj.title}</h4>
    <p class="card-text">${obj.content}</p>
    </div>
    </div>
  </div>`;
};