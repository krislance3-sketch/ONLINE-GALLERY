const exhibits = [
    {
        id: "ai",
        category: "DIGITAL TECHNOLOGY",
        filter: "digital",
        title: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
        lead: "AI is becoming part of Philippine education, research, government, and business, but access, skills, data quality, and responsible use remain important concerns.",
        problem: "The Philippines needs AI that solves local problems without increasing the gap between people and organizations with different levels of digital skills, computing resources, and access. Privacy, misinformation, bias, and workforce preparation also matter.",
        evidence: "DOST reported in 2025 that its AI initiatives were supporting more than 300 state universities and colleges, SMEs, research teams, and local government units. DOST also identified infrastructure, workforce, innovation, ethics, and policy as key areas of the country's AI development.",
        response: "Philippine AI efforts can support education, public services, research, agriculture, business, and other local needs. Building local skills and research capacity is important so AI can be adapted to Philippine conditions.",
        risks: "AI systems still need reliable data, privacy protection, human oversight, cybersecurity, and people who understand how to use and evaluate AI outputs.",
        sources: [
            ["DOST-ASTI — KAIa Natin: Future-ready AI ecosystem in the Philippines", "2025", "https://asti.dost.gov.ph/news-articles/press-release-kaia-natin-dost-unveils-local-tech-to-build-a-future-ready-ai-ecosystem-in-the-philippines/"],
            ["DOST — 2025 AI Fest and National AI Strategy", "2025", "https://www.dost.gov.ph/knowledge-resources/news/86-2025-news/4124-2025-ai-fest-highlights-future-growth-prospects-for-ph.html"]
        ]
    },
    {
        id: "climate",
        category: "CLIMATE & ENVIRONMENT",
        filter: "environment",
        title: "Climate Technology",
        image: "images/climate-change.png",
        lead: "In the Philippines, climate technology is especially relevant to flooding, extreme rainfall, heat, drought, typhoons, landslides, and disaster preparedness.",
        problem: "Climate-related hazards can damage homes, roads, farms, water systems, electricity, and local economies. Communities need better information and tools before, during, and after extreme weather.",
        evidence: "PAGASA reported in 2024 that the country's average annual temperature had risen by about 0.6°C during 1991–2020 and projected continued warming and changing rainfall patterns. PAGASA's 2025 monsoon assessment also documented flooding and rain-induced landslides during periods of enhanced southwest monsoon rainfall.",
        response: "Useful technologies include localized climate data, rainfall and flood monitoring, early-warning systems, satellite observation, climate-smart agriculture, water-management tools, and resilient infrastructure. PAGASA's localized climate information can help communities plan for specific risks.",
        risks: "Technology works best when combined with drainage and flood-control projects, land-use planning, ecosystem protection, evacuation systems, funding, and local government capacity.",
        sources: [
            ["DOST-PAGASA — CMIP6-Based Climate Change Projections in the Philippines", "2024", "https://www.pagasa.dost.gov.ph/press-release/153?page=13"],
            ["DOST-PAGASA — 2025 Philippine Southwest Monsoon Technical Report", "2025", "https://pubfiles.pagasa.dost.gov.ph/pagasaweb/files/cad/CLIMATOLOGICAL%20PUBLICATIONS/Technical%20Report%20on%20the%202025%20Philippine%20Southwest%20Monsoon%20Season.pdf"]
        ]
    },
    {
        id: "biotech",
        category: "HEALTH & AGRICULTURE",
        filter: "health",
        title: "Biotechnology",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=85",
        lead: "Biotechnology can contribute to Philippine health, agriculture, food production, research, and environmental applications.",
        problem: "The Philippines faces challenges in food security, agricultural productivity, health research, and climate resilience. Biotechnology may help address some of these problems, but it requires skilled researchers, facilities, funding, biosafety, and clear public information.",
        evidence: "The 2024 National Biotechnology Week highlighted biotechnology for health, agriculture, food security, innovation, and commercialization. Philippine science agencies also supported agricultural biotechnology training and capacity building for students and researchers in 2024.",
        response: "Possible applications include diagnostic tools, improved crops, biological control, disease research, food technology, and other research-based solutions suited to local needs.",
        risks: "Biotechnology requires biosafety assessment, appropriate regulation, trained personnel, research infrastructure, transparent communication, and monitoring of environmental and social effects.",
        sources: [
            ["National Committee on Biosafety of the Philippines — National Biotechnology Week 2024", "2024", "https://ncbp.dost.gov.ph/2024-national-biotechnology-week-a-celebration-of-education-innovation-and-commercialization/"],
            ["DOST-PCAARRD — Agricultural biotechnology capacity building", "2024", "https://pcaarrd.dost.gov.ph/index.php/quick-information-dispatch-qid-articles/dost-pcaarrd-uplb-project-boosts-awareness-capacitates-ph-students-and-researchers-in-agri-biotech"]
        ]
    },
    {
        id: "energy",
        category: "CLEAN ENERGY",
        filter: "environment",
        title: "Renewable Energy",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
        lead: "The Philippines is expanding renewable energy while also dealing with electricity reliability, affordability, transmission, storage, and energy security.",
        problem: "The country needs enough reliable electricity for households, businesses, schools, and industry while increasing the share of renewable sources. New generation also needs supporting grid and storage infrastructure.",
        evidence: "In February 2026, the Department of Energy announced a 10-year Green Energy Auction plan targeting at least 25 GW of additional renewable capacity for 2027–2035. DOE said the program supports national targets of 35% renewable electricity by 2030 and 50% by 2040.",
        response: "The planned program includes technologies such as wind, floating solar, rooftop solar, solar with battery storage, biomass, geothermal, and hydropower. Expanding these technologies can diversify electricity sources while requiring stronger grid infrastructure.",
        risks: "Renewable projects still need suitable locations, environmental assessment, financing, transmission upgrades, storage or balancing resources, and effective project implementation.",
        sources: [
            ["Department of Energy — 10-Year Green Energy Auction Plan", "2026", "https://doe.gov.ph/news/press-releases/3305203--doe-advances-10-year-green-energy-auction-plan-targeting-25-gw-of-new-renewable-capacity-by-2035"],
            ["Department of Energy — Renewable Energy Projects", "2026", "https://doe.gov.ph/renewable-energy-projects"]
        ]
    },
    {
        id: "cyber",
        category: "DIGITAL SECURITY",
        filter: "digital",
        title: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
        lead: "As Filipinos use more online banking, government services, social platforms, and digital accounts, protecting personal information and systems is increasingly important.",
        problem: "Cybersecurity threats can affect government agencies, businesses, schools, financial services, and ordinary users through hacking, phishing, unauthorized access, identity fraud, and data breaches.",
        evidence: "The National Privacy Commission reported a range of personal-data breach incidents in 2024, including an alleged DOST breach affecting about 597 data subjects. In 2025, the NPC also investigated reports of an alleged data leak involving G-Xchange/GCash and advised users to watch for phishing and protect their accounts.",
        response: "Important measures include stronger authentication, secure software and systems, privacy controls, breach reporting, incident-response plans, staff training, and public awareness about phishing and suspicious requests for personal information.",
        risks: "Cybersecurity is not only a technical issue. Organizations also need clear policies, trained personnel, responsible data handling, and regular security practices from users.",
        sources: [
            ["National Privacy Commission — Statement on alleged DOST data breach", "2024", "https://privacy.gov.ph/press-statement-of-the-npc-on-alleged-dost-data-breach/"],
            ["National Privacy Commission — Statement on alleged GCash data leak", "2025", "https://privacy.gov.ph/on-reports-of-an-alleged-data-breach-involving-g-xchange-inc-gcash/"]
        ]
    },
    {
        id: "space",
        category: "SPACE & RESEARCH",
        filter: "space",
        title: "Space Science",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=85",
        lead: "For the Philippines, space science is not only about exploration; satellite data can support disaster response, agriculture, environmental monitoring, and climate information.",
        problem: "The country needs timely information during floods, typhoons, droughts, landslides, fires, and other hazards. Satellite observations can provide coverage over large or difficult-to-reach areas.",
        evidence: "PhilSA reported in 2024 that satellite and remote-sensing work produced thousands of maps for areas such as agriculture, fisheries, water resources, infrastructure, and environmental monitoring. PhilSA also reported that Diwata-2 continued operating in 2024 and provided imagery useful for environmental assessment, agriculture, and post-disaster monitoring.",
        response: "Satellite imagery, remote sensing, geospatial mapping, and international data partnerships can help agencies identify affected areas, monitor environmental changes, and support evidence-based disaster and resource planning.",
        risks: "Space programs require long-term funding, technical expertise, data-processing capacity, maintenance, research partnerships, and systems that make satellite information useful to local agencies and communities.",
        sources: [
            ["Philippine Space Agency — Philippine national statement on space applications", "2024", "https://philsa.gov.ph/news/philippine-national-statements-during-the-62nd-session-of-the-scientific-and-technical-subcommittee-stsc-of-the-united-nations-committee-on-the-peaceful-uses-of-outer-space-un-copuos/"],
            ["Philippine Space Agency — Diwata-2 continues environmental and disaster applications", "2024", "https://philsa.gov.ph/news/diwata-2-exceeds-lifespan-now-on-its-6th-year-of-operations/"]
        ]
    },
    {
        id: "ewaste",
        category: "ENVIRONMENT",
        filter: "environment",
        title: "E-Waste",
        image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1400&q=85",
        lead: "Phones, computers, batteries, chargers, and appliances become e-waste when they are discarded, creating a waste-management challenge in the Philippines.",
        problem: "Electronics contain materials that should be handled through proper collection and treatment. When e-waste is poorly managed, it can create environmental and health risks and can waste materials that could otherwise be recovered or reused.",
        evidence: "EMB-NCR collected 40.4 kilograms of e-waste during a four-day collection activity in October 2024. In 2025, EMB-CAR highlighted the need for proper e-waste collection and safe disposal through a collection campaign involving local institutions.",
        response: "Collection drives, accredited treatment and disposal facilities, recycling, repair and reuse, and public education can make it easier for households and institutions to dispose of old electronics properly.",
        risks: "Collection points need to be accessible and safe, while consumers need clear information about where electronics, batteries, and other devices can be surrendered or processed.",
        sources: [
            ["EMB-NCR — E-Waste Collection Activity", "2024", "https://ncr.emb.gov.ph/emb-ncr-conducts-4-day-e-waste-collection-activity/"],
            ["EMB-CAR — E-Waste Collection Campaign Partnership", "2025", "https://car.emb.gov.ph/regional-director-jean-c-borromeo-participates-in-the-launch-of-the-e-waste-collections-campaign-partnership/"]
        ]
    },
    {
        id: "inequality",
        category: "SOCIETY",
        filter: "society",
        title: "Digital Inequality",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
        lead: "Digital access is improving in the Philippines, but differences remain in home internet access, cost, devices, location, and digital skills.",
        problem: "Students, workers, families, and communities do not all have the same ability to use reliable internet and digital devices. This can affect education, employment, government services, communication, and participation in the digital economy.",
        evidence: "The PSA's 2024 National ICT Household Survey found that 48.8% of Philippine households had internet access at home. Access ranged from 68.7% in NCR and 61.3% in Central Luzon to 21.2% in Zamboanga Peninsula and 27.7% in BARMM. High subscription and equipment costs were major barriers.",
        response: "Useful responses include wider broadband infrastructure, affordable connectivity, public access points, device programs, digital-literacy training, and online services designed for people with different levels of connectivity and digital skills.",
        risks: "More connections do not automatically remove inequality. Service reliability, affordability, device availability, accessibility, geography, and digital skills also affect whether people can actually benefit from technology.",
        sources: [
            ["Philippine Statistics Authority — 2024 National ICT Household Survey results", "2025", "https://psa.gov.ph/content/percentage-households-internet-connection-increased-488-percent-2024-two-every-three"],
            ["Philippine Statistics Authority — 2024 NICTHS statistical tables", "2025", "https://psa.gov.ph/statistics/nicths/statistical-tables"]
        ]
    }
];

