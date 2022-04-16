import React from "react";
import "./About.css";
import image from "../image/Labinvitro.png"

function About (){
    return(
    <div className="about">
        <h1>Bienveni@, mi nombre es Wendy Medina</h1>
        <div className="contenedorimgtext"><img className="fotowendy" src={image} alt=""/>
            <div className="contenerdortext">
                <p>Soy Bióloga hace aproximadamente 3 años, con experiencia en el area de investigación en biotecnologia vegetal. Me encantan las plantas, en especial las orquídeas y las aves</p>
                <p>Desde hace un tiempo me ha venido interesando el area del desarrollo web, por tal motivo decidí cambiar de carrera, o quizas fusionar mi carrera con el desarrollo web, porque creo que esta area tiene mucho potencial para poder tener mayor alcance en la ciencia</p>
                
                <ul>
                    Durante la trayectoria de aprendizaje realizada en el camp del TOP de MAKE IT REAL, he podido generar nuevos conocimientos en:
                    <li>Git</li>
                    <li>React</li>
                    <li>CSS</li>
                </ul>
                <p>Si quieres contactarme, me puedes escibir a mi correo electrónico endyleyms@gmail.com</p>
                <h3>Si quieres ver mis trabajos, puedes buscarme en mi repositorio de <a href="https://github.com/endyleyms">GITHUB</a> </h3>   
            </div>

        </div>
        
        
     </div>
    );
}


export default About;