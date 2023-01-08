db.usuarios.insertMany(
    [
        {
            nombre: 'Alejandro',
            edad: 24
        },
        {
            nombre: 'Adrian',
            edad: 23
        },
        {
            nombre: 'Araceli',
            edad: 26
        },
        {
            nombre: 'Andrea',
            edad: 29
        },
        {
            nombre: 'Daniel',
            edad: 22
        },
        {
            nombre: 'Dardo',
            edad: 27
        },
        {
            nombre: 'Ezequiel',
            edad: 28
        },
        {
            nombre: 'Gabriel',
            edad: 29
        },
        {
            nombre: 'Joaquin',
            edad: 32
        },
        {
            nombre: 'Jorge',
            edad: 34
        },
    ]
)


/* ----------------------------------------- */

db.usuarios.find(
    {
        $and: [
            { nombre: 'Adrian' },
            { edad: 20 }
        ]
    }
)


db.usuarios.find(
    {
        $or: [
            { nombre: 'Adrian' },
            { edad: 27 }
        ]
    }
)

db.usuarios.find(
    {
        edad: { $gt: 29 }
    }
)

db.usuarios.find(
    {
        edad: { $gte: 29 }
    }
)

db.usuarios.find(
    {
        edad: { $lt: 29 }
    }
)