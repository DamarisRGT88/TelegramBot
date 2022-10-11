# Comando /tiempo

- OBJETIVO: Recuperar ciertos datos de temperatura de una ciudad seleccionada a partir de la ejecución de un coamndo en el bot. 

- EJECUCIÓN 
    -/tiempo madrid
    -/tiempo Santiago de Compostela
    -/tiempo Berlin

### TAREAS:
- Definir en index.js y en su fichero correspondiente el comando/ tiempo 
- Probar que funciona!
- Extraer la ciudad seleccionada
    - ¿De dónde saco el texto? -> hay que mirar ctx.message
    - ¿De ese mensaje cómo extraigo unicamente la ciudad?
- ¿Cómo saco los valores de temperaturas de esa ciudad?
    -API: https://openweathermap.org/
    - HAY QUE REGISTRARSE PARA OBTENER UNA api KEY
    - Mediante la URL: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric
    - Para recuperar la información a partir de esa URL  usamos la librería AXIOS (GET sobre la URL anterior)
- Como respuesta enviaremos los datos de : temperatura actual, temperatura máxima, mínima y humedad.


