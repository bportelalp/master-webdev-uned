# Tarea 1: MongoDB. Gestión de Usuarios

- Descarga el dataset https://github.com/neelabalan/mongodb-sample-dataset
- Activa la autenticación
- Crear una cuenta de administrador de base de datos
- Crea una BD denominada mflix y las colecciones; users, movies, sessions, theaters, comments.
- Importa los datos del dataset sample_mflix, en las colecciones correspondientes que acabas de crear.
- En la BD mflix crea las siguientes cuentas de usuario (que tengan solo permisos en mflix):
    - Un usuario con permiso de lectura
    - Un usuario con permisos de lectura/escritura

## Users db admin

Comandos ejecutados, luego de seguir la guía introductoria
```
use admin
show users
```

Resultado:
```
[
  {
    _id: 'admin.root',
    userId: UUID('a74b5696-5e24-4afe-b5aa-8d8f2d446a08'),
    user: 'root',
    db: 'admin',
    roles: [
      {
        role: 'userAdminAnyDatabase',
        db: 'admin'
      }
    ],
    mechanisms: [
      'SCRAM-SHA-1',
      'SCRAM-SHA-256'
    ]
  },
  {
    _id: 'admin.superDbAdmin',
    userId: UUID('925c5966-53bc-4011-b021-a7f859f58f9c'),
    user: 'superDbAdmin',
    db: 'admin',
    roles: [
      {
        role: 'dbAdminAnyDatabase',
        db: 'admin'
      },
      {
        role: 'readWriteAnyDatabase',
        db: 'admin'
      }
    ],
    mechanisms: [
      'SCRAM-SHA-1',
      'SCRAM-SHA-256'
    ]
  }
]
```

## Users db mflix

Comandos ejecutados:
```
use admin

db.createUser( { 
  user: "readUser",
  pwd:"unaContraseñaCualquiera",
  roles: [ "read" ]
})

db.createUser( { 
  user: "readWriteUser",
  pwd:"unaContraseñaCualquiera",
  roles: [ "readWrite" ]
})

show users
```

Resultado:
```
[
  {
    _id: 'mflix.readUser',
    userId: UUID('72c32420-bfe1-49b5-b659-f424f0fab2fb'),
    user: 'readUser',
    db: 'mflix',
    roles: [
      {
        role: 'read',
        db: 'mflix'
      }
    ],
    mechanisms: [
      'SCRAM-SHA-1',
      'SCRAM-SHA-256'
    ]
  },
  {
    _id: 'mflix.readWriteUser',
    userId: UUID('cdabdcf5-8b83-41c4-84b6-fececb1064c2'),
    user: 'readWriteUser',
    db: 'mflix',
    roles: [
      {
        role: 'readWrite',
        db: 'mflix'
      }
    ],
    mechanisms: [
      'SCRAM-SHA-1',
      'SCRAM-SHA-256'
    ]
  }
]
```