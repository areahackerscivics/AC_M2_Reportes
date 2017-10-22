# WEB VISUALIZACIÓN DE TEMÁTICAS DE TWITTER


## Descripción

Este repositorio contiene una web para la visualización de la información obtenida con el proyecto [**Análisis de contenido de comunicación ciudadana**](https://github.com/areahackerscivics/Analisis_de_contenido_de_comunicacion_ciudadana_Tweets).



## Guía de uso

##### Lenguaje de programación
Este proyecto fue desarrollado usando _html_, _css_ y _jQuery_

##### Dependencias

* [jQuery v1.12.4](https://jquery.com/)
* [d3 v3.5.15](https://d3js.org/)
* [d3plus v1.9.8](http://d3plus.org/)
* [c3js v0.4.15](http://c3js.org/)

**Nota**: El proyecto fue desarrollado usando las librerías que se mencionaron anteriormente, por lo que se recomienda para un adecuado funcionamiento se usen  las versiones establecidas.


##### Funcionamiento del proyecto

Dentro de la capeta _js_ encontrarán los ficheros _distribucion.js_ y _evolucion.js_ . Estos ficheros se encargan de
realizar las peticiones al servicio <a href="https://github.com/areahackerscivics/ReporteAPI" target="_blank">API REST</a> para obtener la información de la base de datos.

Dentro de estos ficheros, en las primeras líneas de código, pueden ver que existen las variables _servidor_ y _puerto_. Estas dos variables se tienen que personalizar, indicando en _servidor_ la dirección del servidor donde
se aloja el servicio REST y en _puerto_ indicando el número de puerto de acceso a este servicio.



## Equipo
- Autores principales:  
  - **<a href="https://github.com/xikoto" target="_blank">José Miguel Benítez</a>**, estudiante de grado en ingeniería Informática.
  - **<a href="https://www.linkedin.com/in/marylin-mattos-a0a59b22/" target="_blank"> Marylin Mattos Barros</a>**, estudiante de Máster Oficial Universitario en Gestión de la Información


- Director del proyecto:
  - [Diego Álvarez](https://about.me/diegoalsan) | @diegoalsan


## Contexto del proyecto

El trabajo que contiene este repositorio se ha desarrollado en el [**Àrea Hackers cívics**](http://civichackers.cc). Un espacio de trabajo colaborativo formado por [hackers cívics](http://civichackers.webs.upv.es/conocenos/que-es-una-hacker-civicoa/) que buscamos y creamos soluciones a problemas que impiden que los ciudadanos y ciudadanas podamos influir en los asuntos que nos afectan y, así, construir una sociedad más justa. En definitiva, abordamos aquellos retos que limitan, dificultan o impiden nuestro [**empoderamiento**](http://civichackers.webs.upv.es/conocenos/una-aproximacion-al-concepto-de-empoderamiento/).

El [**Àrea Hackers cívics**](http://civichackers.cc) ha sido impulsada por la [**Cátedra Govern Obert**](http://www.upv.es/contenidos/CATGO/info/). Una iniciativa surgida de la colaboración entre la Concejalía de Transparencia, Gobierno Abierto y Cooperación del Ayuntamiento de València y la [Universitat Politècnica de València](http://www.upv.es).

![ÀHC](http://civichackers.webs.upv.es/wp-content/uploads/2017/02/Logo_CGO_web.png) ![ÀHC](http://civichackers.webs.upv.es/wp-content/uploads/2017/02/logo_AHC_web.png)



## Términos de uso

El contenido de este repositorio está sujeto a la licencia [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html). ![](https://www.gnu.org/graphics/gplv3-127x51.png)
