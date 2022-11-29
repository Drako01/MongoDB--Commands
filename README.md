# MongoDB - Comandos Basicos


## Mongo Server (MSI)

<https://www.mongodb.com/es>

## Mongo Shell (MSI)

<https://www.mongodb.com/try/download/shell>

## Mongo Database Tools (MSI)

<https://www.mongodb.com/try/download/database-tools>

### Pasos instalación

![paso-01](./_ref/paso.01.png)

![paso-02](./_ref/paso.02.png)

![paso-03](./_ref/paso.03.png)

![paso-04](./_ref/paso.04.jpg)

![paso-05](./_ref/paso.05.jpg)

![paso-06](./_ref/paso.06.jpg)

![paso-07](./_ref/paso.07.png)

### Instalación MONGO Shell

Siguiente, siguiente...

### Instalación MONGO Tools

Siguiente, siguiente...

### Instalación conEmu

<https://conemu.github.io/>

![consola-emu](./_ref/consolaEmu.png)

![arqui-pc](./_ref/arquitecturaPc.png)



## Verificar que mi ambiente este OK

### MongoD (Servidor)


```sh
mongod --version # verifico que mi servidor instalado y configurado
```

**Nota:** si el comando no es encontrador. Colocar la carpeta de los binarios en las variables de entorno del sistema operativo. Colocar en el path.

```sh
C:\Program Files\MongoDB\Server\6.0\bin
```

### Mongo Shell (Cliente)

```sh
mongosh --version # verifico que tenga instalado y configurado
```

### MONGO DB Tools

```sh
mongodump --version # verifico que tenga instalado y configurado
```

**Nota:** si el comando no es encontrador. Colocar la carpeta de los binarios en las variables de entorno del sistema operativo. Colocar en el path.

```sh
C:\Program Files\MongoDB\Tools\100\bin
```

---

## Levantar el servidor

<https://www.mongodb.com/docs/manual/reference/program/mongod/>

```sh
mongod
```

**IMPORTANTE:** Si no queda tomada la consola. Tengo que crear los siguientes (directorios/carpetas). C:\data\db (O sea crear data dentro del disco C: y dentro de data la carpeta db)

> Levantar MongoD en una carpeta personalizada

```sh
mongod --dbpath="D:\mis_bases_de_datos\nombre"
```


## Cliente para conectar al servidor
Acuerdense que tiene que estar levantado el servidor **mongod**
```sh
mongosh
```

> Si no lo tengo levantado el error:

```sh
Current Mongosh Log ID: 637ead1554cbe0578d0d7099
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4
Using MongoDB:          6.0.2
Using Mongosh:          1.5.4
```


## Drivers para las diferentes tecnologías

<https://www.mongodb.com/docs/drivers/>

## SQL vs NoSQL

![sql-nosql](./_ref/SQL-vs-NOSQL.png)

## Collections and Documents

![collections](./_ref/collections.svg)


# Interactuando con la DB

## Listar DB

```sh
show dbs
```

## Crea DB o cambia a la DB

```sh
use <nombre-de-la-base-de-datos>
use db-mongo
```

**Nota**: Tener en cuenta que la base de datos se crea en memoria hasta que no se crea alguna colección.

## Crear una colección
Nota: Tengo que estar posicionado dentro de la DB. A la cual le quiero agregar una colección

```sh
# Creo una colección en forma implicita
db.createCollection('<nombre-de-colección>')
db.createCollection('productos')
```

## insertOne(): Me inserta un documento.

```sh
# Creo una colección en forma explicita
db.<nombre-colección>.insertOne({})
db.productos.insertOne({nombre: 'TV', precio: 1234})
```

## insertMany(): Me inserta varios documentos

```sh
db.clientes.insertMany([{},{},{}]) # Tengo que colocar los documentos dentro de un ARRAY
db.productos.insertMany(
    [
        {nombre: "Heladera", precio: 231},
        {nombre: "Microondas", precio: 2331},
        {nombre: "Monitor", precio: 3233},
        {nombre: "Notebook", precio: 2311},
        {nombre: "Zapatilla", precio: 441},
    ]
)
```

# OBJECTID
Cada vez que inserto un documento, se crea automaticamente el ObjectID. Este filed es único. No se repite.

<https://www.mongodb.com/docs/manual/reference/method/ObjectId/>

> Conversor de ObjectID a Timestamp
<https://nddapp.com/object-id-to-timestamp-converter.html>


## find(): Listo todos los documentos de una colección o con un objeto filtro a traves de un patrón.

```sh
db.clientes.find() # Me lista todos los documentos dentro de la colección clientes
db.clientes.find({})
```

## find(): Con filtro

```sh
db.productos.find({ nombre: 'Cocina' })
```

## find(): Filtro con una regular expresion

```sh
db.productos.find({ nombre: /cocina/i }) # Utilizo una regex para buscar tanto en mayuscula como en minuscula cocina
```

> Otra forma de hacer filtros con regex

