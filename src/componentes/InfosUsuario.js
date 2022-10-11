import React from "react";
import img from "./img/Magico.jpg";


function InfosUsuario(){
    return(
        <div>
            <img src={img} className="imagem-magico" alt="imagem do mágico segurando uma cartola me uma mão e na outra a varinha é realizando uma mágica"/>
            <h4>Nome do autor</h4>
        </div>
        
    )
}
export default InfosUsuario