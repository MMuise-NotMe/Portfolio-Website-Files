const skillDatabase = {
    "VBA (MS Access & Excel)": ["80%","Experience at Work Projects"],
    "HTML": ["60%","Experience at University and Work Projects"],
    "CSS": ["50%","Experience at University and Work Projects"],
    "javascript": ["70%","Experience at University and Work Projects"],
    "c#": ["40%","Experience at University and Personal Projects"],
    "python": ["70%","Experience at University Projects"],
    "PHP": ["10%","Experience at University Projects"],
};

const statsElem = document.getElementById("progress-bars")

function fillAboutMe() {
    for (const language in skillDatabase) {
        if (skillDatabase.hasOwnProperty(language)) {
            const [percentage, comments] = skillDatabase[language];

            // create the div
            const currSection = document.createElement("div");
            currSection.className = "progress-bar";
            currSection.innerHTML = 
            `
            <p class="prog-title">${language}</p>
            <div class="progress-con">
                <p class="prog-text">${percentage}</p>
                <div class="progress">
                    <span class="${language}" style="width:${percentage}"></span>
                </div>
            </div>
            <p class="prog-description">${comments}</p>
            `
            statsElem.append(currSection)
        }
    }
}

fillAboutMe()