const regUsers = [
    {
        name: 'admin',
        email: '',
        username: 'admin',
        password: 'admin123',
        role: 'admin',
    },
    {
        name: 'grey',
        email: 'markgrey385@gmail.com',
        username: 'grey',
        password: '1111',
        role: 'user',
    },
    {
        name: 'wale',
        email: 'waleo1124@gmail.com',
        username: 'waleo',
        password: '1234',
        role: 'user',
    },
    {
        name: 'Faith',
        email: 'mhichelle8@gmail.com',
        username: 'michelle1',
        password: 'michelle1234$',
        role: 'user',
    },
    {
        name: 'Awofeso',
        email: 'damilare4jesus96@gmail.com',
        username: 'rodin',
        password: '692003',
        role: 'user',
    }
]

window.regUsers = regUsers;

const welcome = document.getElementById('welcome-user');

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    // If you want to force login if name is missing, uncomment below:
    // if (!name) window.location.href = '../index.html';

    if (name) {
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            // Only update internal links (not external or anchors)
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                let separator = href.includes('?') ? '&' : '?';
                if (!href.includes('name=')) {
                    link.setAttribute('href', `${href}${separator}name=${encodeURIComponent(name)}`);
                }
            }
        });
    }
});


// let users = JSON.parse(localStorage.getItem('users') || '[]');
//             if (!users.some(u => u.role === 'admin')) {
//                 users.push({
//                     name: 'admin',
//                     email: 'admin@portal.com',
//                     username: 'admin',
//                     password: 'admin123', // You can change this to a more secure password
//                     role: 'admin',
//                     approved: true
//                 });
//                 localStorage.setItem('users', JSON.stringify(users));
//             }

            // Ensure two default users exist
            // if (!users.some(u => u.username === 'faith')) {
            //     users.push({
            //         username: '',
            //         password: '0000',
            //         approved: false
            //     });
            //     localStorage.setItem('users', JSON.stringify(users));
            // }

            


















let head = document.querySelectorAll('.head');

head.forEach((item) => {
    item.addEventListener('click', () => {

        // Find the corresponding content element
           let contentElement = item.nextElementSibling;

        // Toggle the 'active' class on the content element
        if (contentElement) {
            contentElement.classList.toggle('active');
        }


         // Find the arrow icon inside the clicked header
        let arrowIcon = item.querySelector('.fa-angle-right, .fa-angle-down');
        if (arrowIcon) {
            arrowIcon.classList.toggle('fa-angle-right');
            arrowIcon.classList.toggle('fa-angle-down');
        }
        
    });
});



// Course page script

let runButton = document.querySelectorAll('.run-btn');


runButton.forEach((item) => {
    item.addEventListener('click', () => {
        // Go up to the closest .example-code parent
        let exampleCode = item.closest('.example-code');
        if (exampleCode) {
            // Find the next sibling .example-output
            let codeOutput = exampleCode.nextElementSibling;
            if (codeOutput && codeOutput.classList.contains('example-output')) {
                codeOutput.classList.add('active-output');
            }
        }
    });
})




function showForm(formId) {
    document.querySelectorAll('.form-box').forEach(form => form.classList.remove('active'));
    document.getElementById(formId).classList.add('active');
}







// Function to toggle password visibility

// function togglePasswordVisibility() {
//     const passwordInput = document.getElementById('password');
//     const toggleButton = document.querySelector('.toggle-password');

//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         toggleButton.classList.add('fa-eye-slash');
//         toggleButton.classList.remove('fa-eye');
//     } else {
//         passwordInput.type = 'password';
//         toggleButton.classList.add('fa-eye');
//         toggleButton.classList.remove('fa-eye-slash');
//     }
// }



            


