
var selector = document.getElementById("selector");
var card = document.getElementById("photo");
var cardbody = document.getElementById("identity");
var profissao = document.getElementById("profissao");
var bio = document.getElementById("bio");
var socials = document.getElementById("socials");


selector.addEventListener("change", () => {
    fetch(`http://10.0.0.151:3333/pessoas/${selector.value}`)
      .then((response) => response.json())
      .then((data) => {
        card.setAttribute("src", data.foto)
        nome.innerHTML = data.nome;
        bio.innerHTML = data.bio;
        profissao.innerHTML = data.profissao;

      });
  });





 