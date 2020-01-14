const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Navigation starts here
const navigation = document.querySelectorAll('a');

for (let i = 0; i < navigation.length; i++){
  navigation[i].textContent = siteContent.nav['nav-item-'+(i+1)]
  navigation[i].style.color = "green";
  navigation[i].style.fontWeight = "bolder";
}

const newContent1 = document.createElement('a');
newContent1.textContent = "Search";
const navElement = document.querySelector('nav')
navElement.append(newContent1);

const newContent2 = document.createElement('a');
newContent2.textContent = "Submit";
navElement.prepend(newContent2);


const navBg = document.getElementsByTagName('nav');
navBg[0].style.backgroundColor = 'cyan';


//Top Content starts here

const header = document.querySelector('h1');
header.textContent = siteContent.cta.h1;

const roundImg = document.getElementById('cta-img');
roundImg.src = siteContent.cta["img-src"];

const buttonStyle = document.querySelector('button');
buttonStyle.textContent = siteContent.cta.button;
buttonStyle.style.backgroundColor = "dodgerblue";

const ctaBg = document.getElementsByClassName('cta');
ctaBg[0].style.backgroundColor = 'cyan';


//Middle Section Start Here

const topContentTitles = document.querySelectorAll('.top-content .text-content h4');
topContentTitles[0].textContent = siteContent["main-content"]["features-h4"];
topContentTitles[1].textContent = siteContent["main-content"]["about-h4"];



const topContentText = document.querySelectorAll('.top-content .text-content p')
topContentText[0].textContent = siteContent["main-content"]["features-content"];
topContentText[1].textContent = siteContent["main-content"]["about-content"];


const allTopContent = document.getElementsByClassName('top-content');
allTopContent[0].style.backgroundColor = 'springgreen';
allTopContent[0].style.fontWeight = 'bold';

//middle Image
const midPageImg = document.getElementById('middle-img');
midPageImg.src = siteContent["main-content"]["middle-img-src"];

//Bottom Section starts here
const bottomContentTitles = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentTitles[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].textContent = siteContent["main-content"]["services-content"];
bottomContentText[1].textContent = siteContent["main-content"]["product-content"];
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"];

//Contact Starts Here
const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent.contact["contact-h4"];

const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent.contact.address;
contactText[1].textContent = siteContent.contact.phone;
contactText[2].textContent = siteContent.contact.email;

//Footer
const footerText = document.querySelector('footer');
footerText.textContent = siteContent.footer.copyright;


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
