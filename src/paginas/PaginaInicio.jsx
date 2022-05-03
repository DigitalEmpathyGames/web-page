import React from "react";
import Contactame from "../componentes/Contactame";
import Descripcion from "../componentes/Descripcion";
import Proyectos from "../componentes/Proyectos";
import SobreEstaPagina from "../componentes/SobreEstaPagina";
import Trayectoria from "../componentes/Trayectoria";
import useDatos from "../datos/useDatos";
import '../estilos/estilos.css';


const PaginaInicio = () => {
    const {
        datos,
        setDatos,
        espa,
        setEspa,
        spanish,
        english,
        idioma,
        setIdioma
    } = useDatos();

    const cambiarIdioma = () => {
        if(espa){
            setDatos(english);
            setIdioma('English');
        }else{
            setDatos(spanish);
            setIdioma('Español');
        }
        setEspa(!espa);
    }




    return(
        <>
            <div
                className="fondoPantalla centrador"
            >
                <div
                    className="contenedorPantalla"
                >

                    <div
                        className = "divNombre"
                        style={{position:'absolute',width:400,right:0}}
                        onClick={()=>{cambiarIdioma();}}
                    >
                        <div
                            className="contenedornombre bordeSuavizado"
                        >
                            <b className="fuenteNombre">{idioma}</b>
                        </div>
                    </div>

                    <div
                        className="barra1"
                    >
                        <div className="conetnedorFotoperfil">
                            <img className="fotoPerfil bordeRedondo"
                                src="https://raw.githubusercontent.com/DigitalEmpathyGames/imagenes/main/perfil.jpeg"
                                alt={datos.sobreMi.descripcion.detalle}
                            />
                        </div>
                    </div>
                    <div
                        className = "divNombre"
                    >
                        <div
                            className="contenedornombre bordeSuavizado"
                        >
                            <b className="fuenteNombre">Javier Echeverría</b>
                        </div>
                    </div>

                    <Descripcion
                        sobreMi = {datos.sobreMi}
                    />

                    <Proyectos 
                        proyectos = {datos.proyectos}
                        espa = {espa}
                    />
                    <Trayectoria
                        trayectoria={datos.trayectoria}
                    />
                    <Contactame
                        contactame={datos.contactame}
                    />
                    <SobreEstaPagina
                        sobreEstaPagina={datos.sobreEstaPagina}
                    />
                </div>
            </div>
        </>
    );

}

export default PaginaInicio;