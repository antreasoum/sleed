const jsonData = {
    "chipolino": {
        "title": "<h1 class='descHeading'>Λίγα λόγια για την εταιρεία ChipoLino</h1>",
        "desc": "<p class='descParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com<p>",
        "list": "<ul><li>Duis aute irure dolor in reprehenderit</li><li>In voluptate velit esse cillum dolore eu</li><li>Fugiat nulla pariatur</li><li>Excepteur sint occaecat</li></ul>"
    },
    "cardSection": {
        "heading": "Best Sellers",
        "card1": {
            "cardImage1": "<img src='./assets/Image 2.png' alt='kounia'>",
            "cardText1": "<p>Καρότσι για 2 παιδιά THULE® Urban Glide 2 Double Blue</p>",
            "newPrice1": "<p>801,00€</p>"
        },
        "card2": {
            "cardImage2": "<img src='./assets/Image 2.png' alt='kounia'>",
            "cardText2": "<p>Καρότσι και port-bebe Joolz Day3 Studio Graphite Grey</p>",
            "oldPrice2": "<p>1.299,00€</p>",
            "newPrice2": "<p>1.099,00€</p>"
        },
        "card3": {
            "cardImage3": "<img src='./assets/Image 2.png' alt='kounia'>",
            "cardText3": "<p>Σύστημα μεταφοράς ChipoLiNo Electra 3 in 1 Black</p>",
            "oldPrice3": "<p>898,00€</p>",
            "newPrice3": "<p>698,00€</p>"
        },
        "card4": {
            "cardImage4": "<img src='./assets/Image 2.png' alt='kounia'>",
            "cardText4": "<p>Καρότσι και port-bebe Bugaboo Donkey2 Mono Complete</p>"
        }
    }
};

//CHIPOLINO CONTENT
const cTitle = jsonData.chipolino.title;
const cDesc = jsonData.chipolino.desc;
const cList = jsonData.chipolino.list;

const descriptionElement = document.querySelector('.aboutUsDescription');
const contentContainer = document.createElement('div')
contentContainer.innerHTML = cTitle + cDesc + cList;
descriptionElement.appendChild(contentContainer);