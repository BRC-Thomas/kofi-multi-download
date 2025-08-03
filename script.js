// Get all links from download page
const links = [...document.querySelectorAll('a[href*="/api/file-upload/"]')];

// For each link, create an temporary <a> & set the link
links.forEach((link, i) => {
  const a = document.createElement('a');
  a.href = link.href;
  a.download = '';
  document.body.appendChild(a);
  
  // Add timeout
  setTimeout(() => {
    a.click(); // start download
    a.remove(); // remove the temporary <a>
  }, i * 500); // 500ms delay
});
