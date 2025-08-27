// slå dig løs her... 
// HERO SECTION
const heroSection = document.querySelector(".hero");
heroSection.innerHTML = `
  <div class="hero-grid">
    <div class="hero-text">
      <h1>${hero.headline}</h1>
      <p>${hero.copy}</p>
      <button class="hero-btn">
        <img src="${hero.icon}" alt="Globe Icon">
        Explore
      </button>
    </div>
  </div>
`;


// SERVICES SECTION
const servicesSection = document.querySelector(".services");
servicesSection.innerHTML = `
    <div class="services-list">
        ${services.map(service => `
            <div class="service-item">
                <img src="${service.illustration}" alt="${service.headline}">
                <h3>${service.headline}</h3>
                <p>${service.text}</p>
                <a href="#">${service.linktext}</a>
            </div>
        `).join("")}
    </div>
`;

// FACILITIES SECTION
const facilitiesSection = document.querySelector(".facilities");
facilitiesSection.innerHTML = `
    <h2>${facilities.headline}</h2>
    <div class="facilities-options">
        ${facilities.options.map(option => `
            <div class="facility-item">
                <img src="${option.icon}" alt="${option.headline}">
                <h3>${option.headline}</h3>
                <p>${option.text}</p>
                <a href="#">Show me more</a>
            </div>
        `).join("")}
    </div>
`;

// SITES SECTION
const sitesSection = document.querySelector(".sites");
sitesSection.innerHTML = `
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <div class="sites-list">
        ${sites.places.map(place => `
            <div class="site-item">
                <img src="${place.img}" alt="${place.name}">
                <h3>${place.name}</h3>
                <p>${place.city}</p>
            </div>
        `).join("")}
    </div>
    <button>
        <img src="${sites.btnicon}" alt="Arrow Icon">
    </button>
`;

// ADVANTAGES SECTION
const advantagesSection = document.querySelector(".advantages");
advantagesSection.innerHTML = `
    <h2>Advantages</h2>
    <div class="advantages-list">
        ${advantages.map(adv => `
            <div class="advantage-item">
                <img src="${adv.icon}" alt="${adv.headline}">
                <h3>${adv.headline}</h3>
                <p>${adv.text}</p>
            </div>
        `).join("")}
    </div>
`;

// FOOTER SECTION
const footerSection = document.querySelector(".footer");
footerSection.innerHTML = `
    <div class="footer-top">
        <div class="footer-brand">
            <h2>${footer.brand.title}</h2>
            <p>${footer.brand.tagline}</p>
        </div>
        <div class="footer-columns">
            ${footer.columns.map(col => `
                <div class="footer-column">
                    <h3>${col.headline}</h3>
                    <ul>
                        ${col.links.map(link => `
                            <li><a href="${link.url}">${link.text}</a></li>
                        `).join("")}
                    </ul>
                </div>
            `).join("")}
        </div>
    </div>
    <div class="footer-bottom">
        <p>${footer.copyright}</p>
        <div class="footer-links">
            ${footer.bottomLinks.map(link => `
                <a href="${link.url}">${link.text}</a>
            `).join(" | ")}
        </div>
    </div>
`;


//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))
