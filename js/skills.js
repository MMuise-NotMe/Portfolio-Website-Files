const skillDatabase = {
    "VBA (MS Access & Excel)": ["80%", "Experience at Work Projects"],
    HTML: ["60%", "Experience at University and Work Projects"],
    CSS: ["50%", "Experience at University and Work Projects"],
    javascript: ["70%", "Experience at University and Work Projects"],
    "c#": ["40%", "Experience at University and Personal Projects"],
    python: ["70%", "Experience at University Projects"],
    PHP: ["10%", "Experience at University Projects"],
};

const languageDatabase = {
    VBA: [true, "fa-brands fa-windows"],
    HTML: [true, "fa-brands fa-html5"],
    CSS: [true, "fa-brands fa-css3-alt"],
    JS: [true, "fa-brands fa-js"],
    "C#": [true, "fa-brands fa-unity"],
    Python: [true, "fa-brands fa-python"],
    Java: [true, "fa-brands fa-java"],
    SQL: [true, "fa-solid fa-database"],
    React: [true, "fa-brands fa-react"]
};

const statsElem = document.getElementById("progress-bars");
const langElem = document.getElementById("language-boxes");

function fillAboutMe() {
    // for (const language in skillDatabase) {
    //     if (skillDatabase.hasOwnProperty(language)) {
    //         const [percentage, comments] = skillDatabase[language];

    //         // create the div
    //         const currSection = document.createElement("div");
    //         currSection.className = "progress-bar";
    //         currSection.innerHTML = `
    //         <p class="prog-title">${language}</p>
    //         <div class="progress-con">
    //             <p class="prog-text">${percentage}</p>
    //             <div class="progress">
    //                 <span class="${language}" style="width:${percentage}"></span>
    //             </div>
    //         </div>
    //         <p class="prog-description">${comments}</p>
    //         `;
    //         statsElem.append(currSection);
    //     }
    // }

    for (const language in languageDatabase) {
        const [hasLogo, data] = languageDatabase[language];
        console.log(hasLogo);
        // create the div
        const currSection = document.createElement("div");
        currSection.className = "language-box";
        if ((hasLogo == true)) {
            currSection.innerHTML = `
            <div class="language-icon"><i class="${data}"></i></div>
            <div class="language-text"><p>${language}</p></div>
            `;
        }
        langElem.append(currSection);
    }
}

fillAboutMe();
