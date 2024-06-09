const timeDatabase = {
    "2023 - Present": ["UOB Singapore","IT Developer", "Developed applications on MS Access and Excel for usage in-house using VBA."]
};

const timeElem = document.querySelectorAll(".timeline")[0]

function fillTimeline() {
    for (const time in timeDatabase) {
        if (timeDatabase.hasOwnProperty(time)) {
            const [company, jobTitle, jobDesc] = timeDatabase[time];

            // create the div
            var currSection = document.createElement("div");
            currSection.className = "timeline-item";
            currSection.innerHTML = 
            `
            <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <p class="tl-duration">${time}</p>
            <h5>${jobTitle}<span> - ${company}</span></h5>
            <p>
                ${jobDesc}
            </p>
            `;

            timeElem.append(currSection)
        }
    }
}

fillTimeline()