// Registration form input storage
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register-form form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = registerForm.querySelector('input[name="name"]').value.toLowerCase();
            const email = registerForm.querySelector('input[name="email"]').value.toLowerCase();
            const username = registerForm.querySelector('input[name="username"]').value.toLowerCase();
            const password = registerForm.querySelector('input[name="password"]').value.toLowerCase();
            const role = registerForm.querySelector('select[name="role"]').value.toLowerCase();

            const successMsg = document.querySelector('.success-message')
            const errorMsg2 = document.querySelector('.error-message2');
            const errorMsg3 = document.querySelector('.error-message3');

            
            
            // Save user and check for duplicate email or username
            // let users = JSON.parse(localStorage.getItem('users') || '[]');
            
            for (let i = 0; i < regUsers.length; i++) {
                if (email === regUsers[i].email) {
                    errorMsg2.style.display = 'block';
                    setTimeout(() => {
                        errorMsg2.style.display = 'none';
                    }, 3000);
                    return;
                }

                if (username === regUsers[i].username) {
                    errorMsg3.style.display = 'block';
                    setTimeout(() => {
                        errorMsg3.style.display = 'none';
                    }, 3000);
                    return;
                }
            }

            // if (users.some(u => u.email === email)) {
            //     errorMsg2.style.display = 'block';
            //     setTimeout(() => {
            //         errorMsg2.style.display = 'none';
            //     }, 3000);
            //     return;
            // }
            // if (users.some(u => u.username === username)) {
            //     errorMsg3.style.display = 'block';
            //     setTimeout(() => {
            //         errorMsg3.style.display = 'none';
            //     }, 3000);
            //     return;
            // }

            // users.push({ name, email, username, password, role });
            // localStorage.setItem('users', JSON.stringify(users));


            // After successful registration
            emailjs.send("service_s05wzaj", "template_zsp0wpl", {
                to_email: email,
                to_name: name.charAt(0).toUpperCase() + name.slice(1),
                subject: "Registration Successful",
                message: "You have successfully registered for this course. The admin has to approve your registration before you can gain access to the portal. Kindly exercise patience or contact the admin."
            });

            emailjs.send("service_s05wzaj", "template_fvft3eo", {

                from_name: name.charAt(0).toUpperCase() + name.slice(1),
                from_email: email,
                username: username,
                password: password,
                role: role,
                subject: "New Registration",
            });


            // console.log('All registered users:', users);

            successMsg.style.display = 'block';
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 3000);

            showForm('login-form');
        })
    }
}
    
)
    
//     // Admin page: restrict access to admins only and show all info
//     if (window.location.pathname.endsWith('admin.html')) {
//     // Get current user from localStorage
//     const currentUserUsername = localStorage.getItem('username');
//     let users = JSON.parse(localStorage.getItem('users') || '[]');
//     const currentUser = users.find(u => u.username === currentUserUsername);

//     if (!currentUser || currentUser.role !== 'admin') {
//         alert('Access denied. Only admins can view this page.');
//         window.location.href = 'index.html';
        
//     } else {

//     // Show all users info in table
//     const tableBody = document.getElementById('users-table-body');
//     if (tableBody) {
//         tableBody.innerHTML = users.map((u, idx) => `
//             <tr>
//                 <td>${u.name}</td>
//                 <td>${u.email}</td>
//                 <td>${u.username}</td>
//                 <td>${u.password}</td>
//                 <td>${u.role}</td>
//                 <td>
//                     <span class="approved-status">${u.approved ? 'Approved' : 'Pending'}</span>
//                 </td>
//                 <td>
//                     <button onclick="approveUser('${u.username}')" class="approve">Approve</button>
//                     <button onclick="deleteUser('${u.username}')" class="delete">Delete</button>
//                 </td>
//             </tr>
//         `).join('');
//         }
//     }
// }

// Approve user function for admin (localStorage version)
function approveUser(username) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users = users.map(u => u.username === username ? { ...u, approved: true } : u);
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}

// Delete user function for admin
function deleteUser(username) {
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users = users.filter(u => u.username !== username);
        localStorage.setItem('users', JSON.stringify(users));
        location.reload();
    }
}


// Login logic: check username and password, redirect by role
function openWebsite() {
    const userInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const userName = userInput.value.toLowerCase();
    const passwordValue = passwordInput.value.toLowerCase();
    const errorMsg = document.querySelector('.error-message');


    let found = false;
    for (let i = 0; i < regUsers.length; i++) {

        const name = regUsers[i].name.toLowerCase();

        if (
            userName === regUsers[i].username &&
            passwordValue === regUsers[i].password)
        {
            found = true;
            localStorage.setItem('username', regUsers[i].username);
            const userNameParam = encodeURIComponent(regUsers[i].name);
            if (regUsers[i].role === 'user') {
                window.location.href = `welcome.html?name=${userNameParam}`;
            } else if (regUsers[i].role === 'admin') {
                window.location.href = `admin.html?role=admin`;
            }
            break;
        }
    }
    if (!found) {
        errorMsg.textContent = 'Invalid username or password.';
        errorMsg.style.display = 'block';
        setTimeout(() => {
            errorMsg.style.display = 'none';
            errorMsg.textContent = '';
        }, 3000);
    }

    


   

    // let users = JSON.parse(localStorage.getItem('users') || '[]');
    // const user = users.find(u => u.username === userName && u.password === passwordValue);

    // if (!user) {
    //     errorMsg.textContent = 'Invalid username or password.';
    //     errorMsg.style.display = 'block';
    //     setTimeout(() => {
    //         errorMsg.style.display = 'none';
    //         errorMsg.textContent = '';
    //     }, 3000);
    //     return;
    // }

    // if (!user.approved && user.role !== 'admin') {
    //     errorMsg.textContent = 'Your account is not yet approved by admin.';
    //     errorMsg.style.display = 'block';
    //     setTimeout(() => {
    //         errorMsg.style.display = 'none';
    //         errorMsg.textContent = '';
    //     }, 3000);
    //     return;
    // }

    // localStorage.setItem('username', user.username);

    // if (user.role === 'admin') {
    //     window.location.href = 'admin.html';
    // } else {
    //     window.location.href = 'welcome.html';
    // }
}















