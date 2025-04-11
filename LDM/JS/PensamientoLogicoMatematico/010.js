class Monster {
    constructor(name) {
        this.name = name;
        this.life = 150;
        this.maxAttack = 90;
    }

    attack() {
        return Math.floor(Math.random() * this.maxAttack) + 1;
    }

    restarVida(damage) {
        this.life -= damage;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.life = 200;
        this.maxAttack = 80;
        this.potionsAmt = 4;
        this.maxPotionHealth = 70;
    }

    attack(monster) {
        let num = Math.floor(Math.random() * this.maxAttack) + 1;
        monster.restarVida(num);
        alert(`${this.name} ataca al monstruo y le hace ${num} de daño.`);
    }

    restarVida(damage) {
        this.life -= damage;
    }

    searchPotion() {
        let num = Math.floor(Math.random() * 4) + 1;
        if (num === 1) {
            this.potionsAmt++;
            alert(`🔍 Has encontrado una poción!`);
        } else {
            alert(`🔍 No has encontrado nada.`);
        }
    }

    usePotion() {
        if (this.potionsAmt > 0) {
            let num = Math.floor(Math.random() * this.maxPotionHealth) + 1;
            this.life += num;
            this.potionsAmt--;
            alert(`🧪 Has usado una poción y recuperado ${num} de vida.`);
        } else {
            alert(`🧪 No tienes pociones!`);
        }
    }

    getStatus() {
        return `❤️ Vida: ${this.life} | 🧪 Pociones: ${this.potionsAmt}`;
    }
}

let nombrePlayer = prompt("¿Cuál es tu nombre?");
let player = new Player(nombrePlayer);
let monster = new Monster("Monstruo Maligno");

alert(`Hola ${player.name}! Te enfrentas a ${monster.name} 👾`);

let jugando = true;

while (jugando && player.life > 0 && monster.life > 0) {
    let status = `📊 Estado:\n${player.name} - ${player.getStatus()}\n${monster.name} - 💜 Vida: ${monster.life}`;
    let accion = prompt(`${status}\n\n¿Qué quieres hacer?\n1. Atacar monstruo - ⚔️\n2. Tomar poción - 🧪\n3. Buscar poción - 🔍\n4. Salir - 🚪`);

    switch (accion) {
        case "1":
            player.attack(monster);
            break;
        case "2":
            player.usePotion();
            break;
        case "3":
            player.searchPotion();
            break;
        case "4":
            alert("🚪 Has salido del juego.");
            jugando = false;
            continue; // saltamos el ataque del monstruo
        default:
            alert("❌ Opción no válida.");
            continue; // no atacamos si la opción fue inválida
    }

    // El monstruo ataca si sigue con vida
    if (monster.life > 0) {
        let damage = monster.attack();
        player.restarVida(damage);
        alert(`👾 El monstruo te ataca y te hace ${damage} de daño.`);
    }
}

// Mensaje final
if (player.life <= 0) {
    alert(`💀 Has sido derrotado por el ${monster.name}.`);
} else if (monster.life <= 0) {
    alert(`🏆 ¡Has derrotado al ${monster.name}, ${player.name}!`);
} else {
    alert(`🎮 Juego finalizado por el jugador.`);
}
