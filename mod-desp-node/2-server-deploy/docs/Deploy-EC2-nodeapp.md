# Desplegar una aplicación Node en EC2

En esta tarea se desplegará una aplicación de `node.js` que es esencialmente una API de `Express`. La aplicación proviene de la práctica del módulo anterior de *Arquitecturas de Desarrollo Web con Node.js*.

La aplicación:
- Una serie de métodos CRUD que actúan sobre la base de datos `sample_mflix`.
- La base de datos `sample_mflix` se aloja en un clúster **MongoDB Atlas**.


## Preparar la Instancia EC2.

Para crear una instancia de EC2, desde la consola de administración de AWS:

1. Acceder al módulo EC2.
2. Lanzar una nueva instancia. La configuración escogida es:
      - Plantilla Amazon Linux 2023.
      - Arquitectura x64 (x86).
      - Tipo de instancia t2.medium vCPU y 4 GB RAM.
      - Par de claves. Crear una nueva, descargando el archivo `ParDeClaves.pem` para la futura conexión SSH.
      - Reglas de tráfico permitidas solo para equipo de trabajo.
      - Almacenamiento básico de 8 GB.
3. Una vez creada la instancia, podremos conectarnos desde un terminal SSH.

![](static/ec2-instance-summary.png)

Para la conexión con SSH, se puede usar desde windows directamente la consola de `powershell`.

```powershell
ssh user@ipAddress -i "RutaCarpetaParDeClaves\ParDeClaves.pem"
```
donde el usuario es típicamente `ec2-user` y la direccion IP debe usarse la IPv4 pública de la instancia.

### Instalar el software necesario

Dentro de la instancia, necesitamos al menos git y node instalado.

Para git:

```bash
sudo yum install git
```

Esto nos permitira traer el repositorio de códgo donde tenemos la aplicación.

Para instalar node.js, la opcion tomada es a través de *Node Version Manager*.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
```

Con esto tendremos `nvm` listo para usar. Ahora obtenemos e instalamos la ultima LTS de node.js

```bash
nvm install --lts
```

## Preparar el Clúster MongoDB Atlas

Partimos de un cluster de MongoDB Atlas, llamado `uned-nodejs`, que se configura con la base de datos de `sample_mflix`.

Para permitir el acceso desde la instancia EC2, únicamente deberemos permitir la conexión a MongoDB Atlas autorizando la dirección IP de EC2.

Para ello, sólamente tenemos que ir a `Security` > `Network Access` y añadir una nueva dirección:

![](static/ec2-mongo-ipaccess.png)

## Desplegar la aplicación

Con todo listo, en lo que sigue usaremos la ventana de `powershell` conectada a nuestra instancia EC2 para preparar el despliegue de la aplicación.

Primero deberemos de descargar el repo del código fuente.

```bash
mkdir projects
cd projects
git clone https://github.com/miUsuario/miRepositorio.git
```

Después nos colocamos en la carpeta base de nuestra aplicación, desde allí necesitaremos instalar todas las dependencias de node

```bash
cd projects/mi-aplicacion
npm install
```

Cuando finalize el proceso, para nuestra aplicación en concreto deberemos crear un fichero .env para añadir la cadena de conexión a mongoDb junto con otros ajustes que no se suelen subir al repositorio público:

```text
MONGO_DB = mongodb+srv://<userName>:<password>@uned-nodejs.isihe.mongodb.net/?retryWrites=true&w=majority&appName=uned-nodejs
PORT = 3000
```

Tambien se especificó el puerto 3000 como por defecto.

### Configurar el puerto de conexión.

Para que sea accesible el puerto 3000 desde el exterior, es necesario configurar las reglas de entrada de la instancia EC2 para que permita las conexiones.

![](static/ec2-firewall-rules.png)

### Configurar la aplicación como servicio

Por último, hay que decirle a linux que siempre arranque la aplicación node con el sistema, de manera que sea un servicio. Para ello la crearemos como un systemd.

1. Creamos un archivo de servicio llamado `node-mflix-api`
```bash
sudo nano /etc/systemd/system/node-mflix-api.service
```

```ini
[Unit]
Description=mflix API node.js
After=network.target

[Service]
ExecStart=/home/ec2-user/.nvm/versions/node/v22.12.0/bin/node /home/ec2-user/projects/master-webdev-uned/mod-desp-node/2-server-deploy/aws-server-deploy/bin/www
WorkingDirectory= /home/ec2-user/projects/master-webdev-uned/mod-desp-node/2-server-deploy/aws-server-deploy
Restart=always
User=ec2-user
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
ExecReload=/bin/kill -s HUP $MAINPID

[Install]
WantedBy=multi-user.target

```

Posteriormente, se ejecutan los comandos necesarios para registrarlo como servicio

```bash
sudo systemctl daemon-reload
sudo systemctl enable node-mflix-api.service
sudo systemctl start node-mflix-api.service
```

Ya tenemos una aplicación funcional conectable desde el exterior. En la siguiente imagen una captura de postman haciendo una solicitud a la API desplegada en AWS.

![](static/postman-request-mflix-api.png)