<https://www.mongodb.com/docs/manual/reference/operator/query/regex/>

```sh
db.productos.find(
    {
        nombre: {
            $regex: 'cocina',
            $opciones: 'i'
        }
    }
)
```



# REGEXP o REGEX (Expresiones regulares | regular expression)

<https://regexr.com/>
<https://regex101.com/>

---




# Repasamos:

## Levantar el servidor local

```sh
mongod
```

> Otra manera de levantar el servidor local

```sh
mongod --dbpath="D:\_courses\62313.mongo.db.fundamentos\clase.01\db-62313"
```

## Conectar al servidor local.
Se conecta por defecto a esta URI: <mongodb://127.0.0.1:27017/>

```sh
mongosh
``` 

## Mostrar DBs

```sh
show dbs
```

## Listar collections dentro de DB

```sh
show collections
```

## Para saber en que collections estoy parado.

```sh
db
```

## find(): Me permite busqueadas a partir filtros

```sh
db.usuarios.find({nombre: /o$/}) # Todos los que terminan con o
```

```sh
db.usuarios.find({nombre: /^A/}) # Todos los que empiezan con A
```

> Ejemplo de uso con $regex

```sh
const search = 'A'
```

```sh
db.usuarios.find(
    {
        nombre: {
            $regex: `^${search}`,
            $options: 'i' # No es obligatorio pero le puedo pasar optiones (Flags)
        }
    }
)
```

# Logical Query Operators

<https://www.mongodb.com/docs/manual/reference/operator/query/and/>

## $and (Operador Y lógico)

```sh
db.usuarios.find(
    {
        $and: [
            {nombre: 'Adrian'},
            {edad: 23}
        ]
    }
) # Si los patrones de búsqueda se cumplen va a mostrar los documentos que cumplen con ambas
```

## $or (Operador O lógico)

```sh
db.usuarios.find(
    {
        $or: [
            {nombre: 'Adrian'},
            {edad: 27}
        ]
    }
) # Busca uno u otro de los patrones. No necesariamente se tienen que cumplir ambos patrones
```

# Comparison Query Operators

## $gt: Más grande que...

<https://www.mongodb.com/docs/manual/reference/operator/query/gt/>

```sh
db.usuarios.find(
    {
        edad: { $gt: 29 }
    }
) # Busca en el field edad los mayores a 29
```

## $gte: Más grande o igual que...

```sh
db.usuarios.find(
    {
        edad: { $gt: 29 }
    }
) # Busca en el field edad los mayores e iguales a 29
```  

## lt: Menor a...

```sh
db.usuarios.find(
    {
        edad: { $lt: 29 }
    }
) # Busca en el field edad los menores a 29
```

## lte: Menor o igual a...

```sh
db.usuarios.find(
    {
        edad: { $lte: 29 }
    }
) # Busca en el field edad los menores o iguales a 29
```

## $ne: Distinto del patrón que búsque

```sh
db.usuarios.find( 
    { 
        nombre: {
            $ne: 'Gabriel' 
        } 
    }
)
```

## $in: Todos los valores que le indique dentro de un array...

```sh
db.usuarios.find( 
    { 
        edad: {
            $in: [24, 27, 26]
        } 
    }
)
```

## $nin: Todos los valores contrarios a lo que le indique dentro de un array...

```sh
db.usuarios.find( 
    { 
        edad: {
            $nin: [24, 27, 26]
        } 
    }
)
```

## sort(): Ordenamiento

```sh
db.usuarios.find({}).sort(
    {
        nombre: -1 # Todos los documentos ordenados de la z-a
    }
)
```

```sh
db.usuarios.find({}).sort(
    {
        nombre: 1 # Todos los documentos ordenados de la a-z
    }
)
```

> Caso de uso: Todos los documentos mayores a 26 ordenados de menor a mayor

```sh
db.usuarios.find(
    {
        edad: {
            $gte: 26
        }
    }
).sort(
        {
            edad: 1
        }
    )
```

## limit(): Me permite limitar la cantida de documentos filtrados.

```sh
db.usuarios.find({}).limit(3)
```

## skip(): Me permite descartar una cantidad de documento elegida.

```sh
db.usuarios.find({}).skip(3)
```

> Caso de uso: Hacer un paginado

```sh
db.usuarios.find({}).limit(5).skip(0)
```

# size(): Me cuenta la cantida dd edocumentos que me devuelve el find

```sh
db.usuarios.find().size()
```

# countDocuments(): Cantidad de documentos que tengo dentro de una colección

```sh
db.usuarios.countDocuments()
```

## find({}, {}): Es que admite un segundo objeto

Nota: Por defecto siempre muestra el ObjectID 

```sh
db.usuarios.find({}, {edad: 1}) # Me muestra solo la edad con el ObjID. 
db.usuarios.find({}, {nombre: 1, _id: 0}) # Solo muestra nombre
db.usuarios.find({}, {edad: 0, _id: 0}) # Solo muestra nombre
```
