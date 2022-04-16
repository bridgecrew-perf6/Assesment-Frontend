# ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
1. Sprint planning, es una reunión que se realiza para la planeación de las actividades que se llevaran a cabo durante el sprint y la estimación de estas.
2. Daily Scrum consta de una reunión diaria de 15 minutos en la que se discute las tareas realizadas, las que faltan por realizar y los inconvenientes que surgen para continuar con el sprint.
3. Sprint Review, es la reunión que ocurre al final del sprint donde se presenta el incremento desarrollado del producto.
4. Sprint Retrospective, esta reunión ocurre justo después del sprint review. El objetivo es realizar un retrospectiva sobre el último sprint e identificar las posibles mejoras para el siguiente.
5.Sprint Grooming o Refinement. Su objetivo es redefenir o refinar el baclokg.

# ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
Es una representación visual  con el diseño de las posibles vistas de las páginas a desarrollar, estos se usan al incio del desarrollo de la aplicación. Una de las herrmientas que nos ayudan a realizar este diseño, es FIGMA.

# Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
Para hablar de las diferencias, es necesario aclarar que la declaracion de una variable con "var" se emplea en el standar de ES5, el cual permite hacer modificaciones en los valores almacenados.
Para "Let" y "Const" se emplea en el standar de ES6. Para el caso de "let" permite hacer modificaciones en los valores almacenados, mientras que "const" al ser una constante no permite realizarcambios en los valores una vez sean declarados.

# ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
Los comandos que se pueden emplear son:
a. git branch rama-1
b. git checkout -b rama-1
c. git checkou -b  rama-1 origin/rama-1

# Explicar la diferencia entre git merge y git rebase.
- git rebase. Al realizar este comando hace  como si hubieras cambiado de rama y que apartir de alli empiezas a trabajar, es decir, re-escribe el historial de la rama principal integrando los commits de la otra rama en la rama principal
- git merge. Al realizar este comando se junta el historial de ambas ramas, es decir el nuevo commit hereda los cambios de las ramas mergeadas

# ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
- git pull. Este comando nos permite acutalizar en nuestro repositorio local la rama del repositorio remoto
- PR. Es una petición que se realizar a un repositorio remoto para que se agregen los commits de una rama, si este PR es aceptado se agregan los cambios al repositorio remoto.

# ¿Qué es el Virtual DOM?
Es una representción virtual de la UI que se mantiene en sincronia con el DOM virtual, por medio de ReactDom

# Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).
La respuesta se muestra a continuación https://codepen.io/endyleyms/pen/popQRjz?editors=1100