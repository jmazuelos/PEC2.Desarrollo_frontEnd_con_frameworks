# EJERCICIO 2
# 2.a ¿Por qué es el valor de this es undefined?
En el primer caso, se llama al metodo handlerAddTodo del controlador, que se inicia en el constructor, devolviendo this como 'TodoController' y this.service con su valor correspondiente.

Sin embargo, en el segundo caso se llama directamente al metodo addTodo del servicio, por tanto, no hay conexión entre el servicio y la vista mediante el controlador. Como consecuencia, no se devuelve el valor del controlador, haciendo que this sea 'undefined'.
