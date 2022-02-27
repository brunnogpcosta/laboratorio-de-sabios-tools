import React,{useState, useEffect} from 'react'

import './Cronometro.css'


export default function Cronometro (){

    const [hora, setHora] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [pausar, setPausar] = useState(false)
    const [iniciar, setIniciar] = useState(false)
    const [terminar, setTerminar] = useState(false)


        useEffect(() => {
          handleCronometer()
         
            }, []);
    
   
            function handleCronometer(){
                console.log("entrou" + iniciar + pausar)
                if(iniciar === true && pausar === false){
                        const intervalId =  setInterval(() => {
                            
                            setSegundos(sec => sec + 1)
                            trataCronometro()
                        }, 1000);
                        return () => clearInterval(intervalId);
                 }
                }
 

      function trataCronometro(){
          
            if(segundos === 60){
                setMinutos(minutos + 1)
                setSegundos(0)
        
            }

            if(minutos === 60){
                setHora(hora + 1)
                setMinutos(0)
        
            }
            if(hora === 24){
                setHora(0)
                setMinutos(0)
                setSegundos(0)
        
            }
        }


function pausarCronometro(){
    setPausar(true)
}

function iniciarCronometro(){
    setIniciar(true)
    handleCronometer()
}

function terminarCronometro(){
    setTerminar(true)
}



return(
    <div id="cronometroContent">
    <h3>Cronômetro</h3>

<div id="relogio">
 <ul id="cronometro">
        <li id="hora">{hora}:</li>
        <li id="minutos">{minutos}:</li>
        <li id="segundos">{segundos}</li>
 </ul>
 </div>  

<div id="botoes">
    <div className='meusBotoes'>
    <button onClick={iniciarCronometro}>Iniciar</button>
    <button>Pausar</button>
    <button>Terminar</button>
    </div>
</div>

    </div>
    )


}