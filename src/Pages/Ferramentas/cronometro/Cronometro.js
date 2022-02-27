import React, { useState, useEffect } from 'react'

import './Cronometro.css'


export default function Cronometro() {

    const [hora, setHora] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [iniciar, setIniciar] = useState(false)
    const [terminar, setTerminar] = useState(false)
    const [corBotaoIniciar, setCorBotaoIniciar] = useState("#31a06c")
    const [corFonte, setCorFonte] = useState("#fff")
    const [ultimoTempo, setUltimoTempo] = useState("")



    useEffect(() => {
        //console.log("Iniciar: " + iniciar)
        if (iniciar === true) {
            const intervalId = setInterval(() => {
                trataTempo()
            }, 1000);
            return () => clearInterval(intervalId);
        }

    }, [iniciar]);




    useEffect(() => {
        trataCronometro()
    }, [segundos]);

    function trataTempo() {
        setSegundos(sec => sec + 1)
        trataCronometro()
    }

    function trataCronometro() {
        //console.log("Segundos: " + segundos)

        if (segundos === 60) {
            setMinutos(minutos + 1)
            setSegundos(0)

        }

        if (minutos === 60) {
            setHora(hora + 1)
            setMinutos(0)

        }
        if (hora === 24) {
            setHora(0)
            setMinutos(0)
            setSegundos(0)

        }
    }



    function iniciarCronometro() {
        setTerminar(false)
        setIniciar(iniciar === false ? true : false)
        setCorFonte(iniciar === false ? "#000" : "#fff")
        setCorBotaoIniciar(iniciar === false ? "#efefef" : "#31a06c")
    }

    function terminarCronometro() {
        setUltimoTempo(hora +":"+minutos +":"+segundos)
        setIniciar(false)
        setTerminar(true)
        setMinutos(0)
        setHora(0)
        setSegundos(0)

    }



    return (
        <div id="cronometroContent">
        <h3> Cronômetro </h3>

{terminar&&
            <div className='ultimoTempo' > Último Tempo: {ultimoTempo} </div> 
} 
{!terminar&&
            <div className='ultimoTempo' >Tempo</div> 
}
           <div id="relogio">

                    <ul id="cronometro" >
                        <li id="hora" > {hora < 10 ? "0" + hora : hora}:</li> 
                        <li id="minutos" > {minutos < 10 ? "0" + minutos : minutos}:</li> 
                        <li id="segundos" > {segundos < 10 ? "0" + segundos : segundos}</li> 
                    </ul> 
            </div>

        <div id="botoes" >
            <div className='meusBotoes'>
                <button style={{ background: corBotaoIniciar, border: '1px solid #767676', color: corFonte }} onClick={iniciarCronometro} > {iniciar === false ? "Iniciar" : "Pausar"} </button> 
                <button onClick={terminarCronometro} style={{ background: 'coral', border: '1px solid #767676', color: '#fff' }}> Terminar </button> 
            </div> 
        </div>

        </div>
                                                    )


}