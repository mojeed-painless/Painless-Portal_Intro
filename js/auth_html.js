    if (!localStorage.getItem('username')) {
    window.location.href = '../../index.html'; // Change to your login page filename
}

// document.addEventListener('DOMContentLoaded', function() {
//     const params = new URLSearchParams(window.location.search);
//     const name = params.get('name');
//     // regUsers is defined in script.js
//     if (!name || !window.regUsers || !regUsers.some(u => u.name.toLowerCase() === name.toLowerCase())) {
//         window.location.href = '../../index.html'; // Redirect to login
//         return;
//     }

//     // Append name param to all internal links
//     document.querySelectorAll('a').forEach(link => {
//         const href = link.getAttribute('href');
//         // Only update internal links (not external or anchors)
//         if (href && !href.startsWith('http') && !href.startsWith('#')) {
//             // Create a temporary anchor to resolve the full path
//             const a = document.createElement('a');
//             a.href = href;
//             // Only add if not already present
//             if (!a.search.includes('name=')) {
//                 let sep = a.search ? '&' : '?';
//                 a.search += `${sep}name=${encodeURIComponent(name)}`;
//                 // Set the updated href (relative to current page)
//                 link.setAttribute('href', a.pathname + a.search + a.hash);
//             }
//         }
//     });
// });




