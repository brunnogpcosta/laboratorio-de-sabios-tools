import React, { useState } from "react";

import './FotoPorQuatro.css'

import Descricao from "../../../components/Descricao/Descricao";

import camera from '../../../assets/img/camera.svg'

export default function FotoPorQuatro() {

    const [capturado, setCapturado] = useState(false)
    const [qtd, setQtd] = useState(1)


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
        var canvas = document.getElementById("canvas");

        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;

        var context = canvas.getContext('2d');

        var x = 26
        var y = 10
        var w = video.videoWidth - 526.614173229
        var h = video.videoHeight - 328.82



        //console.log(qtd)

        if (qtd <= 5) {
            for (var i = 1; i <= qtd; i++) {
                context.drawImage(video, x, y, w, h)
                x = x + w + 5

            }
        }

        if (qtd === 10) {
            for (var i = 1; i <= qtd; i++) {
                if (i <= 5) {
                    context.drawImage(video, x, y, w, h)
                    x = x + w + 5
                } else {
                    if (i === 6) {
                        y = y + h + 5
                        x = 26
                    }
                    context.drawImage(video, x, y, w, h)
                    x = x + w + 5

                }
            }
        }


        if (qtd === 15) {
            for (var i = 1; i <= qtd; i++) {
                if (i <= 5) {
                    context.drawImage(video, x, y, w, h)
                    x = x + w + 5
                } else if (i <= 10) {
                    if (i === 6) {
                        y = y + h + 5
                        x = 26
                    }
                    context.drawImage(video, x, y, w, h)
                    x = x + w + 5

                } else {
                    if (i === 11) {
                        y = y + h + 5
                        x = 26
                    }
                    context.drawImage(video, x, y, w, h)
                    x = x + w + 5
                }
            }
        }


        setCapturado(true)

    }

    function qtdFotos(value) {
        //console.log("valor: " + value)
        switch (value) {
            case 'uma':
                setQtd(1)
                break;
            case 'cinco':
                setQtd(5)
                break
            case 'dez':
                setQtd(10)
                break;
            case 'quinze':
                setQtd(15)
                break;
            default:
                setQtd(1)
        }

    }


    function download() {
        var canvas = document.getElementById("canvas");
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        var link = document.createElement('a');
        link.download = "laboratoriodesabios_imagem_3_x_4.png";
        link.href = image;
        link.click();

    }


    return (

        <div id="fotoContent">
            <h3>Imprimir Foto 3 x 4</h3>
            <Descricao passaDescricao="34217f7c-7826-42e6-a814-369598419908"></Descricao>


            <label for="cars">Quantidade de fotos para impressão</label>

            <select name="cars" id="cars" onChange={e => qtdFotos(e.target.value)}>
                <option value="um">Uma</option>
                <option value="cinco">Cinco</option>
                <option value="dez">Dez</option>
                <option value="quinze">Quinze</option>
            </select>

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
                        <button onClick={download}>Baixar</button>
                    </div>
                </div>
            </div>

        </div>
    )

}