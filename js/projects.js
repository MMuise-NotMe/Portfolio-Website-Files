const projectsDatabase = {
    "Portfolio Website": [
        "img/portfolio_1.PNG",
        ["html", "css", "js", "sass"],
        ["#"],
    ]
};

const icons = ["fa-solid fa-globe", "fa-brands fa-github", "fa-brands fa-youtube"]
// order
// name of website
// image location
// [array of languages]
// [siteURL, githubURL, youtubeURL]

const portfolioElem = document.querySelectorAll('.portfolios')[0]

function fillPortfolio() {
    for (const name in projectsDatabase) {
        const [photoLocation, languageList, urlList] = projectsDatabase[name];
        
        // create the language innerHTML
        var languageHTML = ""
        for (const index in languageList) {
            languageHTML += `<div class="language">${languageList[index]}</div>`
        }

        // create the url innerHTML
        var urlHTML = ""
        urlList.forEach(
            (url, index) => {
                if (name == "Portfolio Website") {
                    urlHTML += 
                    `
                        <a href="javascript:window.location.reload();" class="icon">
                            <i class="${icons[index]}"></i>
                        </a>
                    `;
                }
                else {
                    urlHTML += 
                    `
                        <a href="${url}" class="icon" target="_blank">
                            <i class="${icons[index]}"></i>
                        </a>
                    `;
                }
            }
        )

        // create the div
        var currSection = document.createElement("div");
        currSection.className = "portfolio-item"
        currSection.innerHTML = 
        `
            <div class="image">
                <img src="${photoLocation}" alt="${name}" />
                <div class="hover-items">
                    <h3>${name}</h3>
                    <div class="icons">
                        ${urlHTML}
                    </div>
                </div>
            </div>
            <div class="languages">
                ${languageHTML}
            </div>
        `;
        portfolioElem.append(currSection);
    };
}

fillPortfolio()
