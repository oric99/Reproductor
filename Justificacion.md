# Reproductor
Parcial 1 front-end development

justificación:
para el desarrollo de este parcial se tomó como referencia la imagen 3 del pdf:
![fondo referencia](https://user-images.githubusercontent.com/70826513/131753219-e24f5f1e-f5d1-45d0-ab00-82825440482c.jpg)

opté por usar el flex layou sobre grid porque me pareció más cómodo de diseñar, sumado a que no he trabajado mucho el Grid layout y me gustó el manejo de cajas flex para cuadrar la distribución.

LOS SKETCHS:
para hacer los sketch empleé la herramienta clip studio. descarté los dos primeros por comodidad para realizar el diseño responsive para IPhone x.

sketch 1: 
Este primer diseño lo descarté debido a que hice un contenedor para almaacenar el "background_image" que era el que contenía el fondo y dentro de este estaba el reproductor. esto lo hacía redundante y era más complicado desaparecer el fondo para el responsive movil a parte los botones del control eran cuadrados.

sketch 2: 
Este lo descarté ya que en la distribución el "background_image" ,que es mi caja que contiene la imgen de fondo para desktop, era el contenedor de toda la pagina, y los botones de play, back y next eran png con el circulo completo, preferí rediseñar finalmente metiendo todo dentro ddde un contenedor dejando la imgen de fondo en un div independiente al reproductor para poder quitarlo solo con un "display: none" para la vista IPhone X. y los botones los cambié por png solo del simbolo para hacer el exterior circular del botón con el border radio y así poder cambiarle el color para los hovers.

sketch 3:
Finalmente así lo diseñé, un contenedor global, un fondo independiente del reproductor para facilitar el responsive movil e imagenes png para loss botónes que permiten modificar la forma y color del botón desde los estilos.
