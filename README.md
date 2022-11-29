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



