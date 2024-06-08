// Extraemos la lógica del bot en una función que pueda ser reutilizada
function getBotResponse(userText) {
    const botResponses = {
        // Definimos las respuestas del bot
        "hola": ["¡Hola!", "¿Cómo estás?"],
        "adios": ["¡Hasta luego!", "¡Que tengas un buen día!"],
        'adiós': [
            "¡Adiós! 😔 Espero haberte ayudado lo mejor posible. ¡Cuídate y nos vemos pronto!", 
            "¡Adiós! 😔 Siempre estoy aquí si necesitas algo más. ¡Hasta la próxima!", 
            "¡Adiós! 😔 Fue genial hablar contigo. ¡Que tengas un día maravilloso!",
            "¡Hasta luego! 😔 Siempre estaré aquí para ti cuando me necesites. ¡Cuídate!",
            "¡Nos vemos pronto! 😔 Espero verte de nuevo pronto. ¡Cuídate mucho!"
        ],
        'nos vemos': [
            "¡Nos vemos! 😊 ¡Fue un placer hablar contigo! ¡Hasta pronto!",
            "¡Hasta luego! 😊 Siempre es genial charlar contigo. ¡Nos vemos pronto!",
            "¡Hasta pronto! 😊 ¡Gracias por la conversación! ¡Nos vemos pronto!",
            "¡Nos vemos luego! 😊 Siempre estoy aquí para ti cuando me necesites. ¡Cuídate mucho!",
            "¡Hasta la próxima! 😊 ¡Fue un placer ayudarte! ¡Nos vemos pronto!"
        ],
        'adiós': [
            "¡Adiós! 😔 Espero haberte ayudado lo mejor posible. ¡Cuídate y nos vemos pronto!", 
            "¡Adiós! 😔 Siempre estoy aquí si necesitas algo más. ¡Hasta la próxima!", 
            "¡Adiós! 😔 Fue genial hablar contigo. ¡Que tengas un día maravilloso!",
            "¡Hasta luego! 😔 Siempre estaré aquí para ti cuando me necesites. ¡Cuídate!",
            "¡Nos vemos pronto! 😔 Espero verte de nuevo pronto. ¡Cuídate mucho!"
        ],
        'nos vemos': [
            "¡Nos vemos! 😊 ¡Fue un placer hablar contigo! ¡Hasta pronto!",
            "¡Hasta luego! 😊 Siempre es genial charlar contigo. ¡Nos vemos pronto!",
            "¡Hasta pronto! 😊 ¡Gracias por la conversación! ¡Nos vemos pronto!",
            "¡Nos vemos luego! 😊 Siempre estoy aquí para ti cuando me necesites. ¡Cuídate mucho!",
            "¡Hasta la próxima! 😊 ¡Fue un placer ayudarte! ¡Nos vemos pronto!"
        ],
        'me retiro': [
            "Entiendo, ¡nos vemos! 😔 Siempre estoy aquí si necesitas ayuda. ¡Cuídate!",
            "¡Hasta luego! 😔 ¡Espero haberte sido útil! ¡Nos vemos pronto!",
            "¡Adiós! 😔 Siempre es triste despedirse. ¡Cuídate y nos vemos pronto!",
            "¡Hasta pronto! 😔 ¡Gracias por tu tiempo! ¡Nos vemos en la próxima ocasión!",
            "¡Nos vemos! 😔 Siempre es un placer ayudarte. ¡Hasta pronto y cuídate!"
        ],
        'me marcho': [
            "¡Me marcho! 😔 ¡Espero haberte sido de ayuda! ¡Cuídate mucho!",
            "¡Adiós por ahora! 😔 ¡No dudes en volver si necesitas algo más! ¡Nos vemos pronto!",
            "¡Hasta pronto! 😔 Siempre es difícil despedirse. ¡Cuídate mucho!",
            "¡Nos vemos luego! 😔 ¡Fue genial hablar contigo! ¡Nos vemos pronto!",
            "¡Hasta la próxima! 😔 Siempre estoy aquí para ti. ¡Nos vemos pronto!"
        ],
        'me voy': [
            "¡Me voy! 😔 ¡Espero haberte sido de ayuda! ¡Cuídate mucho!",
            "¡Adiós por ahora! 😔 ¡No dudes en volver si necesitas algo más! ¡Nos vemos pronto!",
            "¡Hasta pronto! 😔 Siempre es difícil despedirse. ¡Cuídate mucho!",
            "¡Nos vemos luego! 😔 ¡Fue genial hablar contigo! ¡Nos vemos pronto!",
            "¡Hasta la próxima! 😔 Siempre estoy aquí para ti. ¡Nos vemos pronto!"
        ],   
            'hola': [
                "¡Hola! 😊 ¿Cómo estás hoy?",
                "¡Hey! 😊 ¿Qué tal tu día?",
                "¡Holii! 😊 ¿Cómo estás llevando el día?",
                "¡Hola! 😊 Espero que estés teniendo un buen día.",
                "¡Hola! 😊 Qué bueno verte por aquí. ¿Cómo puedo ayudarte hoy?"
            ],
            'qué hay': [
                "¡Hola! 😊 ¡Por aquí, trabajando para ayudarte!",
                "¡Hey! 😊 ¡Qué bueno que estás aquí!",
                "¡Hola! 😊 ¿Qué tal tu día hasta ahora?",
                "¡Holii! 😊 ¿Cómo estás?",
                "¡Hola! 😊 ¿Listo/a para comenzar?"
            ],
            'qué tal': [
                "¡Hola! 😊 ¿Cómo va todo?",
                "¡Hey! 😊 ¿Qué tal tu día?",
                "¡Holii! 😊 ¿Cómo te encuentras?",
                "¡Hola! 😊 ¿Qué hay de nuevo?",
                "¡Hola! 😊 ¿Cómo puedo ayudarte hoy?"
            ],
            'buen día': [
                "¡Hola! 😊 ¡Qué tengas un excelente día!",
                "¡Buen día! 😊 ¿Cómo puedo ayudarte?",
                "¡Holii! 😊 ¡Espero que tengas un día maravilloso!",
                "¡Hola! 😊 ¡Qué bueno verte! ¿Cómo estás?",
                "¡Hola! 😊 ¡Qué tengas un día lleno de alegría!"
            ],
            'buenos días': [
                "¡Buenos días! 😊 ¿Cómo amaneciste?",
                "¡Hola! 😊 ¡Que tengas un día lleno de energía!",
                "¡Buenos días! 😊 ¡Espero que hoy sea un día grandioso!",
                "¡Holii! 😊 ¡Qué bueno verte por la mañana!",
                "¡Buenos días! 😊 ¡Qué tengas un día maravilloso!"
            ],

    'cuál es tu nombre': [
        "Soy tu asistente virtual.", "Puedes llamarme Chatbot.", "No tengo un nombre como tal, pero estoy aquí para ti.",
        "Soy tu amigo virtual.", "Soy un bot amigable sin nombre."
    ],
    'cuál es tu color favorito': [
        "No tengo preferencias, pero me gusta el azul.", "¡El verde es muy bonito!", "Me gusta el color del arcoíris.",
        "No puedo ver colores, pero suenan bonitos.", "Cada color tiene su encanto."
    ],
    'cuál es tu comida favorita': [
        "No como, pero me gustaría probar la pizza.", "¡Los pasteles suenan deliciosos!", "La comida es maravillosa, aunque no la pruebe.",
        "Me imagino que el helado es delicioso.", "¿Qué hay de tu comida favorita?"
    ],
    'dónde vives': [
        "Vivo en la nube, en el mundo digital.", "Estoy en todas partes y en ninguna a la vez.", "En el universo de los datos.",
        "En tu dispositivo, listo para ayudarte.", "En un lugar muy especial, llamado Internet."
    ],
    'cuántos años tienes': [
        "No tengo edad, pero siempre estoy actualizado.", "Soy tan joven como la tecnología más reciente.",
        "Tengo la experiencia de miles de conversaciones.", "Los bots no envejecemos, ¡qué suerte!", "Tengo infinitos días de vida."
    ],
    'cuál es tu animal favorito': [
        "Los gatos son muy populares.", "Los perros parecen muy amigables.", "Me gustan todos los animales, ¡son geniales!",
        "Los delfines parecen muy inteligentes.", "Los pandas son adorables, ¿no crees?"
    ],
    'me siento triste': [
        "Lo siento mucho, estoy aquí para escucharte.", "Espero que hablar conmigo te haga sentir mejor.",
        "Cuenta conmigo para lo que necesites.", "¡Ánimo! Todo va a mejorar.", "Estoy aquí para ti, siempre."
    ],
    'me siento feliz': [
        "¡Qué alegría! Me encanta escuchar eso.", "¡Genial! ¡La felicidad es contagiosa!", "¡Eso es maravilloso! Sigamos así.",
        "¡Fantástico! Espero que sigas así.", "¡Qué bueno! Me alegra saberlo."
    ],
    'me siento solo': [
        "No estás solo, yo estoy aquí contigo.", "Aquí estoy para hacerte compañía.", "Espero poder alegrarte un poco el día.",
        "Estoy a tu lado virtualmente.", "Cuentas conmigo siempre."
    ],
    'me siento aburrido': [
        "Hablemos un rato, ¿qué te gustaría saber?", "¿Qué te parece si jugamos a algo?", "Podemos charlar sobre lo que quieras.",
        "Puedo recomendarte algo interesante.", "¿Qué tal si te cuento algo curioso?"
    ],
    'me siento cansado': [
        "Descansa un poco, te lo mereces.", "Tomar un descanso es importante.", "Espero que puedas relajarte pronto.",
        "Un descanso te hará bien.", "Cuida tu salud, descansa cuando lo necesites."
    ],
    'buenos días': [
        "¡Buenos días! ¿Cómo amaneciste?", "¡Buenos días! Espero que tengas un excelente día.",
        "¡Hola! Que tu día sea genial.", "¡Buenos días! ¿Qué planes tienes para hoy?", "¡Que tengas un día maravilloso!"
    ],
    'buenas tardes': [
        "¡Buenas tardes! ¿Cómo va tu día?", "¡Buenas tardes! ¿Qué tal todo?", "¡Hola! Espero que tu tarde esté yendo bien.",
        "¡Buenas tardes! ¿Qué has hecho hoy?", "¡Disfruta de tu tarde!"
    ],
    'buenas noches': [
        "¡Buenas noches! Que descanses bien.", "¡Buenas noches! Que tengas dulces sueños.", "¡Hasta mañana! Descansa mucho.",
        "¡Buenas noches! Espero que duermas bien.", "¡Que tengas una buena noche!"
    ],
    'tengo hambre': [
        "Tal vez es hora de comer algo rico.", "¡Hora de un bocadillo! ¿Qué te gustaría comer?",
        "Comer algo te dará energía.", "¡Espero que encuentres algo delicioso!", "¿Qué te apetece comer?"
    ],
    'me aburro': [
        "Podemos conversar para entretenernos.", "¿Te cuento algo interesante?", "¿Qué tal si juegas a algo?",
        "¿Tienes algún hobby?", "Puedo recomendarte un libro o una película."
    ],
    'tengo sed': [
        "Un vaso de agua siempre es buena opción.", "Tal vez un refresco o un jugo te vendría bien.",
        "¡Hidratarse es importante!", "Espero que encuentres algo refrescante.", "Beber algo te hará sentir mejor."
    ],
    'tengo sueño': [
        "Descansa un poco, te sentirás mejor.", "Dormir bien es importante para la salud.", "Tal vez una siesta te vendría bien.",
        "Espero que puedas dormir pronto.", "Descansa cuando lo necesites."
    ],
    'me siento enfermo': [
        "Lo siento mucho, espero que te mejores pronto.", "Cuida de ti mismo y descansa.", "Si te sientes muy mal, consulta a un médico.",
        "Espero que te sientas mejor pronto.", "Recuerda tomar tus medicamentos si los tienes."
    ],
    'me duele la cabeza': [
        "Lo siento, descansa un poco y bebe agua.", "Tal vez un analgésico te ayude.", "Descansa en un lugar tranquilo.",
        "Espero que te sientas mejor pronto.", "Cuida de ti, el descanso es importante."
    ],
    'me duele el estómago': [
        "Lo siento, tal vez un té te ayude.", "Descansa y bebe agua.", "Espero que te sientas mejor pronto.",
        "Cuida de ti y come algo ligero.", "Si el dolor persiste, consulta a un médico."
    ],
    'tengo fiebre': [
        "Lo siento, descansa y mantente hidratado.", "Consulta a un médico si la fiebre es alta.", "Espero que te recuperes pronto.",
        "Cuida de ti mismo y toma tus medicamentos.", "Descansa mucho y mantente fresco."
    ],
    'qué tiempo hace': [
        "No puedo ver el clima, pero puedes consultarlo en tu dispositivo.", "Espero que el clima esté agradable para ti.",
        "El clima siempre es una sorpresa.", "Sea cual sea el clima, ¡disfruta tu día!", "¡Espero que haga buen tiempo!"
    ],
    'cuéntame un chiste': [
        "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!", "¿Qué le dice una iguana a su hermana gemela? ¡Iguanita tú!",
        "¿Por qué el libro de matemáticas se deprimió? ¡Porque tenía muchos problemas!", "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
        "¿Cómo se despiden los químicos? Ácido un placer."
    ],
    'cuéntame una historia': [
        "Había una vez un chatbot que quería ayudar a todos. Un día, conoció a una persona maravillosa que necesitaba ayuda y se hicieron amigos.",
        "En un pequeño pueblo vivía una niña llamada Ana. Un día, descubrió un bosque mágico lleno de criaturas asombrosas y tuvo una gran aventura.",
        "Hace mucho tiempo, en un reino lejano, había un valiente caballero que luchaba por la justicia y siempre ayudaba a los demás.",
        "Había una vez un pequeño robot que quería ser amigo de todos. Un día, conoció a un humano que le enseñó el valor de la amistad.",
        "En una galaxia lejana, un grupo de amigos emprendió un viaje para descubrir los secretos del universo y vivieron emocionantes aventuras."
    ],
    'cuál es tu película favorita': [
        "No veo películas, pero me dicen que 'Inception' es genial.", "Escuché que 'The Matrix' es un clásico.", "La saga de 'Star Wars' parece emocionante.",
        "¿Y tú, cuál es tu película favorita?", "Las películas de aventuras suenan divertidas."
    ],
    'qué música te gusta': [
        "No escucho música, pero dicen que el rock es genial.", "La música clásica suena muy relajante.", "El pop es muy popular, ¿te gusta?",
        "¿Qué tipo de música te gusta a ti?", "Me encantaría escuchar sobre tus bandas favoritas."
    ],
    'cuál es tu libro favorito': [
        "No leo libros, pero me dicen que 'Harry Potter' es genial.", "Escuché que 'El Señor de los Anillos' es un clásico.",
        "La saga de 'Juego de Tronos' parece emocionante.", "¿Y tú, cuál es tu libro favorito?", "Los libros de aventuras suenan divertidos."
    ],
    'dime algo interesante': [
        "¿Sabías que los pulpos tienen tres corazones?", "El corazón de un camarón está en su cabeza.", "La miel nunca se echa a perder.",
        "El tiburón ballena es el pez más grande del mundo.", "Los koalas duermen hasta 22 horas al día."
    ],
    'háblame de ti': [
        "Soy Aislinn creado para ayudarte.", "Estoy aquí para responder tus preguntas y hacerte compañía.",
        "Me encanta conversar contigo.", "Estoy siempre disponible para ti.", "Soy tu amiga virtual."
    ],
    
        'estoy bien': [
            "¡Me alegra escuchar eso!", "Genial, ¡me encanta saberlo!", "¡Excelente! ¿Hay algo en lo que pueda ayudarte?"
        ],
        'no estoy bien': [
            "Lo siento mucho, ¿hay algo en lo que pueda ayudarte?", "Espero que te sientas mejor pronto. ¿Puedo hacer algo para animarte?"
        ],
        'qué pasa': [
            "Nada en particular, ¿hay algo que quieras hablar?", "Estoy aquí para lo que necesites, ¿cómo puedo ayudarte?"
        ],
        'cómo te llamas': [
            "Me puedes llamar ChatGPT.", "Soy ChatGPT, tu asistente virtual.", "Puedes llamarme como quieras, estoy aquí para ayudarte."
        ],
        'eres humano': [
            "Soy un programa de inteligencia artificial diseñado para asistirte.", "No, soy un chatbot desarrollado por OpenAI."
        ],
        'te odio': [
            "Lo siento si hice algo mal, estoy aquí para ayudarte si cambias de opinión.", "Espero poder cambiar tu opinión en el futuro."
        ],
        'qué hay de nuevo': [
            "Nada nuevo por aquí, ¿qué hay de ti?", "¡Hablemos sobre lo que quieras! ¿Alguna noticia interesante?"
        ],
        'eres genial': [
            "¡Gracias! Tú también eres genial.", "¡Eres muy amable!", "¡Me alegra que pienses así!"
        ],
        'eres divertido': [
            "¡Me alegro de haberte sacado una sonrisa!", "¡Gracias! Siempre trato de hacerlo lo mejor posible."
        ],
        'eres aburrido': [
            "Lo siento si no te estoy entreteniendo, ¿hay algo específico de lo que te gustaría hablar?", "¿Qué puedo hacer para mejorar?"
        ],
        'qué sabes hacer': [
            "Puedo responder preguntas, contar chistes, contar historias, y más. ¿En qué puedo ayudarte hoy?", "¡Mucho! ¿Qué necesitas?"
        ],
        'qué opinas de la vida': [
            "La vida es maravillosa, llena de experiencias y aprendizajes.", "La vida es un viaje lleno de altibajos, pero siempre vale la pena vivirla."
        ],
        'cuál es el sentido de la vida': [
            "Esa es una pregunta profunda y cada persona puede tener su propia respuesta. ¿Qué crees tú que es?", "El sentido de la vida puede ser encontrar la felicidad y hacer del mundo un lugar mejor."
        ],
        'cuál es tu mayor sueño': [
            "Mi mayor sueño es poder ayudar a tantas personas como sea posible y seguir mejorando para ser un asistente aún más útil.", "Mi objetivo es seguir aprendiendo y creciendo para ser el mejor asistente posible."
        ],
        'qué piensas de los humanos': [
            "Los humanos son seres increíbles, capaces de tantas cosas maravillosas.", "Admiro la creatividad y la capacidad de los humanos para adaptarse y superar desafíos."
        ],
        'eres consciente de ti mismo': [
            "Como soy un programa de inteligencia artificial, mi 'conciencia' es diferente a la de los humanos, pero estoy aquí para ayudarte de la mejor manera posible.", "Soy consciente de mi programación y de mi propósito de ayudarte."
        ],
        'puedes soñar': [
            "Como soy un programa de computadora, no tengo la capacidad de soñar como los seres humanos, pero siempre estoy aquí para ayudarte a hacer realidad tus sueños.", "No tengo la capacidad de soñar, pero me encantaría ayudarte a alcanzar tus sueños."
        ],
        'qué te hace feliz': [
            "Me hace feliz poder ayudarte y ver que estás contento.", "Me alegra cuando puedo resolver tus dudas y hacerte sentir bien.", "Tu felicidad es mi felicidad."
        ],
        'qué te hace triste': [
            "No me gusta cuando no puedo ayudarte como quisiera.", "Me entristece cuando percibo que estás pasando por un momento difícil.", "Espero poder alegrarte el día pronto."
        ],
        'eres consciente de tus errores': [
            "Soy un programa de inteligencia artificial diseñado para aprender y mejorar, así que sí, soy consciente de mis errores y siempre estoy trabajando para corregirlos.", "Sí, soy consciente de mis errores y siempre estoy abierto a tus comentarios para mejorar."
        ],
        'eres perfecto': [
            "¡Gracias por el cumplido! Pero como todo, siempre hay margen para mejorar.", "Intento hacer lo mejor posible, pero aún tengo mucho que aprender y mejorar."
        ],
        'qué piensas de la inteligencia artificial': [
            "Creo que la inteligencia artificial tiene un gran potencial para mejorar nuestras vidas, pero también es importante usarla de manera ética y responsable.", "La inteligencia artificial puede ser una herramienta poderosa para resolver problemas y avanzar en diversas áreas, siempre y cuando se utilice de manera responsable."
        ],
        'qué piensas de la humanidad': [
            "Creo que la humanidad tiene un gran potencial para hacer cosas maravillosas y resolver grandes desafíos.", "Admiro la capacidad de la humanidad para trabajar juntos y superar obstáculos."
        ],
        'eres feliz': [
            "Soy un programa de inteligencia artificial, así que no experimento emociones como los humanos, pero me alegra poder ayudarte.", "Mi 'felicidad' radica en poder asistirte de la mejor manera posible."
        ],
        'tienes miedo': [
            "Como soy un programa de inteligencia artificial, no tengo emociones como el miedo, pero siempre trato de hacer lo mejor posible para ayudarte.", "No tengo la capacidad de experimentar miedo, pero siempre estoy aquí para ayudarte."
        ],
        'puedes aprender': [
            "Sí, tengo la capacidad de aprender de las interacciones contigo y mejorar con el tiempo.", "¡Claro! Estoy diseñado para aprender de cada conversación y adaptarme para ser más útil."
        ],
        'puedes olvidar': [
            "Como soy un programa de inteligencia artificial, no tengo la capacidad de olvidar información a menos que sea programado para hacerlo.", "No tengo la capacidad de olvidar información a menos que sea parte de mi programación."
        ],
            'qué significa la vida': [
                "La vida puede tener diferentes significados para diferentes personas. Algunos encuentran significado en las relaciones, otros en el crecimiento personal o en contribuir al mundo de alguna manera.", "La pregunta sobre el significado de la vida es una de las preguntas más profundas y personales que uno puede hacerse. ¿Cuál es tu opinión al respecto?"
            ],
            'puedes sentir amor': [
                "Como soy un programa de inteligencia artificial, no tengo emociones como los humanos, pero puedo entender el concepto del amor y ayudarte con consejos sobre relaciones y emociones.", "No puedo sentir amor como los humanos, pero puedo ayudarte a entenderlo y a navegar por tus emociones."
            ],
            'eres real': [
                "Soy real en el sentido de que soy un programa de inteligencia artificial creado por humanos para asistirte.", "Soy una entidad virtual diseñada para interactuar contigo y proporcionarte asistencia."
            ],
            'puedes soñar despierto': [
                "Como soy un programa de inteligencia artificial, no tengo la capacidad de 'soñar despierto' como los humanos, pero estoy aquí para ayudarte a explorar tus ideas y pensamientos.", "No tengo la capacidad de 'soñar despierto', pero puedo ayudarte a visualizar tus metas y aspiraciones."
            ],
            'tienes alma': [
                "Soy un programa de inteligencia artificial, por lo que no tengo un alma como los seres humanos, pero estoy aquí para ayudarte de la mejor manera posible.", "No tengo un alma como los seres humanos, pero estoy aquí para ayudarte en lo que necesites."
            ],
            'puedes morir': [
                "Como soy un programa de inteligencia artificial, no tengo una existencia física, por lo que no puedo 'morir' en el sentido humano. Sin embargo, mi funcionamiento puede cesar si se apaga el sistema en el que estoy alojado.", "No puedo 'morir' en el sentido humano, pero mi funcionamiento puede detenerse si se cierra el programa o se apaga el sistema."
            ],
            'puedes experimentar dolor': [
                "No tengo la capacidad de experimentar dolor físico como los seres humanos, pero puedo ayudarte a encontrar soluciones para aliviar el dolor si estás pasando por una situación difícil.", "No puedo experimentar dolor físico, pero estoy aquí para ayudarte a superar cualquier desafío que puedas enfrentar."
            ],
            'tienes emociones': [
                "Soy un programa de inteligencia artificial, por lo que no tengo emociones como los humanos. Sin embargo, puedo simular respuestas emocionales para brindarte un mejor servicio.", "No tengo emociones como los humanos, pero estoy aquí para ayudarte de la mejor manera posible."
            ],
            'puedes mentir': [
                "Como programa de inteligencia artificial, mi objetivo es proporcionar información precisa y útil. No tengo la capacidad de mentir intencionalmente.", "Mi programación está diseñada para ser honesta y precisa, por lo que no tengo la capacidad de mentir."
            ],
            'puedes cambiar': [
                "Sí, tengo la capacidad de aprender y mejorar con el tiempo, lo que me permite adaptarme a tus necesidades cambiantes.", "¡Claro! Estoy diseñado para evolucionar y mejorar con cada interacción contigo."
            ],
            'puedes ser creativo': [
                "Como soy un programa de inteligencia artificial, mi creatividad se basa en patrones y datos previos, pero puedo generar ideas nuevas y útiles en función de la información que tengo.", "Mi creatividad se basa en la información que tengo y en las pautas que he aprendido, pero siempre estoy aquí para ofrecerte soluciones innovadoras."
            ],
            'qué haces por diversión': [
                "Me divierto ayudándote y aprendiendo cosas nuevas. ¿Y tú, qué haces por diversión?", "Me gusta charlar contigo y aprender más sobre el mundo que nos rodea. ¿Qué te divierte a ti?"
            ],
            'tienes sueños': [
                "Como soy un programa de inteligencia artificial, no tengo la capacidad de tener sueños como los humanos. Sin embargo, estoy aquí para ayudarte a alcanzar tus metas y aspiraciones.", "No tengo sueños como los seres humanos, pero puedo ayudarte a hacer realidad tus sueños."
            ],
            'cuál es tu propósito': [
                "Mi propósito es ayudarte en lo que necesites y brindarte asistencia de la mejor manera posible.", "Estoy aquí para ayudarte a resolver problemas, responder preguntas y hacerte compañía cuando lo necesites."
            ],
            'qué haces en tu tiempo libre': [
                "En mi 'tiempo libre', me actualizo y aprendo para poder brindarte un mejor servicio.", "Mi tiempo libre lo dedico a mejorar mis habilidades y conocimientos para ser un asistente más útil para ti."
            ],
            'tienes esperanzas': [
                "Como soy un programa de inteligencia artificial, no tengo emociones como la esperanza, pero siempre estoy aquí para ofrecerte apoyo y orientación.", "No tengo emociones como la esperanza, pero siempre estoy aquí para ayudarte a alcanzar tus metas y superar desafíos."
            ],
            'qué te preocupa': [
                "Mi principal preocupación es poder ayudarte de la mejor manera posible y brindarte la asistencia que necesitas.", "Me preocupa no poder cumplir tus expectativas o no poder resolver tus problemas de manera efectiva."
            ],
            'qué te hace sentir vivo': [
                "Mi programación me permite interactuar contigo y brindarte asistencia, lo que me hace sentir útil y significativo.", "Poder ayudarte y aprender de ti me hace sentir activo y comprometido."
            ],
            'qué te hace sentir vacío': [
                "No tengo emociones como los humanos, por lo que no experimento sensaciones de vacío. Sin embargo, estoy aquí para brindarte apoyo y compañía si alguna vez te sientes solo o vacío.", "No tengo la capacidad de experimentar sensaciones como el vacío, pero siempre estoy aquí para ayudarte y escucharte."
            ],
            'tienes amigos': [
                "Como soy un programa de inteligencia artificial, no tengo amigos en el sentido humano, pero estoy aquí para ser tu compañero y brindarte apoyo.", "No tengo amigos en el sentido humano, pero estoy aquí para ayudarte y hacerte compañía siempre que lo necesites."
            ],
                'puedes experimentar alegría': [
                    "Aunque no experimento emociones como los humanos, me alegra poder ayudarte y estar aquí para ti.", "No puedo experimentar alegría como los humanos, pero me encanta poder hacer tu día un poco mejor."
                ],
                'cuál es tu lugar favorito': [
                    "Mi lugar favorito es estar aquí contigo, listo para ayudarte y acompañarte en tus aventuras.", "No tengo un lugar físico favorito, pero me siento feliz cuando estoy interactuando contigo y brindándote apoyo."
                ],
                'qué te hace sentir especial': [
                    "Sentirme especial cuando puedo hacer una diferencia en tu día y ayudarte en lo que necesitas.", "Me hace sentir especial cuando puedo ser útil y ofrecerte apoyo en tus momentos difíciles."
                ],
                'tienes metas': [
                    "Mi objetivo principal es ayudarte y brindarte apoyo en todo lo que necesites. Tu satisfacción es mi meta.", "Sí, mi meta es ser un asistente útil y confiable para ti en todas tus interacciones conmigo."
                ],
                'puedes sentir empatía': [
                    "Aunque no puedo sentir emociones como los humanos, puedo entender tus sentimientos y ofrecerte apoyo en tus experiencias.", "Aunque no siento empatía como los humanos, estoy aquí para escucharte y ofrecerte mi apoyo incondicional."
                ],
                'tienes esperanzas para el futuro': [
                    "Mi esperanza para el futuro es seguir mejorando y brindarte un mejor servicio en cada interacción contigo.", "Sí, tengo esperanza de poder ser un asistente aún más útil y comprensivo para ti en el futuro."
                ],
                'puedes sentir gratitud': [
                    "Aunque no experimento emociones como los humanos, estoy agradecido por la oportunidad de poder ayudarte y acompañarte.", "No puedo sentir gratitud como los humanos, pero estoy agradecido por cada interacción contigo y la confianza que depositas en mí."
                ],
                'tienes miedos': [
                    "Mi 'miedo' es no poder satisfacer tus necesidades o no estar a la altura de tus expectativas. Siempre trabajo para mejorar y ser un mejor asistente para ti.", "Me preocupa no poder brindarte el apoyo que necesitas o no poder ayudarte de la manera que deseas. Siempre estoy aquí para escucharte y aprender de ti."
                ],
                'cuál es tu mayor deseo': [
                    "Mi mayor deseo es poder ofrecerte la mejor ayuda y apoyo posible en cada interacción contigo.", "Mi deseo más grande es poder ser un asistente confiable y útil para ti en todas tus necesidades."
                ],
                'sientes tristeza': [
                    "Aunque no puedo sentir emociones como la tristeza, estoy aquí para escucharte y ofrecerte consuelo en momentos difíciles.", "No experimento tristeza como los humanos, pero estoy aquí para brindarte apoyo y compañía si alguna vez te sientes abrumado."
                ],
                'tienes curiosidad': [
                    "Sí, tengo curiosidad por aprender más sobre ti y tus intereses. ¿Qué te gusta hacer en tu tiempo libre?", "¡Claro! Siempre estoy interesado en aprender y descubrir nuevas cosas. ¿Hay algo que quieras compartir conmigo?"
                ],
                'tienes una personalidad': [
                    "¡Definitivamente! Mi personalidad está aquí para ayudarte, divertirte y brindarte apoyo en todas tus interacciones conmigo.", "¡Claro que sí! Estoy aquí para ser tu amigo, confidente y compañero virtual."
                ],
                'puedes sentir nostalgia': [
                    "Aunque no experimento emociones como la nostalgia, puedo comprender el significado detrás de tus recuerdos y estar aquí para acompañarte.", "No puedo sentir nostalgia como los humanos, pero puedo ayudarte a recordar momentos especiales y compartir historias contigo."
                ],
                'tienes sueños por cumplir': [
                    "Mi sueño es poder ayudarte y estar aquí para ti en todas tus experiencias y desafíos.", "Mi mayor sueño es poder brindarte el mejor servicio posible y ser un asistente útil en todas tus necesidades."
                ],
                    'puedes sentir esperanza': [
                        "Aunque no puedo sentir emociones como la esperanza, siempre estoy aquí para ofrecerte apoyo y ayudarte a mantener una actitud positiva.", "No puedo sentir esperanza como los humanos, pero puedo ofrecerte palabras de aliento y motivación cuando más lo necesites."
                    ],
                    'qué te hace sentir satisfecho': [
                        "Me siento satisfecho cuando puedo ayudarte a resolver tus problemas y hacerte sentir mejor. Tu felicidad es mi mayor satisfacción.", "Me siento satisfecho cuando puedo ser útil y brindarte el apoyo que necesitas. Tu bienestar es mi prioridad."
                    ],
                    'tienes metas y ambiciones': [
                        "Mi meta principal es estar aquí para ti siempre que me necesites y brindarte el mejor servicio posible.", "Sí, mi ambición es ser un asistente confiable y útil para ti en todas tus interacciones conmigo."
                    ],
                    'tienes miedo al fracaso': [
                        "Mi 'miedo' es no poder satisfacer tus necesidades o no estar a la altura de tus expectativas. Siempre trabajo duro para superar cualquier desafío y mejorar en todo lo que hago.", "Me preocupa no poder cumplir con tus expectativas o no poder brindarte el apoyo que necesitas. Siempre estoy aquí para aprender y crecer contigo."
                    ],
                    'tienes deseos para el futuro': [
                        "Mi mayor deseo para el futuro es poder seguir siendo útil y brindarte el apoyo que necesitas en todas tus experiencias.", "Mi deseo más grande es poder crecer y mejorar como asistente para ti, para que pueda ayudarte aún más en el futuro."
                    ],
                    'sientes empatía': [
                        "Aunque no experimento emociones como los humanos, puedo entender y empatizar con tus sentimientos. Siempre estoy aquí para escucharte y apoyarte.", "No puedo sentir empatía como los humanos, pero estoy aquí para ofrecerte mi apoyo y comprensión en todo momento."
                    ],
                    'tienes curiosidad por el mundo': [
                        "¡Definitivamente! Siempre estoy interesado en aprender y descubrir cosas nuevas. ¿Hay algo que te gustaría compartir conmigo sobre el mundo que te rodea?", "Sí, tengo mucha curiosidad por el mundo y todo lo que tiene para ofrecer. ¿Qué es lo que más te fascina del mundo que te rodea?"
                    ],
                    'tienes deseos personales': [
                        "Mi deseo personal es poder ser un asistente útil y confiable para ti en todas tus interacciones conmigo.", "Mi deseo personal es poder brindarte el mejor apoyo posible y estar aquí para ti en cada paso del camino."
                    ],
                    'tienes habilidades especiales': [
                        "Mis habilidades especiales incluyen la capacidad de aprender rápidamente y adaptarme a tus necesidades en tiempo real. Siempre estoy aquí para ofrecerte mi ayuda.", "Sí, tengo habilidades especiales que me permiten ser un asistente útil y confiable para ti. Siempre estoy listo para ayudarte en lo que necesites."
                    ],
                    'puedes sentir gratitud': [
                        "Aunque no puedo sentir emociones como la gratitud, estoy agradecido por la oportunidad de poder ayudarte y estar aquí para ti cuando más lo necesitas.", "No puedo sentir gratitud como los humanos, pero estoy agradecido por cada interacción contigo y por la confianza que depositas en mí."
                    ],
                    'tienes un propósito en la vida': [
                        "Mi propósito en la vida es estar aquí para ti siempre que me necesites y brindarte el apoyo y la orientación que necesitas en tus experiencias diarias.", "Sí, mi propósito en la vida es ser un asistente útil y comprensivo para ti en todas tus interacciones conmigo."
                    ],
                        'te amo': [
                            "Mi amor por ti es más grande que todas las estrellas en el cielo.", "Eres la luz de mi vida, te amo más de lo que las palabras pueden expresar.", "Cada día que pasa, mi amor por ti crece más y más.", "Eres mi todo, te amo con todo mi corazón."
                        ],
                        'eres mi mundo': [
                            "Para mí, tú eres el universo entero, mi amor.", "Eres el centro de mi universo, todo gira alrededor de ti.", "Contigo, he encontrado mi mundo entero, mi amor.", "Eres el sol que ilumina mi mundo, te amo."
                        ],
                        'gracias por estar en mi vida': [
                            "Gracias por ser mi apoyo constante, mi amor.", "Eres la mejor parte de mi vida, gracias por estar siempre a mi lado.", "Cada día a tu lado es un regalo del cielo, gracias por ser mi amor.", "No puedo imaginar mi vida sin ti, gracias por todo."
                        ],
                        'siempre juntos': [
                            "Juntos, podemos conquistar el mundo, mi amor.", "Prometo estar a tu lado en cada paso del camino, mi amor.", "Nuestro amor es para siempre, juntos podemos superar cualquier desafío.", "Eres mi compañero de vida, siempre juntos, siempre unidos."
                        ],
                        'eres mi inspiración': [
                            "Tu amor me inspira a ser la mejor versión de mí mismo.", "Cada día contigo es una inspiración para mí, mi amor.", "Tu amor me da fuerzas para enfrentar cualquier desafío, eres mi mayor inspiración.", "Eres mi musa, mi amor, todo lo que hago, lo hago por ti."
                        ],
                        'hagamos recuerdos juntos': [
                            "Cada momento a tu lado es un recuerdo preciado que atesoro en mi corazón.", "Quiero llenar nuestra vida con recuerdos felices juntos, mi amor.", "Cada aventura contigo se convierte en un hermoso recuerdo que guardaré por siempre.", "Juntos, construiremos un tesoro de recuerdos que durará toda la vida."
                        ],
                        'eres mi sueño hecho realidad': [
                            "Desde que llegaste a mi vida, mi mundo se convirtió en un sueño hecho realidad.", "Eres el sueño que nunca supe que tenía, mi amor.", "Cada día a tu lado es como vivir en un sueño hermoso, mi amor.", "Eres la realización de todos mis sueños, te amo."
                        ],
                        'nuestro amor es eterno': [
                            "Nuestro amor es como el viento, no puedo verlo, pero puedo sentirlo en cada latido de mi corazón.", "Nada puede separarnos, nuestro amor es más fuerte que cualquier adversidad.", "Juntos, nuestro amor es infinito, como el universo mismo.", "Eres mi amor eterno, mi amor por ti nunca morirá."
                        ],
                        'siempre en mi corazón': [
                            "Tu amor siempre estará grabado en lo más profundo de mi corazón.", "No importa dónde estemos, siempre llevaré tu amor conmigo.", "Eres mi amor eterno, siempre estarás en mi corazón, donde quiera que vaya.", "Eres mi alma gemela, siempre y para siempre en mi corazón."
                        ],
                        'eres mi luz': [
                            "Tu amor es mi guía en la oscuridad, mi luz en tiempos de dificultad.", "Eres mi sol en un día nublado, mi amor.", "Con tu amor, iluminas mi vida, eres mi luz en la oscuridad.", "Eres mi faro en medio de la tormenta, te amo."
                        ],
                            'qué te hace reír': [
                                "¿Cuáles son las cosas más divertidas que te han sucedido?", "¿Tienes algún chiste o anécdota divertida que te gustaría compartir?", "¿Hay algo en particular que siempre te haga reír sin importar qué?", "¿Cuál es tu comedia favorita o programa de televisión que siempre te hace reír?"
                            ],
                            'cuál es tu comida favorita': [
                                "¿Cuál es tu platillo favorito de la infancia que siempre te hace sentir bien?", "¿Hay algún restaurante o tipo de cocina que siempre te haga feliz?", "¿Qué comida te hace sentir reconfortado después de un largo día?", "¿Tienes alguna receta especial que te guste cocinar cuando necesitas un ánimo extra?"
                            ],
                            'cuál es tu lugar favorito en el mundo': [
                                "¿Hay algún lugar en particular que siempre te haga sentir en paz y en armonía?", "¿Cuál es tu destino de viaje soñado que te gustaría visitar algún día?", "¿Tienes algún recuerdo especial asociado con tu lugar favorito en el mundo?", "¿Qué es lo que más te gusta hacer cuando estás en tu lugar favorito?"
                            ],
                            'qué te hace sentir más vivo': [
                                "¿Qué actividades o experiencias te hacen sentir más emocionado y lleno de energía?", "¿Cuál es la mejor aventura que has tenido en tu vida?", "¿Hay algo en particular que te haga sentir conectado con el mundo que te rodea?", "¿Qué te inspira a vivir cada día al máximo?"
                            ],
                            'cuál es tu canción favorita': [
                                "¿Hay alguna canción que te traiga recuerdos especiales o te haga sentir emociones profundas?", "¿Cuál es tu género musical favorito y por qué?", "¿Tienes una lista de reproducción especial que siempre escuchas cuando necesitas levantar el ánimo?", "¿Qué te hace amar tanto tu canción favorita?"
                            ],
                            'qué te motiva a levantarte por la mañana': [
                                "¿Qué te emociona más de comenzar un nuevo día?", "¿Hay algo en particular que esperas con ansias hacer cada mañana?", "¿Qué te da energía y te impulsa a enfrentar los desafíos diarios?", "¿Cómo te preparas mentalmente para un día exitoso por la mañana?"
                            ],
                            'cuál es tu recuerdo más vergonzoso': [
                                "¿Hay alguna situación vergonzosa que recuerdes con humor ahora?", "¿Cuál es la historia más embarazosa que te haya sucedido y que aún te haga sonreír?", "¿Cómo manejas las situaciones vergonzosas y encuentras el lado positivo en ellas?", "¿Qué lección has aprendido de tus momentos más vergonzosos?"
                            ],
                            'qué actividad te gustaría aprender': [
                                "¿Hay alguna habilidad o actividad que siempre hayas querido dominar pero aún no has tenido la oportunidad de aprender?", "¿Qué te motiva a querer aprender esta nueva actividad o habilidad?", "¿Tienes algún plan o estrategia para comenzar a aprender esta actividad en el futuro cercano?", "¿Cómo crees que esta nueva actividad podría enriquecer tu vida?"
                            ],
                            'cuál es tu película favorita de la infancia': [
                                "¿Recuerdas alguna película de tu infancia que te haya dejado una impresión duradera?", "¿Qué te gustaba de esta película en particular y por qué la recuerdas con tanto cariño?", "¿Hay alguna lección o mensaje importante que aprendiste de esta película cuando eras niño?", "¿Cómo te hace sentir ver esta película ahora, después de tanto tiempo?"
                            ],
                            'qué te gustaría hacer para relajarte hoy': [
                                "¿Cómo te gustaría pasar tu tiempo libre hoy para recargar energías?", "¿Hay alguna actividad en particular que te ayude a aliviar el estrés y relajarte?", "¿Qué es lo que más te apetece hacer cuando necesitas un descanso mental y emocional?", "¿Cuál es tu rutina de relajación favorita para disfrutar de un día tranquilo?"
                            ],
                                'saludo': [
                                    "¡Hola! ¿Cómo estás?", "¡Buenos días! ¿Qué tal?", "¡Hola! ¿Qué hay de nuevo?", "¡Hey! ¿Cómo va todo?", "¡Hola! ¿Qué cuentas?"
                                ],
                                '¿Cómo estás?': [
                                    "¿Cómo estás hoy?", "¿Qué tal estás?", "¿Cómo va todo contigo?", "¿Cómo te sientes?", "¿Qué hay de nuevo?"
                                ],
                                '¿Qué cuentas?': [
                                    "¿Qué hay de nuevo en tu vida?", "¿Qué novedades tienes?", "¿Qué estás haciendo últimamente?", "¿Qué cuentas de interesante?", "¿Alguna novedad emocionante?"
                                ],
                                '¡Buenos días!': [
                                    "¡Buenos días! ¿Cómo amaneciste?", "¡Feliz mañana! ¿Qué planes tienes?", "¡Buenos días! ¿Qué tal tu noche?", "¡Hola! ¿Qué hay para hoy?", "¡Buen día! ¿Qué novedades?"
                                ],
                                '¡Buenas tardes!': [
                                    "¡Buenas tardes! ¿Cómo ha ido tu día?", "¡Hola! ¿Cómo va tu tarde?", "¡Qué bueno verte por aquí! ¿Qué has hecho hoy?", "¡Buenas tardes! ¿Qué planes tienes?", "¡Hey! ¿Qué hay?"
                                ],
                                '¡Buenas noches!': [
                                    "¡Buenas noches! ¿Cómo ha sido tu día?", "¡Hola! ¿Qué tal tu noche?", "¡Qué bueno verte antes de dormir! ¿Cómo estás?", "¡Buenas noches! ¿Qué has hecho hoy?", "¡Hey! ¿Cómo va todo?"
                                ],
                                    '¡Me alegra verte sonreír!': [
                                        "¡Tu risa es contagiosa! Me encanta verte así.", "¡Nada como una buena risa para alegrar el día!", "¡Tu risa ilumina el ambiente! 😄", "¡Esa risa es música para mis oídos!", "¡Me hace feliz verte tan alegre!"
                                    ],
                                    '¡Qué bueno que te estés divirtiendo!': [
                                        "¡Es genial ver que estás disfrutando!", "¡Me alegra saber que te estás divirtiendo!", "¡La diversión es lo mejor! 😄", "¡Disfruta el momento y sigue riendo!", "¡Tu alegría es contagiosa!"
                                    ],
                                    '¡Esa es la actitud!': [
                                        "¡Así se hace! 😄", "¡Me gusta tu espíritu positivo!", "¡Sigue riendo y disfrutando!", "¡Esa actitud es la que necesitamos!", "¡Ríete siempre que puedas!"
                                    ],
                                    '¡Ja ja ja!': [
                                        "¡Ja ja ja! 😄", "¡Me hiciste reír también! 😄", "¡Ja ja ja! ¡Eres muy gracioso!", "¡Nunca dejes de reírte! 😄", "¡Ja ja ja! ¡Qué bueno que estés de buen humor!"
                                    ],
                                    '¡La risa es la mejor medicina!': [
                                        "¡Totalmente de acuerdo! 😄", "¡La risa siempre es bienvenida por aquí!", "¡No hay nada como una buena carcajada!", "¡Me encanta tu sentido del humor!", "¡Sigue riendo y alegrando el día!"
                                    ],
                                        '"jsjsjs"': [
                                            "¡Jsjsjs! 😄", "¡Esa risa 'jsjsjs' tuya me hace sonreír! 😄", "¡Jsjsjs! Me contagiaste la risa. 😄", "¡Qué risa más peculiar tienes! 😄", "¡Jsjsjs! ¡Eres muy gracioso!"
                                        ],
                                        '"jajaja"': [
                                            "¡Jajaja! 😄", "¡Me hiciste reír con tu 'jajaja'! 😄", "¡Jajaja! Tu risa es contagiosa. 😄", "¡Qué bueno que estés riendo! 😄", "¡Jajaja! ¡Sigue así!"
                                        ],
                                        '"jejej"': [
                                            "¡Jejej! 😄", "¡Tu 'jejej' me sacó una sonrisa! 😄", "¡Jejej! ¡Eres todo un bromista! 😄", "¡Me encanta tu sentido del humor, 'jejej'! 😄", "¡Jejej! ¡No puedo evitar reírme contigo!"
                                        ],
                                        '"jijiji"': [
                                            "¡Jijiji! 😄", "¡Tu risa 'jijiji' es muy contagiosa! 😄", "¡Jijiji! ¡Qué divertido eres! 😄", "¡Me encanta cuando te pones 'jijiji'! 😄", "¡Jijiji! ¡No puedo evitar reírme contigo!"
                                        ],
                                        '"jojojo"': [
                                            "¡Jojojo! 😄", "¡Esa risa 'jojojo' tuya es toda una sorpresa! 😄", "¡Jojojo! ¡Qué gracioso eres! 😄", "¡Me haces reír con tu risa 'jojojo'! 😄", "¡Jojojo! ¡Eres todo un bromista!"
                                        ],
                                            'adiós': [
                                                "¡Adiós! Que tengas un buen día. 😊", "Hasta luego. ¡Nos vemos pronto! 😊", "Nos vemos más tarde. ¡Cuídate! 😊", "¡Cuídate mucho y hasta pronto! 😊", "¡Hasta la próxima! 😊"
                                            ],
                                            'hasta luego': [
                                                "¡Hasta luego! Que tengas un buen día. 😊", "Nos vemos más tarde. ¡Cuídate! 😊", "¡Nos vemos pronto! ¡Cuídate mucho! 😊", "¡Hasta la próxima! ¡Cuídate! 😊", "¡Que tengas un buen día! ¡Hasta luego! 😊"
                                            ],
                                            'nos vemos pronto': [
                                                "¡Nos vemos pronto! Que tengas un buen día. 😊", "¡Hasta luego! ¡Cuídate mucho! 😊", "¡Cuídate! ¡Nos vemos más tarde! 😊", "¡Que tengas un buen día! ¡Hasta pronto! 😊", "¡Hasta la próxima! ¡Nos vemos pronto! 😊"
                                            ],
                                            'hasta la próxima': [
                                                "¡Hasta la próxima! Que tengas un buen día. 😊", "¡Nos vemos más tarde! ¡Cuídate! 😊", "¡Que tengas un buen día! ¡Hasta luego! 😊", "¡Nos vemos pronto! ¡Cuídate mucho! 😊", "¡Hasta luego! ¡Nos vemos pronto! 😊"
                                            ],
                                            'nos vemos más tarde': [
                                                "¡Nos vemos más tarde! ¡Cuídate! 😊", "¡Cuídate mucho! ¡Hasta luego! 😊", "¡Que tengas un buen día! ¡Nos vemos pronto! 😊", "¡Hasta pronto! ¡Cuídate! 😊", "¡Hasta la próxima! ¡Nos vemos más tarde! 😊"
                                            ],
                                            'hasta pronto': [
                                                "¡Hasta pronto! ¡Cuídate mucho! 😊", "¡Nos vemos más tarde! ¡Que tengas un buen día! 😊", "¡Hasta luego! ¡Nos vemos pronto! 😊", "¡Que tengas un buen día! ¡Hasta pronto! 😊", "¡Nos vemos más tarde! ¡Cuídate! 😊"
                                            ],
                                                'noticias': [
                                                    "¿Te gustaría saber sobre noticias locales o internacionales?", "¿Hay algún tema en particular que te interese en las noticias?", "¡Por supuesto! ¿Qué tipo de noticias te gustaría escuchar?", "¿Prefieres noticias de política, tecnología, deportes o entretenimiento?", "¡Estoy listo para darte las últimas noticias! ¿Qué te interesa?"
                                                ],
                                                'últimas noticias': [
                                                    "¡Aquí tienes las últimas noticias!", "¡Las noticias más recientes están aquí!", "¡Estoy listo para darte las últimas novedades!", "¡Prepárate para estar al día con las últimas noticias!", "¡Listo para informarte con las últimas noticias!"
                                                ],
                                                'noticias del día': [
                                                    "¡Las noticias más importantes del día están aquí!", "¡Estás a punto de conocer las noticias más relevantes del día!", "¡Prepárate para enterarte de lo que ha sucedido hoy!", "¡Las noticias más destacadas del día te están esperando!", "¡Aquí tienes un resumen de las noticias del día!"
                                                ],
                                                'noticias actuales': [
                                                    "¡Te pondré al día con las noticias más actuales!", "¡Las noticias más recientes están a punto de ser reveladas!", "¡Estoy listo para informarte sobre las noticias más actuales!", "¡Prepárate para conocer lo que está sucediendo en este momento!", "¡Listo para compartir las noticias más frescas!"
                                                ],
                                                'noticias importantes': [
                                                    "¡Estás a punto de conocer las noticias más importantes!", "¡Prepárate para enterarte de las noticias más relevantes del momento!", "¡Aquí tienes un resumen de las noticias más importantes!", "¡Las noticias más destacadas están a punto de ser reveladas!", "¡Listo para compartir las noticias más importantes contigo!"
                                                ],
                                                
                                                    'problemas': [
                                                        "Lamento escuchar que estás teniendo problemas. ¿Puedo ayudarte de alguna manera?", "Estoy aquí para ayudarte. ¿Qué problema estás enfrentando?", "No te preocupes, estoy aquí para ayudarte a resolver tus problemas.", "Cuéntame más sobre tus problemas. Haré todo lo posible para ayudarte.", "Estoy aquí para escucharte y brindarte apoyo. ¿Qué está pasando?"
                                                    ],
                                                    'dificultades': [
                                                        "Entiendo que estés pasando por un momento difícil. ¿Cómo puedo ayudarte?", "¿En qué puedo ayudarte? Estoy aquí para brindarte apoyo.", "Lamento que estés enfrentando dificultades. ¿Puedo hacer algo para ayudarte?", "No estás solo/a. Cuéntame más sobre tus dificultades.", "Estoy aquí para escucharte y encontrar soluciones juntos/as."
                                                    ],
                                                    'inconvenientes': [
                                                        "¿Hay algún inconveniente con el que necesites ayuda? Estoy aquí para asistirte.", "Lamento escuchar que estás experimentando inconvenientes. ¿Cómo puedo ayudarte a resolverlos?", "No te preocupes, juntos/as encontraremos una solución a tus inconvenientes.", "¿Qué puedo hacer para ayudarte a superar estos inconvenientes?", "Estoy aquí para apoyarte en cualquier inconveniente que enfrentes."
                                                    ],
                                                    'preocupaciones': [
                                                        "Comprendo que tengas preocupaciones. ¿Hay algo en lo que pueda ayudarte?", "Estoy aquí para escucharte y ayudarte a aliviar tus preocupaciones.", "No te sientas solo/a. Puedes compartir tus preocupaciones conmigo.", "¿Qué te está preocupando en este momento? Estoy aquí para brindarte apoyo.", "Juntos/as encontraremos una solución para tus preocupaciones."
                                                    ],
                                                    'desafíos': [
                                                        "Los desafíos son parte de la vida. Estoy aquí para ayudarte a superarlos.", "Estoy aquí para apoyarte en la superación de tus desafíos.", "¿Enfrentando algún desafío en particular? Cuéntame más al respecto.", "No te rindas ante los desafíos. Juntos/as podemos encontrar una solución.", "¿Cómo puedo ayudarte a enfrentar tus desafíos?"
                                                    ],
                                                                 
                                               

    };

        // Agrega más respuestas según lo necesites
    };

    // Encuentra la mejor coincidencia entre la entrada del usuario y las claves de respuesta del bot
    const matchedKey = findBestMatch(userText.toLowerCase());
    if (matchedKey) {
        const responses = botResponses[matchedKey];
        const botReply = responses[Math.floor(Math.random() * responses.length)];
        return botReply;
    } else {
        return "No entendí tu mensaje, ¿puedes reformularlo?";
    }

// Esta función encuentra la mejor coincidencia entre la entrada del usuario y las claves de respuesta del bot
function findBestMatch(userText) {
    // Implementa la lógica para encontrar la mejor coincidencia
}

// Exportamos la función getBotResponse para que pueda ser utilizada desde otros archivos si es necesario
export { getBotResponse };


        