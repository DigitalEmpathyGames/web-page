import React, { useState } from "react";

const useDatos = () => {
    const spanish = {
        nombre: 'Javier Echeverría',
        sobreMi : {
            titulo:'Sobre Mi',
            descripcion : {
                titulo: 'Universidad Técnica Federico Santa María',
                detalle: 'Con una gran energía por aprender se ha desempeñado en diferentes sectores del desarrollo de tecnologias. "Menos es más", es por eso sus aplicaciones se caracterizan por ser muy faciles de usar.',
                destacado : 'Servidores, Agile, Bases de datos, Aplicaciones web, Aplicaciones REST, Aplicaciones mobiles, Videojuegos.'
            },
            foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/fotoPagina2.jpg'
        },
        proyectos:{
            titulo:'Proyectos publicados',
            proyectos:[
            {
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/catculadora.png',
                titulo:'Catculadora Kawaii',
                descripcion:'Realiza Cálculos y guarda los resultados para revisarlos cuando quieras.',
                lenguaje:'React-native, javascript, storage, css, android studio, animations.',
                enlace:'https://play.google.com/store/apps/details?id=com.digitalempathygames.catculadora',
                github:'https://github.com/DigitalEmpathyGames/Katculadora/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/iconoPlanner.png',
                titulo:'Planner Kawaii',
                descripcion:'Pon una alarma en el calendario para que te recuerde tus actividades.',
                lenguaje:'React-native, javascript, storage, css, android studio, animations, modulo en java',
                enlace:'https://play.google.com/store/apps/details?id=com.planerkawaii',
                github:'https://github.com/DigitalEmpathyGames/PlannerKawaii/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/puntoDeVenta.jpg',
                titulo:'Punto de venta mobile. Android.',
                descripcion:'Punto de venta en la palama de tu mano, Escanea productos y emite boletas físicas y electrónicas',
                lenguaje:'TypeScript, Angular, Ionic.',
                enlace:'https://drive.google.com/file/d/10aZUVWPs4SIikN59VTiSspAY__bE8cTt/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/PuntoVentaMobile/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/soulsPet.png',
                titulo:'Souls Pet.',
                descripcion:'Videojuego de mascotas espirituales.',
                lenguaje:'Unity. C#, Firebase, Google cloud function, Android. Illustrator, Photoshop.',
                enlace:'https://drive.google.com/file/d/1wvvsEwqEqAWw2d8a9FE9l3u7zzf3RTVi/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/SoulsPet/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/useFullorLess.png',
                titulo:'Use FULLorLESS.',
                descripcion:'Videojuego de selección de opciones para Android.',
                lenguaje:'Unity. C#, Google function, Android. Illustrator, Photoshop.',
                enlace:'https://drive.google.com/file/d/1eqAKpXxehFcbeSz0jx5bDOOmA5mo8szd/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/UseFULLorLESS/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/CorreSaurio.png',
                titulo:'Corre Saurio.',
                descripcion:'Videojuego endless para Android.',
                lenguaje:'Unity. C#, Google function, Android.',
                enlace:'https://drive.google.com/file/d/13Q8oYog9kD1fe24e2ylZ1VLsHMNcDXzT/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/CorreSaurio.git'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/coVidComunalLite.png',
                titulo:'Covid Comunal LITE',
                descripcion:'Aplicación de Android para ver los casos por cada comuna del pais. (Servidores desactivados por falta de presupuesto)',
                lenguaje:'TypeScript, Angular, Ionic, Node,pm2, SQL Lite, Scrapping, Linux Ubuntu, ngnx, Crontab',
                enlace:'https://drive.google.com/file/d/1rfqa-7qe7U3_SmNDhFvxln_Ojd8pEano/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/CovidPorComuna/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/autoadministrable.png',
                titulo:'Blog autoadministrable',
                descripcion:'Mediante una plantilla estática y creada en vue, se puede crear un blog autoadministrable.',
                lenguaje:'Nuxt, Vuew, CMS, Javascript, node, firebase.',
                enlace:'https://con-firelink.firebaseapp.com/',
                github:'https://con-firelink.firebaseapp.com/'
            },{
                foto:'https://js13kgames.com/games/debo-estar-en-moda/__big.jpg',
                titulo:'Debo estar en moda.',
                descripcion:'Entrada para Game jam Js13KGames.',
                lenguaje:'Javascript. Física de salto creada por mi',
                enlace:'https://js13kgames.com/entries/debo-estar-en-moda',
                github:'https://github.com/DigitalEmpathyGames/Games-js13k2018'
            }
        ]},
        trayectoria:{
            titulo:'Trayectoria',
            trayectoria:[
                {
                    lugar:'SAG',
                    puesto:'Desarrollador',
                    descripcion:'Analista desarrollador para ECZE, Certificados Zoosanitarios de exportación.',
                    foto:'https://media-exp1.licdn.com/dms/image/C4D0BAQH6kwdrMsu-CA/company-logo_200_200/0/1535730740316?e=2159024400&v=beta&t=bcVO-AY7DcYn5GjzHJI9OBalnWp1b_pgPkiKmxwsv4M'
                    ,lenguaje:'MVC , visual studio 2010 y 2017, Oracle, SQL server, SOAP, Entity Framework, LinQ, micro servicios Rest.'
                },{
                    lugar:'DigitalEmpathyGames',
                    puesto:'Desarrollador',
                    descripcion:'Una pequeña compañía local desarrolladora de videojuegos. Juegos mobiles.',
                    foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKZGa564MPJaetkhScyscuynRDzbNoipuPAz2vD_1H40L1GJPcgEI3nwDY_JTwqXcOxo&usqp=CAU'
                    ,lenguaje: 'Unity 2D, C#, Firebase cloud function Firebase database, Firebase hosting, googlePlay services. Wordpress, woocommerce. Storyblok, Node modules, express, Vue.'
                },{
                    lugar:'INGERENCIA',
                    puesto:'Desarrollador',
                    descripcion:'Analista desarrollador de Producto de tipo PRICING de otorgamiento de tasas de crédito. Cumplí función de creación de nuevos mantenedores para la aplicación, corrección de errores existentes, otorgué ayuda en la toma de decisiones del avance del desarrollo del producto, también referente del producto. Gestioné las tareas de desarrollo utilizando la metodología KANBAN',
                    foto:'https://media-exp1.licdn.com/dms/image/C4E0BAQGirOVnwBHGyg/company-logo_200_200/0/1621387189146?e=2147483647&v=beta&t=-i6-ZDCsLTyNkMpZnvGpnFMEVEPcBlsWVUOZxS2_CsI'
                    ,lenguaje:'Java J2EE, utilizando Spring, Struts, Jquery, MyBatis. DWR y Oracle DB, KANBAN.'
                },{
                    lugar:'Accenture',
                    puesto:'Trainee',
                    descripcion:'Plataforma en línea de VISA chilena internacional, labores de programación. Proyecto HTML, C#: Actualización de estructura y contenido de contratos para seguros MetLife y Cardif. Análisis, Diseño e implementación de propuestas de usuario - COBOL (BATCH – JCL – DB2): Análisis de procesos existentes en COBOL y generación de diseños técnicos para cada uno de ellos, además de implementaciones requeridas por usuario. Mantención de Garantías de créditos. Resolución de Incidencias y apoyos requeridos por el usuario.',
                    foto:'https://infonegocios.info/uploads/accentur-logo-top-100-brands-01-cba.jpg',
                    lenguaje:'C#, HTML, COBOL (CICS-DB2), JS, SQL SERVER.'
                },{
                    lugar:'Zeke',
                    puesto:'Trainee',
                    descripcion:'Proyecto destinado a crear completamente una nueva plataforma en línea para el Observatorio regional de SUBDERE.',
                    foto:'https://media-exp1.licdn.com/dms/image/C4E0BAQF8cbxmmftGbA/company-logo_200_200/0/1565988080738?e=2147483647&v=beta&t=2fjYE0QDTSMMINpY8Bw8XGFQLUq3au_6P4BqntcqZG0',
                    lenguaje:'Java EE, HTML 5, JS, Boostrap, Mongo DB.'
                }
            ]
        },
        contactame:{
            titulo:'Contactame',
            whatsapp:'https://wa.me/56978935950',
            youtube:'',
            twitch:'',
            instagram:'',
            facebook:'',
            correo:'javier.echeverria.13@sansano.usm.cl',
            foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/contactame.jpg'
        },
        sobreEstaPagina:{
            titulo:'Sobre mi trabajo',
            subtitulo:'Apps Kawaii',
            descripcion:'Caracterizadas por un estilo kawaii, mis Apps presentan una interfaz llamativa y muy facil de usar, siempre personalizadas y con las funciones por descubrir.',
            foto:'https://i.pinimg.com/originals/f4/aa/74/f4aa7420e5965a39af3a47284fdd3a41.jpg',
            lenguaje:'React Js',
            github:'https://github.com/DigitalEmpathyGames'
        }
    }

    const english = {
        nombre: 'Javier Echeverría',
        sobreMi : {
            titulo:'About Me',
            descripcion : {
                titulo: 'Federico Santa María University',
                detalle: 'With a great energy to learn, he has worked in different sectors of technology development. "Less is more", that is why hes applications are characterized by being very easy to use.',
                destacado : 'Servers, Agile, Databases, Web applications, REST applications, Mobile applications, Video games.'
            },
            foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/fotoPagina2.jpg'
        },
        proyectos:{
            titulo:'Published projects',
            proyectos:[
            {
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/catculadora.png',
                titulo:'Catculadora Kawaii',
                descripcion:'Make calculations and save the results to review them whenever you want.',
                lenguaje:'React-native, javascript, storage, css, android studio, animations.',
                enlace:'https://play.google.com/store/apps/details?id=com.digitalempathygames.catculadora',
                github:'https://github.com/DigitalEmpathyGames/Katculadora/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/iconoPlanner.png',
                titulo:'Planner Kawaii',
                descripcion:'Set an alarm on the calendar to remind you your activities.',
                lenguaje:'React-native, javascript, storage, css, android studio, animations, Java module',
                enlace:'https://play.google.com/store/apps/details?id=com.planerkawaii',
                github:'https://github.com/DigitalEmpathyGames/PlannerKawaii/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/puntoDeVenta.jpg',
                titulo:'Mobile point of sale. Android.',
                descripcion:'Point of sale in the palm of your hand, scan items and print physical and electronic tickets',
                lenguaje:'TypeScript, Angular, Ionic.',
                enlace:'https://drive.google.com/file/d/10aZUVWPs4SIikN59VTiSspAY__bE8cTt/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/PuntoVentaMobile/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/soulsPet.png',
                titulo:'Souls Pet.',
                descripcion:'Spiritual pets videogame.',
                lenguaje:'Unity. C#, Firebase, Google cloud function, Android. Illustrator, Photoshop.',
                enlace:'https://drive.google.com/file/d/1wvvsEwqEqAWw2d8a9FE9l3u7zzf3RTVi/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/SoulsPet/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/useFullorLess.png',
                titulo:'Use FULLorLESS.',
                descripcion:'Choice selection video game for Android.',
                lenguaje:'Unity. C#, Google function, Android. Illustrator, Photoshop.',
                enlace:'https://drive.google.com/file/d/1eqAKpXxehFcbeSz0jx5bDOOmA5mo8szd/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/UseFULLorLESS/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/CorreSaurio.png',
                titulo:'Corre Saurio.',
                descripcion:'Endless game for android',
                lenguaje:'Unity. C#, Google function, Android.',
                enlace:'https://drive.google.com/file/d/13Q8oYog9kD1fe24e2ylZ1VLsHMNcDXzT/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/CorreSaurio.git'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/coVidComunalLite.png',
                titulo:'Covid Comunal LITE',
                descripcion:'Android application to see the COVID-19 cases for each state in the country. (Servers desactivated, no money)',
                lenguaje:'TypeScript, Angular, Ionic, Node,pm2, SQL Lite, Scrapping, Linux Ubuntu, ngnx, Crontab',
                enlace:'https://drive.google.com/file/d/1rfqa-7qe7U3_SmNDhFvxln_Ojd8pEano/view?usp=sharing',
                github:'https://github.com/DigitalEmpathyGames/CovidPorComuna/tree/master'
            },{
                foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/autoadministrable.png',
                titulo:'Blog autoadministrable',
                descripcion:'Using a static template and created in vue, you can create a self-managing blog.',
                lenguaje:' Nuxt, Vuew, CMS, Javascript, node, firebase.',
                enlace:'https://con-firelink.firebaseapp.com/',
                github:'https://con-firelink.firebaseapp.com/'
            },{
                foto:'https://js13kgames.com/games/debo-estar-en-moda/__big.jpg',
                titulo:'Debo estar en moda.',
                descripcion:'participation in Js13KGames Game jam.',
                lenguaje:'Javascript. Jump phisics made by me.',
                enlace:'https://js13kgames.com/entries/debo-estar-en-moda',
                github:'https://github.com/DigitalEmpathyGames/Games-js13k2018'
            }
        ]},
        trayectoria:{
            titulo:'Trajectory',
            trayectoria:[
                {
                    lugar:'SAG',
                    puesto:'Developer',
                    descripcion:'Developer analyst for ECZE, Export Zoosanitary Certificates.',
                    foto:'https://media-exp1.licdn.com/dms/image/C4D0BAQH6kwdrMsu-CA/company-logo_200_200/0/1535730740316?e=2159024400&v=beta&t=bcVO-AY7DcYn5GjzHJI9OBalnWp1b_pgPkiKmxwsv4M'
                    ,lenguaje:'MVC , visual studio 2010 y 2017, Oracle, SQL server, SOAP, Entity Framework, LinQ, micro servicios Rest.'
                },{
                    lugar:'DigitalEmpathyGames',
                    puesto:'Developer',
                    descripcion:'A small local video game development company. mobile games.',
                    foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKZGa564MPJaetkhScyscuynRDzbNoipuPAz2vD_1H40L1GJPcgEI3nwDY_JTwqXcOxo&usqp=CAU'
                    ,lenguaje: 'Unity 2D, C#, Firebase cloud function Firebase database, Firebase hosting, googlePlay services. Wordpress, woocommerce. Storyblok, Node modules, express, Vue.'
                },{
                    lugar:'INGERENCIA',
                    puesto:'Developer',
                    descripcion:'Analyst developer of a PRICING-type Product for the granting of credit rates. I fulfilled the function of creating new maintainers for the application, correcting existing errors, providing help in decisions regarding the advancement of product development. I managed the development tasks using the KANBAN methodology',
                    foto:'https://media-exp1.licdn.com/dms/image/C4E0BAQGirOVnwBHGyg/company-logo_200_200/0/1621387189146?e=2147483647&v=beta&t=-i6-ZDCsLTyNkMpZnvGpnFMEVEPcBlsWVUOZxS2_CsI'
                    ,lenguaje:'Java J2EE, Spring, Struts, Jquery, MyBatis. DWR y Oracle DB, KANBAN.'
                },{
                    lugar:'Accenture',
                    puesto:'Trainee',
                    descripcion:'International Chilean VISA online platform, programming tasks. HTML Project, C#: Updating the structure and content of contracts for MetLife and Cardif insurance. Analysis, Design and implementation of user proposals - COBOL (BATCH – JCL – DB2): Analysis of existing processes in COBOL and generation of technical designs for each of them, user requirements. Maintenance of Credit Guarantees. bug fixing.',
                    foto:'https://infonegocios.info/uploads/accentur-logo-top-100-brands-01-cba.jpg',
                    lenguaje:'C#, HTML, COBOL (CICS-DB2), JS, SQL SERVER.'
                },{
                    lugar:'Zeke',
                    puesto:'Trainee',
                    descripcion:'Help with project aimed at completely creating a new online platform for the SUBDERE Regional Observatory.',
                    foto:'https://media-exp1.licdn.com/dms/image/C4E0BAQF8cbxmmftGbA/company-logo_200_200/0/1565988080738?e=2147483647&v=beta&t=2fjYE0QDTSMMINpY8Bw8XGFQLUq3au_6P4BqntcqZG0',
                    lenguaje:'Java EE, HTML 5, JS, Boostrap, Mongo DB.'
                }
            ]
        },
        contactame:{
            titulo:'Contact me',
            whatsapp:'https://wa.me/56978935950',
            youtube:'',
            twitch:'',
            instagram:'',
            facebook:'',
            correo:'javier.echeverria.13@sansano.usm.cl',
            foto:'https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/contactame.jpg'
        },
        sobreEstaPagina:{
            titulo:'About my work',
            subtitulo:'Kawaii Apps',
            descripcion:'Characterized by a kawaii style, my Apps have a cute and very easy to use interface, always personalized and with functions to discover.',
            foto:'https://i.pinimg.com/originals/f4/aa/74/f4aa7420e5965a39af3a47284fdd3a41.jpg',
            lenguaje:'React Js',
            github:'https://github.com/DigitalEmpathyGames'
        }
    }

    const [datos,setDatos] = useState(spanish);
    const [espa,setEspa] = useState(true);
    const [idioma,setIdioma] = useState('Español');
    return{
        datos,
        setDatos,
        espa,
        setEspa,
        spanish,
        english,
        idioma,
        setIdioma
    }

}

export default useDatos;

