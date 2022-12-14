let cursor = db.personas
    .find( 
            {edad: {$gt: 50}}, // filtro
            { nombre: 1, edad: 1, _id: 0} // proyección => 1 sale | 0, no sale
        )
    .sort({edad: -1}) // Ordenamiento 1 -> ascendente, -1 -> descendente
    .skip(3)
    .limit(3)
    .noCursorTimeout() // Le motor de DB que no agote el cursor. Le quito la limitación por defecto de 10 minutos

//cursor.forEach(function(d) { print(d) })

/* ------------ USO DEL MÉTODO HASNEXT Y NEXT ------------ */

/* 
while(cursor.hasNext()) {
    prin    t(cursor.next())
} */

/* while(cursor.hasNext()) {
    print(cursor.next().nombre)
} */

/* while(cursor.hasNext()) {
    printjson(cursor.next())
} */

/* ------------ USO DEL MÉTODO TOARRAY ------------ */

let documentArray = cursor.toArray()

let document1 = documentArray[1]

// let document1 = cursor[1] # NO FUNCIONA EN VERSIONES ACTUALES
print(document1)

let document2 = documentArray[2]
    
// let document2 = cursor[2] # NO FUNCIONA EN VERSIONES ACTUALES
print(document2)

/* ----------- BATCHES (métodos: batchSize, objsLeftInBatch ) ------------ */
console.log('/* ----------- BATCHES (métodos: batchSize, objsLeftInBatch ) ------------ */')
cursor = db.autos.find({}, {marca: 1}).noCursorTimeout()

cursor.batchSize(50) // default 101 

print(cursor.count())
print(cursor.size())

while(cursor.hasNext()) {
    print(cursor.next())
    print(cursor.objsLeftInBatch())
}


