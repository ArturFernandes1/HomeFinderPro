import React from "react";
import "./NavigationBar.scss"
import ScriptButton from "./ScriptButton.jsx"; // Importando o botão atualizado
import ButtonNavbar from "./ButtonNavbar";

export default function NavigationBar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <ScriptButton />
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Ínicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Operation">Como funciona?</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Support">Suporte</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/About">Sobre mim</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Scheduling">Agendamento</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Doubts">Dúvidas</a>
                    </li>

                    {/* Botão importado e usado dentro do componente */}
                    <ButtonNavbar/>

                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
