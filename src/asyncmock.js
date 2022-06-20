const products = [
    {
        id: '0010',
        name: 'Proplan Cachorro Complete',
        price: 1130,
        weight: '3Kg',
        category: 'perros',
        img: '/images/pro-plan-cachorro.jpg',
        stock: 30,
        description: 'Formulado con carne fresca de pollo como ingrediente principal, además de vitaminas y minerales esenciales, PRO PLAN Puppy Razas Medianas ofrece una óptima nutrición para cachorros en crecimiento.'
    },
    {
        id: '0034',
        name: 'Proplan Gato Adulto',
        price: 1360,
        weight: '3Kg',
        category: 'gatos',
        img: '/images/pro-plan-gato-adulto.jpg',
        stock: 11,
        description: 'Purina Pro Plan Adult Cat con Optiprebio es un alimento completo y balanceado para gatos adultos de todas las razas. Es una tecnología exclusiva, con una combinación de prebióticos y antioxidantes naturales, que ayudan a optimizar la digestión y a mantener fuertes las defensas naturales de tu gato, protegiendo su sistema inmunológico contra las amenazas externas.'
    },
    {
        id: '0010',
        name: 'Alimento para Peces Biomaa Super Flakes',
        price: 320,
        weight: '150g',
        category: 'peces',
        img: '/images/alimento-peces.jpg',
        stock: 5,
        description: 'Alimento balanceado en hojuelas o copos. Diseñado para ajustarse a las necesidades nutricionales de la mayoría de los peces tropicales de acuario'
    },
    {
        id: '0240',
        name: 'Esfera de ejercicio para hasmter',
        price: 890,
        weight: '800g',
        category: 'otros',
        img: '/images/esfera-hamster.jpg',
        stock: 3,
        description: 'Los hámsters son animales curiosos y les encanta explorar todos los rincones. Sin embargo, es muy peligroso tenerlo suelto por casa. Para que tu mascota pueda pasear por casa con la tranquilidad de no sufrir ningún tipo de peligro, Te recomendamos esta bola para hámster'
    },
    {
        id: '0050',
        name: 'Bolsas Biodegradables para popo de perro',
        price: 320,
        weight: '',
        category: 'perros',
        img: '/images/bolsitas-biodegradables.png',
        stock: 3,
        description: '120 Bolsas Biodegradables con tamaño más grande que las habituales, perfectas para todas las razas. Gruesas, resistentes y con un diseño muy llamativo. Olor a naranja o natural, el agradable aroma disfraza el olor casi al 100%. En menos de 24 meses la bolsa se desintegra en agua y bióxido de carbono'
    }
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}