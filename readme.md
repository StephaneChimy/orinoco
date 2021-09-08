<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/StephaneChimy/orinoco.svg?style=for-the-badge
[contributors-url]: https://github.com/StephaneChimy/orinoco/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/StephaneChimy/orinoco.svg?style=for-the-badge
[forks-url]: https://github.com/StephaneChimy/orinoco/network/members
[stars-shield]: https://img.shields.io/github/stars/StephaneChimy/orinoco.svg?style=for-the-badge
[stars-url]: https://github.com/StephaneChimy/orinoco/stargazers
[issues-shield]: https://img.shields.io/github/issues/StephaneChimy/orinoco.svg?style=for-the-badge
[issues-url]: https://github.com/StephaneChimy/orinoco/issues
[license-shield]: https://img.shields.io/github/license/StephaneChimy/orinoco?style=for-the-badge
[license-url]: https://github.com/StephaneChimy/orinoco/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/stephane-chimy
[product-screenshot]: /responsive.png



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<div align="center">
 
 [![Contributors][contributors-shield]][contributors-url]
 [![Forks][forks-shield]][forks-url]
 [![Stargazers][stars-shield]][stars-url]
 [![Issues][issues-shield]][issues-url]
 [![MIT License][license-shield]][license-url]
 [![LinkedIn][linkedin-shield]][linkedin-url]
 
</div>


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/StephaneChimy/orinoco">
    <img src="https://github.com/OpenClassrooms-Student-Center/JWDP5/blob/master/images/teddy_1.jpg" alt="Logo" width="100">
  </a>

  <h1 align="center">Orinoco</h1>

  <p align="center">
    Construire un site e-commerce
    <br />
    <a href="https://github.com/StephaneChimy/orinoco"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://sc-orinoco.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/StephaneChimy/orinoco/issues">Report Bug</a>
    ·
    <a href="https://github.com/StephaneChimy/orinoco/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>📝 Table of Contents</summary>
  <ol>
    <li>
    <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#objectives">Objectives</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
   <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
   <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
   <!-- <li><a href="#contact">Contact</a></li> -->
   <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 🧐 About The Project <a name = "about-the-project"></a>

[![Orinoco][product-screenshot]](https://sc-orinoco.netlify.app)

Créer un MVP pour démontrer le fonctionnement de ses applications à ses investisseurs.
Le backend dont l'API sont déjà en place.

#### ARCHITECTURE GÉNÉRALE

L’application web sera composée de 4 pages :
Une page de vue sous forme de liste, montrant tous les articles disponibles à la vente.
Une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier.
Une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date.
Une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé par le serveur.

#### CONTRAINTES

* Pour le MVP, la personnalisation du produit ne sera pas fonctionnelle : la page contenant un seul article aura un menu déroulant permettant à l'utilisateur de choisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur ni reflétée dans la réponse du serveur.
* Le code source devra être indenté et utiliser des commentaires. Il devra également utiliser des fonctions globales.
* Concernant l’API, des promesses devront être utilisées pour éviter les rappels.
* Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.



### 🎯 Objectives <a name = "objectives"></a>

* Valider des données issues de sources externes
* Gérer des événements JavaScript
* Créer un plan de test pour une application
* Interagir avec un web service avec JavaScript


### ⛏️ Built With <a name = "built-with"></a>

-Frontend

* [HTML5](https://fr.wikipedia.org/wiki/HTML5)
* [CSS3](https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade)
* [Javascript](https://fr.wikipedia.org/wiki/JavaScript)
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)


-Backend

*Made by OpenClassrooms




<!-- GETTING STARTED -->
## 🏁 Getting Started <a name = "getting-started"></a>


<!--
### Prerequisites

Make sure you have [Mysql](https://www.mysql.com/fr/) installed.
 -->
 
 

### Installation

1 - Clone the repository into the folder of your choice.

```
git clone https://github.com/StephaneChimy/orinoco.git
```

2 - Install the backend from `https://github.com/OpenClassrooms-Student-Center/JWDP5` and run node server

3 - Open the `index.html` (from the `orinoco/frontend/` folder you cloned before) in your browser.



<!--
## 🚀 Deployment <a name = "deployment"></a>
Add additional notes about how to deploy this on a live system.
-->


<!-- USAGE EXAMPLES
## 🎈 Usage <a name = "usage"></a>

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.
-->

<!--
_For more examples, please refer to the [Documentation](https://example.com)_
-->


<!-- ROADMAP -->
## 🗺 Roadmap <a name = "roadmap"></a>

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING 
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

-->


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT
## ✍️ Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
-->



## ✍️ Authors <a name = "authors"></a>
- [@stephanechimy](https://github.com/StephaneChimy) - Initial work



<!-- ACKNOWLEDGEMENTS 
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)

-->

