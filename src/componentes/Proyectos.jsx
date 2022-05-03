import React from "react";
import Collapsible from "react-collapsible";

const Proyectos = ({proyectos, espa}) => {

    const cabecera = () =>{
        return(
            <>
                            <div
                                className="centrador"
                                style={{flex:1,marginTop:10,backgroundColor:''}}
                            >
                                <div
                                    className="bordeSuavizado centrador"
                                    style={{
                                        width:'30%',
                                        height:50,
                                        position:'relative',

                                        backgroundColor:'#FAE0EB'
                                    }}
                                >
                                    <b className="fuenteNombre">
                                        {proyectos.titulo}
                                    </b>
                                </div>
                            </div>
            </>
        );
    }

    return (
        <>
                    <Collapsible trigger={cabecera()}>
                        <div>
                            {
                              proyectos.proyectos.map(
                                  (item) => {
                                      return renderProyectos(item,espa)
                                  }
                              )  
                            }
                        </div>
                    </Collapsible>
        </>
    );

}


const renderProyectos = (proyecto,espa) =>{
    return (
        <div
            key={proyecto.titulo}
            className="contenedorDescripcion"
        >
            <div
                className="bordeSuavizado"
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor:'#E3C4E5',
                    display: 'flex',
                    flexDirection:'column'
                }}
            >
                <div
                    style={{backgroundColor:'',flex:5,display:'flex',flexDirection:'row'}}
                >
                    <div className="centrador"
                        style={{backgroundColor:'',flex:2,display:'flex'}}
                    >


                            <img 
                                style={{width:'16vw',height:'16vw',marginTop:20,marginBottom:20}}
                                className="fotoPerfil bordeRedondo"
                                src={proyecto.foto}
                                alt={proyecto.descripcion}
                            />

                    </div>
                    <div className="centrador"
                        style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                    >
                        <b className="fuenteNombre" style={{fontSize:'1.6vw'}}>
                            <strong>
                                {proyecto.titulo}
                            </strong>
                            <br/> <br/>
                                {proyecto.descripcion} <br/>
                                <i>{proyecto.lenguaje}</i>
                            <br/> <br/>
                            
                            <a href ={proyecto.enlace} style={{textDecoration:'none'}}>
                                <strong className="fuenteNombre">
                                    {espa ? 'Descargar':'Download'}
                                </strong> 
                            </a>
                            <br/><br/>
                            <a href ={proyecto.github} style={{textDecoration:'none'}}>
                                <strong className="fuenteNombre">
                                    git hub
                                </strong> 
                            </a>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Proyectos;