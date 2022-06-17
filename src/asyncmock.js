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