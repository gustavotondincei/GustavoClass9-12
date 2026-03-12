// Creamos una array que almacene las rutas de las imágenes en la carpeta media
// Creamos una variable para almacenar el índice de la imagen actual, empezando por 0 (primera imagen)
// Creamos una variable vacía donde almacenaremos el setInterval más adelante
// Creamos una constante para el tiempo de espera entre imágenes en milisegundos

// Obtenemos el elemento HTML que representa la imagen rotativa

// Creamos una función que cambie la imagen actual por la siguiente
    // Cambiamos la opacidad de la imagen rotativa a 0 para que desaparezca suavemente

    // Creamos un SetTimeout para esperar 300ms antes de cambiar la imagen

    // Incrementamos el índice de la imagen actual

    // Si el índice de la imagen actual es mayor o igual al largo de la array de imágenes:
        // Reseteamos el índice de la imagen actual a 0

    // Cambiamos el src de la imagen rotativa por la siguiente
    // Cambiamos la opacidad de la imagen rotativa a 1 para que aparezca suavemente

    
// Creamos una función que inicie el intervalo
    // Creamos un intervalo dentro de la variable que creamos vacía para este cometido en el que llame a la función anterior dándole como tiempo la constante que creamos con los milisegundos

// Creamos una función que detenga el intervalo
    // Detenemos el intervalo con clearInterval

// Añadimos un evento mouseenter a la imagen que ejecute la función que detenga el intervalo
// Añadimos un evento mouseleave a la imagen que ejecute la función que inicie el intervalo

// Llamamos a la función que inicia el intervalo para que se inicie al cargar la página