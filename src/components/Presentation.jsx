import React from 'react';
import './Presentation.scss'; // Se você quiser adicionar algum estilo
import Imagem01 from '../assets/persona.png'; // Caminho da imagem

const Presentation = () => {
  return (
    <div className='global'>
      <div className="presentation-container">
          <div className="presentationOne">
              <h1 className='title'>Encontre o seu imóvel dos Sonhos</h1>
              <p>
              Olá! Meu nome é [Nome do Corretor] e sou apaixonado por ajudar  
              pessoas a realizarem o sonho do imóvel próprio. Com anos de experiência  
              no mercado imobiliário, ofereço um atendimento personalizado e consultoria  
              especializada para encontrar a melhor opção para você.  
              </p>
              <p className='text-two'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat reprehenderit!
              </p>
                   <button className="btn-contact">Entre em Contato</button>
          </div>
          <div className="presentationTwo">
              {/* Adicionando a imagem no componente */}
              <img src={Imagem01} alt="Imagem de Apresentação" />
          </div>
      </div>
    </div>
  );
};

export default Presentation;
