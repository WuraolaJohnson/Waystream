
const sourceUrl = 'home.html';



document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const initialNavbarTop = navbar.offsetTop;

    function handleScroll() {
        if (window.scrollY > initialNavbarTop) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});



const allLinks = document.querySelectorAll('.link_container');


allLinks.forEach(originalElement => {

    if (originalElement.dataset.hasDuplicate === 'true') {
        return;
    }


    const duplicate = originalElement.querySelector('.duplicate');


    const contentToClone = originalElement.querySelector('.link');


    if (contentToClone && duplicate) {
        const clonedContent = contentToClone.cloneNode(true);

        duplicate.appendChild(clonedContent);

        originalElement.dataset.hasDuplicate = 'true';
    }
});




//Fetching Gallary
const targetGallaryElementId = 'fetched_gallary';

fetch(sourceUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const gallary = doc.getElementById('gallary');

        const targetElement = document.getElementById(targetGallaryElementId);

        if (gallary && targetElement) {
            targetElement.appendChild(gallary);
            console.log("Gallary successfully copied!");
        } else {
            console.error("Could not find the gallary.");
        }
    })
    .catch(error => {
        console.error("Error fetching the page:", error);
    });



// Fetching FAQ Section

const targetFaqElementId = 'fetched_faq_section';

fetch(sourceUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const FAQ = doc.getElementById('faq_section');

        const targetElement = document.getElementById(targetFaqElementId);

        if (FAQ && targetElement) {
            targetElement.appendChild(FAQ);
            console.log("FAQ successfully copied!");
        } else {
            console.error("Could not find the FAQ.");
        }
    })
    .catch(error => {
        console.error("Error fetching the page:", error);
    });



// Fetching Download Buttons

const targetDownloadBtnElementId = 'fetched_btns';

fetch(sourceUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const DownloadBtn = doc.getElementById('download_btns');

        const targetElement = document.getElementById(targetDownloadBtnElementId);

        if (DownloadBtn && targetElement) {
            targetElement.appendChild(DownloadBtn);
            console.log("Download Bouttons successfully copied!");
        } else {
            console.error("Could not find the download buttons.");
        }
    })
    .catch(error => {
        console.error("Error fetching the page:", error);
    });




// Fetching Footer
const targetFooterElementId = 'fetched_footer';

fetch(sourceUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const footer = doc.getElementById('footer');

        const targetElement = document.getElementById(targetFooterElementId);

        if (footer && targetElement) {
            targetElement.appendChild(footer);
            console.log("Footer successfully copied!");
        } else {
            console.error("Could not find the footer.");
        }
    })
    .catch(error => {
        console.error("Error fetching the page:", error);
    });

//

const video = document.getElementById('bg_video');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon'); // Select the image element

muteButton.addEventListener('click', () => {
  // Toggle the muted property
  video.muted = !video.muted;

  // Change the image and alt text based on the new muted state
  if (video.muted) {
    muteIcon.src = 'assets/images/mute-icon.png';
    muteIcon.alt = 'Mute';
    
  } else {
    muteIcon.src = "assets/images/unmute-icon.png";
    muteIcon.alt = 'Unmute';
  }
});

