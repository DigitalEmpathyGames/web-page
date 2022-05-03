import React from "react";
import Collapsible from "react-collapsible";

const Trayectoria = ({trayectoria}) =>{
    
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
                                        {trayectoria.titulo}
                                    </b>
                                </div>
                            </div>
            </>
        );
    }

    return(
        <>
                    <Collapsible trigger={cabecera()}>
                        <div>
                            {
                              trayectoria.trayectoria.map(
                                  (item) => {
                                      return renderProyectos(item)
                                  }
                              )  
                            }
                        </div>
                    </Collapsible>
        </>
    );

}



const renderProyectos = (trayectoria) =>{
    return (
        <div
            key={trayectoria.lugar}
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
                                src={trayectoria.foto}
                                alt={trayectoria.descripcion}
                            />

                    </div>
                    <div className="centrador"
                        style={{backgroundColor:'',flex:5,display:'flex',margin:10}}
                    >
                        <b className="fuenteNombre" style={{fontSize:'1.6vw'}}>
                            <strong>
                                {trayectoria.lugar}
                            </strong>
                            <br/>
                            {trayectoria.puesto}
                            <br/> <br/>
                                {trayectoria.descripcion} <br/><br/>
                                <i>{trayectoria.lenguaje}</i>
                            <br/>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Trayectoria;
