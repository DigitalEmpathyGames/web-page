import React from "react";
import Collapsible from "react-collapsible";

const SobreEstaPagina = ({sobreEstaPagina}) =>{


    return(
        <>

                <div
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
                                        style={{width:'16vw',height:'16vw',marginLeft:20,marginBottom:20}}
                                        className="fotoPerfil bordeRedondo"
                                        src={sobreEstaPagina.foto}
                                        alt={sobreEstaPagina.descripcion}
                                    />

                            </div>
                            <div className="centrador"
                                style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                            >
                                <b className="fuenteNombre" style={{fontSize:'1.3vw'}}>
                                        <strong className="fuenteNombre" style={{fontSize:'2.3vw'}}>
                                            {sobreEstaPagina.titulo}
                                        </strong> 
                                    <br/><br/>
                                        <strong className="fuenteNombre">
                                           {sobreEstaPagina.subtitulo}
                                        </strong> 
                                    <br/><br/>
                                    <strong className="fuenteNombre">
                                           {sobreEstaPagina.descripcion}
                                        </strong> 
                                    <br/><br/>
                                    {sobreEstaPagina.lenguaje}
                                    <br/><br/>
                                    <a href ={sobreEstaPagina.github} style={{textDecoration:'none'}}>
                                        <strong className="fuenteNombre">
                                            git hub
                                        </strong> 
                                    </a>
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );

}
export default SobreEstaPagina;