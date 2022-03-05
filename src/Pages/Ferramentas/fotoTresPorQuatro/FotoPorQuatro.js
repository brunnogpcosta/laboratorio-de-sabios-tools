import React, { useState } from "react";

import './FotoPorQuatro.css'

import Descricao from "../../../components/Descricao/Descricao";

import camera from '../../../assets/img/camera.svg'

export default function FotoPorQuatro() {

    const [capturado, setCapturado] = useState(false)


    var video = ""
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (mediaStream) {
            video = document.querySelector('#foto-painel-capturar-video');

            video.srcObject = mediaStream;
            video.play();
        })
        .catch(function (err) {
            console.log('Não há permissões para acessar a webcam')
        })


    function capturar() {
      

        var canvas = document.querySelector("#canvas");
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0)
        setCapturado(true)

    }


    return (

        <div id="fotoContent">
            <h3>Foto 3 x 4</h3>
            <Descricao passaDescricao="34217f7c-7826-42e6-a814-369598419908"></Descricao>


            <div id="foto-painel">


                <div id="foto-painel-capturar">
                    <video id="foto-painel-capturar-video"></video>
                    <div>
                        <button onClick={capturar}>Capturar</button>
                    </div>
                </div>


                <div id="foto-painel-capturado">
                  <canvas id='canvas' src={camera}></canvas>
                
                    <div>
                        <button onClick={capturar}>Salvar</button>
                    </div>
                </div>
            </div>

        </div>
    )

}