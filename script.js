const users = [
//ANI
    { username: 'dmonr', password: 'Alakay', name:"Esmeralda Monroy", balance: 500, isAdmin: false, team: 'Equipo Anette' },
    { username: 'vrosas', password: '7222754', name: "Verónica Rosas", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'jesan4', password: '7222742', name: "Gali Sánchez", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'pltorres', password: '7222746', name: "Paola Torres", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'bmayorga', password: '7222866', name: "Brenda Mayorga", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'jrosa48', password: '7222747', name: "Jonathan Rosas", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'lllope', password: '7044117', name: "Linda Lopez", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'gvargasl', password: '7223000', name: "Guillermo Vargaslugo", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'mdortiz', password: '7223345', name: "Michel Ortiz", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'nmrodr', password: '7224239', name: "Nathaly Rodriguez", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'dmelende', password: '7224232', name: "Daniela Melendez", balance: 4000, isAdmin: false, team: 'Equipo Anette' },
    { username: 'otelle', password: '7225585', name: "Oscar Tellez", balance: 4000, isAdmin: false, team: 'Equipo Anette' },

// HUM
    { username: 'molve2', password: 'teamhum', name:"Marisol Olvera", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'suribeva', password: 'teamhum', name:"Saul Uribe", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'jgamboa', password: 'teamhum', name:"Jorge Gamboa", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'JSANT200', password: 'teamhum', name:"Jannet Santiago", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'KVAZQ6', password: 'teamhum', name:"Karim Vazquez", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'DCABA2', password: 'teamhum', name:"Diana Caballero", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'AGGONZA', password: 'teamhum', name:"Ana Gonzalez", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'JCARM', password: 'teamhum', name:"Javier Carmona", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'EIGAR', password: 'teamhum', name:"Emmith García", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'RGUERRE', password: 'teamhum', name:"Romeo Guerrero", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'GRAYA', password: 'teamhum', name:"Gerardo Raya", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },
    { username: 'VFIERRO', password: 'teamhum', name:"Viridiana Fierro", balance: 4000, isAdmin: false, team: 'Equipo Humberto' },

// DI
    { username: 'lnava14', password: '', name:"Liliana Nava", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'bcarri', password: '', name:"Blanca Carrillo", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'jamor9', password: '', name:"Jose Morales", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'cpjimene', password: '', name:"Claudia Jimenez", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'peespino', password: '', name:"Pedro Espinoza", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'acruzen', password: '', name:"Armando Cruz", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'dalarcon', password: '7208880', name:"Daniel Alarcon", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'cicampos', password: '7208834', name:"Carlos Campos", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'einiestr', password: '7208981', name:"Erick Iniestra", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'ajaim', password: '7208882', name:"Angel Jaime", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'isantill', password: '7208848', name:"Isaac Santillan", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    { username: 'aizamora', password: '7208878', name:"Ahmed Zamora", balance: 4000, isAdmin: false, team: 'Equipo Diana' },
    
// ADMINS
    { username: 'Anette', password: 'Goodani', name: "Anette Simental", isAdmin: true, },
    { username: 'b', password: 'b', name: "Valeria Mitzeri", isAdmin: true, },
    { username: 'c', password: 'c', name: "Humberto Galindo", isAdmin: true, },
    { username: 'd', password: 'd', name: "Diana Perez", isAdmin: true, },
    { username: 'juno', password: 'alakay', name: "Esmeralda Monroy", isAdmin: true, },
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
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-balance').textContent = user.balance;
}

function showAdminScreen(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo Anette', 'Equipo Humberto', 'Equipo Diana'];
    const teamsTables = document.getElementById('teams-tables');
    teamsTables.innerHTML = ''; // Limpiar tablas

    teams.forEach(team => {
        const teamMembers = users.filter(u => u.team === team);
        if (teamMembers.length > 0) {
            const teamTable = document.createElement('div');
            teamTable.innerHTML = `
                <h1>${team}</h1>
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
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
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


//window.onload=function(){
//    var elem = document.getElementById('app');
//    elem.style.width = 0 + "%";
//}
