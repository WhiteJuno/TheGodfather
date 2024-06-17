const users = [
    { username: 'Anette', password: 'Goodani', balance: 1000, isAdmin: true, team: 'Admin' },
    { username: 'Esme', password: 'Alakay', balance: 500, isAdmin: false, team: 'Equipo Anette' },
    { username: 'Guillermo', password: 'lmao', balance: 300, isAdmin: false, team: 'Equipo Anette' },
    { username: 'Hum', password: 'Hum1', balance: 700, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'humberto_user2', password: 'humberto_pass2', balance: 400, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'Di', password: 'Di1', balance: 800, isAdmin: false, team: 'Equipo Diana' },
    { username: 'diana_user2', password: 'diana_pass2', balance: 200, isAdmin: false, team: 'Equipo Diana' },
    // Añade más usuarios según sea necesario
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user.isAdmin) {
            showAdminScreen(user);
        } else {
            showDashboardScreen(user);
        }
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function showDashboardScreen(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('dashboard-screen').classList.add('active');
    document.getElementById('user-name').textContent = user.username;
    document.getElementById('user-balance').textContent = user.balance;
}

function showAdminScreen(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.username;

    const teams = ['Equipo Anette', 'Equipo Humberto', 'Equipo Diana'];
    const teamsTables = document.getElementById('teams-tables');
    teamsTables.innerHTML = ''; // Limpiar tablas

    teams.forEach(team => {
        const teamMembers = users.filter(u => u.team === team);
        if (teamMembers.length > 0) {
            const teamTable = document.createElement('div');
            teamTable.innerHTML = `
                <h3>${team}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Saldo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td>${member.username}</td>
                                <td>${member.balance}</td>
                                <td><button class="modify" onclick="modifyUser(${users.indexOf(member)})">Modificar</button></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

function modifyUser(index) {
    const newBalance = prompt('Nuevo saldo para ' + users[index].username + ':');
    if (newBalance !== null) {
        users[index].balance = parseFloat(newBalance);
        showAdminScreen(users.find(u => u.isAdmin));
    }
}

function logout() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById('login-screen').classList.add('active');
}

document.getElementById('login-screen').classList.add('active');
