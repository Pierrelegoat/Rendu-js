fetch(
  "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/instruments-musique-monde.json"
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load JSON data");
    }
    return response.json();
  })
  .then((data) => {
    let header = document.getElementById("Header");
    let h1 = document.createElement("h1");
    let p1 = document.createElement("p");
    let bouton = document.createElement("button");
    let h2 = document.createElement("h2");
    let steve = Object.keys(data);
    console.log(steve);

    h1.textContent = data.nomEntreprise;
    p1.textContent = data.accroche;
    bouton.textContent = data.callToAction;
    h2.textContent = steve[3];

    header.appendChild(h1);
    header.appendChild(p1);
    header.appendChild(bouton);
    header.appendChild(h2);

    // console.log(p3);

    let promesse = data.promesses;
    promesse.forEach((element) => {
      let p3 = document.createElement("p");
      p3.textContent = element;
      console.log(element);
      header.appendChild(p3);
      console.log(data.promesses);
    });

    let section = document.getElementById("sec1");
    let h3 = document.createElement("h3");
    h3.textContent=steve[4];
    section.appendChild(h3);
    let produit = data.produits;
    produit.forEach((element) => {
        let h4 =document.createElement("h4");
        h4.textContent=element.nom;
        section.appendChild(h4);
        let p4 = document.createElement("p");
        p4.textContent=element.description;
        section.appendChild(p4);
        let image = document.createElement("img");
        image.src = element["image-url"]
        section.appendChild(image);
    });
    let section1 = document.getElementById("sec2");
    let service = document.createElement("h2");
    service.textContent=steve[5]
    section1.appendChild(service);
    let serv = data.services;
    serv.forEach((element) => {
        let h4 = document.createElement("h4");
        h4.textContent=element.nom;
        section1.appendChild(h4);
        let p5 =document.createElement("p");
        p5.textContent=element.description;
        section1.appendChild(p5);
        let image2 = document.createElement("img");
        image2.src = element["image-url"]
        section1.appendChild(image2)
    });
    let section2 = document.getElementById("sec3");
    let avis = document.createElement("h2");
    avis.textContent=steve[6]
    section2.appendChild(avis);
    let temoignage = data.temoignages;
    temoignage.forEach((element) => {
        let h3=document.createElement("h3");
        h3.textContent=element.prenom;
        section2.appendChild(h3);
        let p6 = document.createElement("p");
        p6.textContent=element.prestation;
        section2.appendChild(p6);
        let p7 = document.createElement("p");
        p7.textContent=element.commentaire;
        section2.appendChild(p7);
        let p8 = document.createElement("p");
        p8.textContent=("Note : " + element.note);
        section2.appendChild(p8);
    });






















})
  .catch((error) => console.error("Error:", error));
