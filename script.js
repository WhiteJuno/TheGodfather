// Definir la lista de usuarios
const defaultUsers = [
    { username: 'Are', password: 'pass1', balance: 1000, isAdmin: false },
    { username: 'Pam', password: 'pass2', balance: 1500, isAdmin: false },
    { username: 'Nath', password: 'pass3', balance: 2000, isAdmin: false },
    { username: 'Lin', password: 'pass4', balance: 2500, isAdmin: false },
    { username: 'Osc', password: 'pass5', balance: 3000, isAdmin: false },
    { username: 'Memo', password: 'pass6', balance: 3500, isAdmin: false },
    { username: 'Gali', password: 'pass7', balance: 4000, isAdmin: false },
    { username: 'Dani', password: 'pass8', balance: 4500, isAdmin: false },
    { username: 'Esme', password: 'pass9', balance: 5000, isAdmin: false },
    { username: 'Vero', password: 'pass10', balance: 5500, isAdmin: false },
    { username: 'Armando', password: 'pass11', balance: 6000, isAdmin: false },
    { username: 'Mich', password: 'pass12', balance: 6500, isAdmin: false },
    { username: 'Jon', password: 'pass13', balance: 7000, isAdmin: false },
    { username: 'Pao', password: 'pass14', balance: 7500, isAdmin: false },
    { username: 'TL_Ann', password: 'GoodAni', balance: 9000, isAdmin: true },
    { username: 'SuperAdmin', password: 'Esme', balance: 10000, isAdmin: true },
    { username: 'Val', password: 'ValIPT', balance: 11000, isAdmin: true },
];

// Cargar los usuarios desde localStorage o usar los usuarios por defecto
let users = JSON.parse(localStorage.getItem('users')) || defaultUsers;

let currentUser = null;

function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    currentUser = users.find(u => u.username === username && u.password === password);

    if (currentUser) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('user-info').innerHTML = `<h3>Bienvenido, ${username}</h3><p>Saldo actual: $${currentUser.balance}</p>`;

        if (currentUser.isAdmin) {
            document.getElementById('admin-controls').style.display = 'block';
            loadUserList();
        } else {
            document.getElementById('admin-controls').style.display = 'none';
        }
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function logout() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    currentUser = null;
}

function loadUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `<p>${user.username} - Saldo: $${user.balance}</p>`;
        userDiv.innerHTML += `<button onclick="openModal('${user.username}')">Modificar Saldo</button>`;
        userList.appendChild(userDiv);
    });
}

function openModal(username) {
    const user = users.find(u => u.username === username);
    if (user) {
        document.getElementById('modal-username').innerText = `Modificar saldo de ${username}`;
        document.getElementById('new-balance').value = user.balance;
        document.getElementById('modifyBalanceModal').style.display = 'flex';
        document.querySelector('.container').classList.add('blur');
        document.getElementById('new-balance').dataset.username = username;
    }
}

function closeModal() {
    document.getElementById('modifyBalanceModal').style.display = 'none';
    document.querySelector('.container').classList.remove('blur');
}

function updateBalance() {
    const username = document.getElementById('new-balance').dataset.username;
    const newBalance = document.getElementById('new-balance').value;

    if (newBalance !== null && !isNaN(newBalance) && newBalance.trim() !== '') {
        const user = users.find(u => u.username === username);
        if (user) {
            user.balance = parseFloat(newBalance);
            saveUsersToLocalStorage();
            loadUserList();
            closeModal();
        }
    } else {
        alert('Por favor, ingrese un saldo válido.');
    }
}