// Quiz Scripts

// 1. Your questions array (add as many as you want, in order)
const dailyQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: 2 // index of correct answer
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "Java", "C", "JavaScript"],
        answer: 3
    },
    // ...add more questions
];

// 2. Utility functions
function getTodayIndex() {
    // Use days since a fixed date to rotate questions
    const start = new Date(2025, 0, 1); // Jan 1, 2025
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    return diff % dailyQuestions.length;
}

function getNext5pm() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(17, 0, 0, 0); // 5pm today
    if (now >= next) next.setDate(next.getDate() + 1);
    return next;
}

function getNextMidnight() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(24, 0, 0, 0); // midnight
    return next;
}

// 3. Main logic
function setupDailyQuiz(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    function renderCountdown(target, label) {
        function update() {
            const now = new Date();
            const diff = target - now;
            if (diff <= 0) {
                location.reload();
                return;
            }
            const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
            const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
            const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
            container.innerHTML = `<div class="quiz-countdown">${label} <br><span>${h}:${m}:${s}</span></div>`;
        }
        update();
        return setInterval(update, 1000);
    }

    function renderQuiz(q, idx) {
        let selected = null;
        let timer = 60;
        const startTime = Date.now();
        container.innerHTML = `
            <div class="quiz-question">
                <p>${q.question}</p>
                <form id="quiz-form">
                    ${q.options.map((opt, i) => `
                        <label>
                            <input type="radio" name="option" value="${i}"> ${opt}
                        </label><br>
                    `).join('')}
                    <button type="submit">Submit</button>
                </form>
                <div id="quiz-timer">Time left: <b>60</b>s</div>
            </div>
        `;
        const timerDiv = document.getElementById('quiz-timer');
        const interval = setInterval(() => {
            timer--;
            timerDiv.innerHTML = `Time left: <b>${timer}</b>s`;
            if (timer <= 0) {
                clearInterval(interval);
                saveInput(null, idx, startTime);
                showEnded();
            }
        }, 1000);

        document.getElementById('quiz-form').onsubmit = function(e) {
            e.preventDefault();
            const val = this.option.value;
            clearInterval(interval);
            saveInput(val, idx, startTime);
            showEnded();
        };
    }

    function saveInput(selected, idx, startTime) {
        const now = Date.now();
        const entry = {
            questionIndex: idx,
            selected: selected,
            time: now,
            duration: Math.floor((now - startTime) / 1000)
        };
        // Save to localStorage (or send to server if needed)
        let all = JSON.parse(localStorage.getItem('quizAnswers') || '[]');
        // Only one entry per day/question
        all = all.filter(e => e.questionIndex !== idx);
        all.push(entry);
        localStorage.setItem('quizAnswers', JSON.stringify(all));
    }

    function showEnded() {
        container.innerHTML = `<div class="quiz-ended">Today's quiz has ended.</div>`;
        renderCountdown(getNextMidnight(), "Next quiz in");
    }

    // --- Main display logic ---
    const now = new Date();
    const idx = getTodayIndex();
    const fivePm = new Date(now);
    fivePm.setHours(17, 0, 0, 0);

    if (now < fivePm) {
        // Before 5pm: show countdown to 5pm
        renderCountdown(fivePm, "Next quiz in");
    } else if (now >= fivePm && now < getNextMidnight()) {
        // Between 5pm and midnight: show quiz if not answered or time not up
        // Check if already answered
        let all = JSON.parse(localStorage.getItem('quizAnswers') || '[]');
        const answered = all.find(e => e.questionIndex === idx);
        if (answered) {
            showEnded();
        } else {
            renderQuiz(dailyQuestions[idx], idx);
        }
    } else {
        // After midnight: show countdown to next 5pm
        renderCountdown(getNext5pm(), "Next quiz in");
    }
}

setupDailyQuiz('quiz-container');