export class FriendNames {
  constructor(nombre1, nombre2, nombre3) {
    this.nombre1 = nombre1;
    this.nombre2 = nombre2;
    this.nombre3 = nombre3;
  }

  toString() {
      return `FriendNames { name1: '${this.nombre1}', name2: '${this.nombre2}', name3: '${this.nombre3}' }`;
  }
}

const amigos_de_Javiera = new FriendNames('Karim', 'Uli', 'Georgina');

console.log(amigos_de_Javiera.toString()); 