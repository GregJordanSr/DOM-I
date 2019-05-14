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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = Array.from(document.querySelectorAll('a'));


nav.forEach((item, index) => item.textContent =  siteContent.nav[`nav-item-${index + 1}`] )
nav.forEach((item, index) => item.style.color =  `green`);

// Add 2 elements to Nav bar 

const nav1 = document.getElementsByTagName('nav')[0];

const navI = document.createElement('a');
navI.textContent = 'Home';
navI.style.color = 'green';

const navI2 = document.createElement('a');
navI2.textContent = 'News';
navI2.style.color = 'green';

nav1.prepend(navI);
nav1.append(navI2);



let imgSrc = document.getElementById('cta-img');
imgSrc.setAttribute('src', siteContent.cta["img-src"]);

let mainH1 = (document.querySelector('.cta h1').textContent = siteContent.cta['h1'])
let ctaButton = (document.querySelector('.cta .cta-text button').textContent = siteContent.cta['button'])

// Top Content

let topContent = document.querySelectorAll('.top-content .text-content');

topContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
topContent[0].querySelector('p').textContent = siteContent['main-content']['about-content'];

topContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
topContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];

// Middle img 

const middleImg = document.querySelector('.middle-img').src = siteContent['main-content']['middle-img-src'];

// Bottom content and Contact 
  const bottomContent = document.querySelectorAll('.bottom-content .text-content');

  bottomContent[0].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
  bottomContent[0].querySelector('p').textContent = siteContent['main-content']['services-content'];

  bottomContent[1].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
  bottomContent[1].querySelector('p').textContent = siteContent['main-content']['product-content'];

  bottomContent[2].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
  bottomContent[2].querySelector('p').textContent = siteContent['main-content']['vision-content'];

  const contactSection = document.querySelectorAll('.contact'); 
  const contactSectionParagraph = document.querySelectorAll('.contact p');

  contactSection[0].querySelector('h4').textContent = siteContent.contact['contact-h4'];
  contactSectionParagraph[0].textContent = siteContent.contact['address'];
  contactSectionParagraph[1].textContent = siteContent.contact['phone'];
  contactSectionParagraph[2].textContent = siteContent.contact['email'];

  // Footer

  const footer = document.querySelector('footer p');
  footer.textContent = siteContent.footer['copyright']

