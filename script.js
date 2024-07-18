const users = [
// ---   IPT Anette   ---
    { username: 'Anette', password: 'Goodani', name: "Anette Simental", isAdmin: true, isANETTE: true, },

    { username: 'dmonr', password: 'Alakay', name:"Esmeralda Monroy", balance: 500, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'vrosas', password: '7222754', name: "Verónica Rosas", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'jesan4', password: '7222742', name: "Gali Sánchez", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'pltorres', password: '7222746', name: "Paola Torres", balance: 900, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'bmayorga', password: '7222866', name: "Brenda Mayorga", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'jrosa48', password: '7222747', name: "Jonathan Rosas", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'lllope', password: '7044117', name: "Linda Lopez", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'gvargasl', password: '7223000', name: "Guillermo Vargaslugo", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'mdortiz', password: '7223345', name: "Michel Ortiz", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'nmrodr', password: '7224239', name: "Nathaly Rodriguez", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'dmelende', password: '7224232', name: "Daniela Melendez", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },
    { username: 'otelle', password: '7225585', name: "Oscar Tellez", balance: 4000, isAdmin: false, team: 'Equipo IPT Anette' },

// ---   IPT Humberto   ---
    { username: 'Humberto', password: 'HumIPT', name: "Humberto Galindo", isAdmin: true, isHUM: true, },

    { username: 'molve2', password: 'teamhum', name:"Marisol Olvera", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'suribeva', password: 'teamhum', name:"Saul Uribe", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'jgamboa', password: 'teamhum', name:"Jorge Gamboa", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'jsant200', password: 'teamhum', name:"Jannet Santiago", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'kvazq6', password: 'teamhum', name:"Karim Vazquez", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'dcaba2', password: 'teamhum', name:"Diana Caballero", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'aggonza', password: 'teamhum', name:"Ana Gonzalez", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'jcarm', password: 'teamhum', name:"Javier Carmona", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'eigar', password: 'teamhum', name:"Emmith García", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'rguerre', password: 'teamhum', name:"Romeo Guerrero", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'graya', password: 'teamhum', name:"Gerardo Raya", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },
    { username: 'vfierro', password: 'teamhum', name:"Viridiana Fierro", balance: 4000, isAdmin: false, team: 'Equipo IPT Humberto' },

// ---   IPT Diana   ---
    { username: 'Diana', password: 'DiIPT', name: "Diana Pérez", isAdmin: true, isDI: true, },

    { username: 'lnava14', password: '', name:"Liliana Nava", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'bcarri', password: '', name:"Blanca Carrillo", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'jamor9', password: '', name:"Jose Morales", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'cpjimene', password: '', name:"Claudia Jimenez", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'peespino', password: '', name:"Pedro Espinoza", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'acruzen', password: '', name:"Armando Cruz", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'dalarcon', password: '7208880', name:"Daniel Alarcon", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'cicampos', password: '7208834', name:"Carlos Campos", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'einiestr', password: '7208981', name:"Erick Iniestra", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'ajaim', password: '7208882', name:"Angel Jaime", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'isantill', password: '7208848', name:"Isaac Santillan", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },
    { username: 'aizamora', password: '7208878', name:"Ahmed Zamora", balance: 4000, isAdmin: false, team: 'Equipo IPT Diana' },

// ---   US Barbara   ---
    { username: 'Barbara', password: 'BarbaraUS', name: "Barbara", isAdmin: true, isBAR: true, },

    { username: 'pcgonzal', password: '71563432', name:"Paola Gonzalez", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },
    { username: 'csolis', password: '7224056', name:"Cesar Solis", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },
    { username: 'lsuar', password: '7222862', name:"Leonardo Suarez", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },
    { username: 'ramedina', password: '7223300', name:"Rodrigo Medina", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },
    { username: 'cruizdec', password: '7167103', name:"Ruiz Alfaro", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },
    { username: 'jafranc', password: '7167065', name:"Jose Franco", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },
    { username: 'mpguerre', password: '7167121', name:"Monica Guerrero", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },
    { username: 'losorio', password: '7167316', name:"Luis Osorio", balance: 4000, isAdmin: false, team: 'Equipo US Barbara' },

// ---   US Mariana   ---
    { username: 'Mariana', password: 'MarianaUS', name: "Mariana", isAdmin: true, isMAR: true, },

    { username: 'avele5', password: '7223414', name:"Ariadna Velez", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'eestr11', password: '7223318', name:"Edgar Estrada", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'lgalind', password: '7224208', name:"Luis Galindo", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'ncontre', password: '7223660', name:"Nemecio Contreras", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'lruizgal', password: '6564467', name:"Luis Galvan", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'cbarro', password: '7167084', name:"Christopher Barron", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'jcarri', password: '7116940', name:"Jose Carrillo", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'pordonez', password: '7167088', name:"Rigoberto Pano", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'nzamoran', password: '7167115', name:"Nayelli Zamorano", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },
    { username: 'cirigoye', password: '7167325', name:"Carlos Irigoyen", balance: 4000, isAdmin: false, team: 'Equipo US Mariana' },

// ---   US Carlos   ---
    { username: 'Carlos', password: 'CarlosUS', name: "Carlos", isAdmin: true, isCAR: true, },

    { username: 'hvaldes', password: '7224020', name:"Hector Valdes", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'kivazqu', password: '7222858', name:"Kevin Vazquez", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'ljmorale', password: '7223330', name:"Lisania Morales", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'raromer', password: '7223594', name:"Rodrigo Romero", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'darmend', password: '7167063', name:"Daniela Armendariz", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'galfaro', password: '7167104', name:"Georgina Alfaro", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'ecalixto', password: '7156137', name:"Erik Calixto", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'dferia', password: '7167072', name:"Demian Garcia", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'rapano', password: '7167319', name:"Rigoberto Pano", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },
    { username: 'egarc59', password: '6581396', name:"Emanuel Garcia", balance: 4000, isAdmin: false, team: 'Equipo US Carlos' },

// ---   SERTEC Brenda   ---
    { username: 'bsvazque', password: 'c6573111', name:"Sofia Vazquez", isAdmin: true, isBRE: true },

    { username: 'cvala', password: 'c7190536', name:"Cinthia Valdez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'eorozcom', password: 'c7090060', name:"Esdene Orozco", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'eepadill', password: 'c7066435', name:"Ernesto Padilla", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'vcorrear', password: 'c7214700', name:"Vania Correa", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'gcasasca', password: 'c7208896', name:"Gilberto Casas", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'jnsan', password: 'c7218752', name:"Jose Sanchez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'ybarrios', password: 'c7224620', name:"Yair Barrios", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'jcaaman', password: 'c7205453', name:"Joaquin Chavez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'azaratef', password: 'c7030332', name:"Antonio Zarate", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },
    { username: 'idurangu', password: 'c7228039', name:"Ivan Gutierrez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Brenda' },

// ---   SERTEC Miguel   ---
    { username: 'mteranco', password: 'c6592407', name:"Miguel Teran", isAdmin: true, isMIG: true,},

    { username: 'dsant123', password: 'c7208895', name:"David Mendez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'sagonza', password: 'c7073855', name:"Sergio Gonzalez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'gruizrin', password: 'c7205456', name:"Gabriel Ruiz", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'klopezg', password: 'c7200733', name:"Alexa Lopez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'acarb', password: 'c7214702', name:"Arturo Carbajal", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'vcoronap', password: 'c7184648', name:"Victor Oceguera", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'aycervan', password: 'c7228044', name:"Abraham Cervantes", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'essandov', password: 'c7218751', name:"Eduardo Sandoval", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'coceguer', password: 'c7184645', name:"Carlos Oceguera", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },
    { username: 'mdiazcer', password: 'c7205452', name:"Mario Cervantes", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Miguel' },

// ---   SERTEC Vania   ---
    { username: 'vigonza', password: 'c7066349', name:"Vania Gonzalez", isAdmin: true, isVAN: true, },

    { username: 'rvillega', password: 'c7127869', name:"Raul Villegas", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'csilvaap', password: 'c7200227', name:"Celic Silva", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'mnunezgo', password: 'c7224629', name:"Maria Nuñez", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'edreynos', password: 'c7224624', name:"Enia Reynoso", balance: 500, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'lghern', password: 'c7214699', name:"Leonel Garcia", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'clupiogu', password: 'c7214703', name:"Cesar Lupio", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'ialonsop', password: 'c7200228', name:"Isaac Alonso", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'sechev', password: 'c7214704', name:"Selene Echeverria", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    { username: 'jgarzagu', password: 'c7228037', name:"Javier Garza", balance: 4000, isAdmin: false, team: 'Equipo SERTEC Vania' },
    
// ---    SUPER ADMINS    ---
    { username: 'b', password: 'b', name: "Valeria Mitzeri", isAdmin: true, }, //Val aún no tiene user!!!
    { username: 'juno', password: 'alakay', name: "Esmeralda Monroy", isAdmin: true, isSuperadmin: true, },
    { username: 'ggarc18', password: '6142385', name: "Gustavo García", isAdmin: true, isSuperadminSertec: true, },
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        if (user.isAdmin && user.isANETTE) {
            showAdminScreenANETTE(user);
        } else if (user.isAdmin && user.isHUM) {
            showAdminScreenHUM(user);
        } else if (user.isAdmin && user.isDI) {
            showAdminScreenDI(user);
        } else if (user.isAdmin && user.isBAR) {
            showAdminScreenBAR(user);
        } else if (user.isAdmin && user.isMAR) {
            showAdminScreenMAR(user);
        } else if (user.isAdmin && user.isCAR) {
            showAdminScreenCAR(user);
        } else if (user.isAdmin && user.isBRE) {
            showAdminScreenBRE(user);
        } else if (user.isAdmin && user.isMIG) {
            showAdminScreenMIG(user);
        } else if (user.isAdmin && user.isVAN) {
            showAdminScreenVAN(user);
        } else if (user.isAdmin && user.isSuperadmin) {
            showAdminScreenSuperadmin(user);
        } else if (user.isAdmin && user.isSuperadminSertec) {
            showAdminScreenSuperadminSertec(user);
        } else {
            showDashboardScreen(user);
        }
    } else {
        alert('Usuario o contraseña incorrectos. Asegúrate de escribir tu ADS y PPS en minúsculas.');
    }
}

// ANETTE
function showAdminScreenANETTE(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo IPT Anette', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// HUM
function showAdminScreenHUM(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo IPT Humberto', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// DIANA
function showAdminScreenDI(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo IPT Diana', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// BARBARA
function showAdminScreenBAR(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo US Barbara', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// MARIANA
function showAdminScreenMAR(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo US Mariana', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// CARLOS
function showAdminScreenCAR(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');

    const teams = ['Equipo US Carlos', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// BRENDA
function showAdminScreenBRE(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo SERTEC Brenda', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// MIGUEL
function showAdminScreenMIG(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo SERTEC Miguel', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// VANIA
function showAdminScreenVAN(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ['Equipo SERTEC Vania', ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

// SUPERADMIN
function showAdminScreenSuperadmin(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = [ 
        "Equipo IPT Anette", 'Equipo IPT Humberto', "Equipo IPT Diana", 
        "Equipo US Barbara", "Equipo US Mariana", "Equipo US Carlos", 
        "Equipo SERTEC Brenda", "Equipo SERTEC Miguel", "Equipo SERTEC Vania", ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

//SUPERADMIN SERTEC (GUSTAVO)
function showAdminScreenSuperadminSertec(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('admin-screen').classList.add('active');
    document.getElementById('admin-name').textContent = user.name;

    const teams = ["Equipo SERTEC Brenda", "Equipo SERTEC Miguel", "Equipo SERTEC Vania", ];
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
                        </tr>
                    </thead>
                    <tbody>
                        ${teamMembers.map(member => `
                            <tr>
                                <td><h3>${member.name}</h3></td>
                                <td><h3>$${member.balance}<h3></td>
                                
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            teamsTables.appendChild(teamTable);
        }
    });
}

function showDashboardScreen(user) {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('dashboard-screen').classList.add('active');
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-balance').textContent = user.balance;
}


// <td><button class="modify" onclick="modifyUser(${users.indexOf(member)})">Modificar</button></td> // Boton para modificar saldos de usuarios
// Recuerda añadir tambien en la secccion de Usuai¿rios y saldo de las tablas un <td>Acciones</td> para añadir la 3a columna
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
