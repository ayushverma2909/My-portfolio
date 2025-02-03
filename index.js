var typed = new Typed('#element', {
  strings: ['Web Developer.', 'Junior Developer.'],
  typeSpeed: 50,
});

function openNav() {
  document.getElementById("mySidebar").classList.add('open');
  document.body.style.marginLeft = "250px";
  document.body.style.overflow = "hidden";
  // Show overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
  overlay.onclick = closeNav;
}

// Function to close the sidebar
function closeNav() {
  document.getElementById("mySidebar").classList.remove('open');
  document.body.style.marginLeft = "0";
  document.body.style.overflow = "auto";
  // Remove overlay
  const overlay = document.querySelector('.overlay');
  if (overlay) overlay.remove();
}

// to visit github profile
function gogithub() {
    window.location.href = 'https://github.com/ayushverma2909';
  }


// JavaScript to trigger the download of resume
document.getElementById('resumebtn').addEventListener('click', function() {
  // Create an invisible link
  const link = document.createElement('a');
  link.href = 'Ayushverma.pdf';  // Update this path to where your resume is stored
  link.download = 'Ayush_verma_resume.pdf';  // This is the name that will appear when the file is downloaded

  // Append the link to the body (it must be part of the DOM for the download to work)
  document.body.appendChild(link);

  // Trigger the click event on the link to start the download
  link.click();

  // Remove the link from the DOM after the download is triggered
  document.body.removeChild(link);
});

