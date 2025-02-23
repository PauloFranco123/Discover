function toggleMode(){
  const html = document.documentElement;
  html.classList.toggle("light")
  //pegar tag img
  const img = document.querySelector("#profile img");
  // substituir imagem
  if(html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribuite('src', './assets/avatar-light.png')
  } else{
     img.setAttribuite('src', './assets/avatar.png')
  }
}
