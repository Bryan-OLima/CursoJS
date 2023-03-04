let tenis = {
    tipo: 'Tenis de Corrida',
    cadarco: 'G',
    estoque: false,
    tamanho:  {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 35,
            altura: 40,
            profundidade: 10,
        },
    },

    marcasObj: [
        {
            nome: 'Nike'
        },
        {
            nome: 'Adidas'
        },
        {
            nome: 'etc'
        }
    ],

    marcasArray: [
        'Nike',
        'Adidas', 
        'etc'
    ],

    getMarcaObj: function(param) {
        return this.marcasObj[param].nome;
    },

    getMarcaArray: function(param) {
        return this.marcasArray[param];
    }
}

console.log(tenis);
console.log(tenis.tipo);
console.log(tenis.tamanho);
console.log(tenis.getMarcaObj(1));