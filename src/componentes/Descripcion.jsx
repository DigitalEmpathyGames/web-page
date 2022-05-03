import React from "react";
import Collapsible from "react-collapsible";
import '../estilos/estilos.css';

const Descripcion = ({sobreMi}) => {

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
                                        {sobreMi.titulo}
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
                            className="descripcion bordeSuavizado"
                            style={{flexDirection:'column'}}
                        >
                            <div
                                style={{backgroundColor:'',flex:5,display:'flex',flexDirection:'row'}}
                            >
                                <div className="centrador"
                                    style={{backgroundColor:'',flex:2,display:'flex'}}
                                >

                                    
                                        <img 
                                            style={{width:'15vw',height:'15vw',marginTop:20,marginBottom:20}}
                                            className="fotoPerfil bordeRedondo"
                                            src={sobreMi.foto}
                                            alt={sobreMi.descripcion.detalle} 
                                        />

                                </div>
                                <div className="centrador"
                                    style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                                >
                                    <b className="fuenteNombre" style={{fontSize:'1.2vw',wordBreak:'break-all'}}>
                                        <strong>
                                            {sobreMi.descripcion.titulo}
                                        </strong>
                                        <br/> <br/>
                                            {sobreMi.descripcion.detalle} 
                                        <br/> <br/>
                                        <strong>
                                            {sobreMi.descripcion.destacado}   
                                        </strong>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Collapsible>
        </>
    );

}

export default Descripcion;