
    if (!localStorage.getItem('username')) {
    window.location.href = '../index.html'; // Change to your login page filename
}
    // document.addEventListener('DOMContentLoaded', function() {
    //     const params = new URLSearchParams(window.location.search);
    //     const name = params.get('name');
    //     // regUsers is defined in script.js
    //     if (!name || !window.regUsers || !regUsers.some(u => u.name.toLowerCase() === name.toLowerCase())) {
    //         window.location.href = '../index.html'; // Redirect to login
    //     }
    // });



    // document.addEventListener('DOMContentLoaded', function() {
    //         const params = new URLSearchParams(window.location.search);
    //         const name = params.get('name');
    //         if (name) {
    //             document.querySelectorAll('a').forEach(link => {
    //                 const href = link.getAttribute('href');
    //                 // Only update internal links (not external or anchors)
    //                 if (href && !href.startsWith('http') && !href.startsWith('#')) {
    //                     // Remove any existing ? or & parameters
    //                     let separator = href.includes('?') ? '&' : '?';
    //                     link.setAttribute('href', `${href}${separator}name=${encodeURIComponent(name)}`);
    //                 }
    //             });
    //         }
    //     });