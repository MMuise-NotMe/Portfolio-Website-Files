const cvDownloadBtn = document.querySelectorAll(".main-btn");

function addDownload() {
    for (const element of cvDownloadBtn) {
        element.addEventListener("click", function() {
            element.href = "documents/Kum King Wye Resume.pdf";
            element.target = "_blank";
        })
    }
}

addDownload();
