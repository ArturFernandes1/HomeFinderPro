import React from "react";
import './MiniCards.scss';
import Check from '../assets/check-icon.jpg'
import Catalogo from '../assets/catalogo-icon.jpg'
import Financing from '../assets/financing-icon.jpg'
import Personalization from '../assets/personalization.jpg'

export default function MiniCards() {
    return (
        <>
            <section className="global-two">
                <h1 className="section-title">Encontre o Imóvel dos Seus Sonhos com Facilidade e Segurança!</h1>
                <h2 className="section-sub-title">Você está procurando o lar perfeito ou um investimento imobiliário seguro?</h2>
                <section className="main-section">
                    <div className="sub-cards">
                        <img src={Catalogo} alt="Imagem de levantamneto financeiro" />
                        <h2>Catálogo Exclusivo</h2>
                        <p>Oferecemos uma seleção diversificada de casas, apartamentos e imóveis comerciais, sempre atualizada para garantir as melhores oportunidades do mercado.</p>
                    </div>
                    <div className="sub-cards">
                    <img className="personalite" src={Financing} alt="Imagem de levantamneto financeiro" />
                        <h2>Atendimento Personalizado</h2>
                        <p>Com um corretor experiente, você recebe suporte completo para encontrar o imóvel ideal e tornar sua compra simples e eficiente.</p>
                    </div>
                    <div className="sub-cards">
                    <img src={Check} alt="Imagem de levantamneto financeiro" />
                        <h2>Processo Seguro e Transparente</h2>
                        <p>Negociação clara, sem burocracia. Todos os imóveis possuem documentação regularizada, garantindo segurança total.</p>
                    </div>
                    <div className="sub-cards">
                    <img src={Financing} alt="Imagem de levantamneto financeiro" />
                        <h2>Simulação de Financiamento</h2>
                        <p>Descubra as melhores condições de pagamento com uma simulação detalhada, ajudando você a planejar seu investimento.</p>
                    </div>
                </section>
            </section>
        </>
    );
}