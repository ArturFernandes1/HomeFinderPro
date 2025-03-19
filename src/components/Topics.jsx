import { useState } from "react";
import "./Topics.scss";


export default function RealEstateFeatures() {
    return (
        <>
            <section className="global-tree">
                <div className="topics-container">
                    <h1 className="title-h1">Encontre o Imóvel dos Seus Sonhos com Facilidade e Segurança</h1>
                    <h2 className="sub-title-h2">Você está procurando o lar perfeito ou um investimento imobiliário seguro?</h2>
                    <section className="container">
                        <div className="sub-topics-1">
                            <h2>Modernidade</h2>
                        </div>
                        <div className="sub-topics-2">
                            <h2>Segurança</h2>
                        </div>
                        <div className="sub-topics-1">
                            <h2>Localização</h2>
                        </div>
                        <div className="sub-topics-2">
                            <h2>Sustentabilidade</h2>
                        </div>
                        <div className="sub-topics-1">
                            <h2>Valorização</h2>
                        </div>
                        <div className="sub-topics-2">
                            <h2>Conforto</h2>
                        </div>
                        <div className="sub-topics-1">
                            <h2>Sustentabilidade</h2>
                        </div>
                        <div className="sub-topics-2">
                            <h2>Valorização</h2>
                        </div>
                        <div className="sub-topics-1">
                            <h2>Conforto</h2>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}