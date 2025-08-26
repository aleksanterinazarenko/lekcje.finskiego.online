document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-list a');
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function replaceInTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = node.nodeValue.replace(/\u2002/g, '\u00A0');
    } else {
      node.childNodes.forEach(replaceInTextNodes);
    }
  }
  replaceInTextNodes(document.body);
});