const galleryGrid = document.getElementById("galleryGrid");
const referencesList = document.getElementById("referencesList");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const modal = document.getElementById("exhibitModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalLead = document.getElementById("modalLead");
const modalProblem = document.getElementById("modalProblem");
const modalEvidence = document.getElementById("modalEvidence");
const modalResponse = document.getElementById("modalResponse");
const modalRisks = document.getElementById("modalRisks");
const modalSources = document.getElementById("modalSources");

let activeFilter = "all";

function renderGallery() {
    const query = searchInput.value.toLowerCase().trim();

    const visible = exhibits.filter(item => {
        const matchesFilter = activeFilter === "all" || item.filter === activeFilter;
        const searchable = [
            item.title, item.category, item.lead, item.problem,
            item.evidence, item.response, item.risks
        ].join(" ").toLowerCase();

        return matchesFilter && searchable.includes(query);
    });

    galleryGrid.innerHTML = visible.map((item, index) => `
        <article class="gallery-card ${index === 0 ? "large" : ""} reveal visible">
            <div class="card-image">
                <img src="${item.image}" alt="${item.title}">
                <button class="view-button" data-id="${item.id}">View Exhibit →</button>
            </div>
            <div class="card-content">
                <span class="card-category">${item.category}</span>
                <h3>${item.title}</h3>
                <p>${item.lead}</p>
            </div>
        </article>
    `).join("");

    noResults.classList.toggle("show", visible.length === 0);

    document.querySelectorAll(".view-button").forEach(button => {
        button.addEventListener("click", () => openExhibit(button.dataset.id));
    });
}

function renderReferences() {
    const allSources = [];
    const seen = new Set();

    exhibits.forEach(item => {
        item.sources.forEach(source => {
            if (!seen.has(source[2])) {
                seen.add(source[2]);
                allSources.push({
                    title: source[0],
                    year: source[1],
                    url: source[2],
                    topic: item.title
                });
            }
        });
    });

    referencesList.innerHTML = allSources.map((source, index) => `
        <div class="reference-item reveal">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <div>
                <h3>${source.title} <span class="year-tag">${source.year}</span></h3>
                <p>Used for the ${source.topic} exhibit and its Philippine-context discussion.</p>
                <a href="${source.url}" target="_blank" rel="noopener noreferrer">Open source →</a>
            </div>
        </div>
    `).join("");
}

function openExhibit(id) {
    const item = exhibits.find(exhibit => exhibit.id === id);
    if (!item) return;

    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalCategory.textContent = item.category;
    modalTitle.textContent = item.title;
    modalLead.textContent = item.lead;
    modalProblem.textContent = item.problem;
    modalEvidence.textContent = item.evidence;
    modalResponse.textContent = item.response;
    modalRisks.textContent = item.risks;

    modalSources.innerHTML = item.sources.map(source => `
        <div class="modal-source">
            <a href="${source[2]}" target="_blank" rel="noopener noreferrer">${source[0]}</a>
            <small>Published / released: ${source[1]}</small>
        </div>
    `).join("");

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeExhibit() {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        activeFilter = button.dataset.filter;
        renderGallery();
    });
});

searchInput.addEventListener("input", renderGallery);

modalClose.addEventListener("click", closeExhibit);

modal.addEventListener("click", event => {
    if (event.target === modal) closeExhibit();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeExhibit();
});

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

const navLinks = document.querySelectorAll(".navbar nav a");
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 160) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

renderGallery();
renderReferences();

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
