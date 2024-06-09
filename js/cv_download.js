const cvDownloadBtn = document.querySelectorAll(".main-btn")

function addDownload() {
    for (const element in  cvDownloadBtn) {
        element.href = "documents/Kum King Wye Resume.pdf"
    }
}

addDownload()