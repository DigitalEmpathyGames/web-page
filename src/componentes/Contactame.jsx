import React from "react";
import Collapsible from "react-collapsible";

const Contactame = ({contactame}) =>{
    
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
                                        {contactame.titulo}
                                    </b>
                                </div>
                            </div>
            </>
        );
    }

    return(
        <>
            <Collapsible trigger={cabecera()}>
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
                                        style={{width:'16vw',height:'16vw',marginBottom:20,marginTop:20}}
                                        className="fotoPerfil bordeRedondo"
                                        src={contactame.foto}
                                        alt={contactame.titulo}
                                    />

                            </div>
                            <div className="centrador"
                                style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                            >
                                <b className="fuenteNombre" style={{fontSize:'1.6vw'}}>
                                    <a href ={contactame.whatsapp} style={{textDecoration:'none'}}>
                                        <strong className="fuenteNombre">
                                            Whats App
                                        </strong> 
                                    </a>
                                    <br/><br/>
                                        <strong className="fuenteNombre">
                                            {contactame.correo}
                                        </strong> 
                                    <br/><br/>
                                </b>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapsible>
        </>
    );

}

export default Contactame;