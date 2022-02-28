import React, { useState } from "react";

import './TamanhoImagem.css'

import imagemInicial from '../../../assets/img/travel.jpg'

export default function TamanhoImagem() {


    const [imagem, setImagem] = useState(null);
    const [pixel, setPixel] = useState("0 x 0");
    const [centimetro, setCentimetro] = useState("0 x 0");

    function selecionaImagem(value) {
        //console.log(value)

        const reader = new FileReader();
        const img = new Image();

        img.onload = () => {

            setPixel(img.width + " x " + img.height)

            const larguraCentimetro = img.width * 2.54 / 96
            const alturaCentimetro = img.height * 2.54 / 96
            setCentimetro(larguraCentimetro + " x " + alturaCentimetro)
        };



        reader.addEventListener("load", () => {
            setImagem(reader.result);
            reader.onloadend = function (ended) {
                img.src = ended.target.result;
            }


        });
        reader.readAsDataURL(value[0]);
    }


    return (

        <div id="tamanhoImagemContent">
            <h3>Descubra o Tamanho da Imagem</h3>

            <div id="painel-tamanho-imagem">
                <div id="painel-tamanho-imagem-esquerda">
                    {imagem && <img src={imagem} alt="Logo" />
                    }

                    {!imagem && <div className="imagem-esquerda" alt="Logo" > Vazio </div>
                    }

                    <label for="arquivo">Selecionar Imagem</label>
                    <input type="file" name="arquivo" id="arquivo" onChange={(e) => selecionaImagem(e.target.files)} accept="image/png, image/jpeg" />


                </div>

                <div id="painel-tamanho-imagem-direita">

                    <label>Centímetros</label>
                    <input type="text" value={centimetro} />

                    <label>Pixels</label>
                    <input type="text" value={pixel} />
                </div>
            </div>
        </div>

    )

}