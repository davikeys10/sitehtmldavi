const extras = [
    `<p><strong>Melhor época:</strong> Março a Maio<br><strong>Comida típica:</strong> Kaiseki tradicional.</p>`,
    `<p><strong>Melhor época:</strong> Dezembro a Março<br><strong>Comida típica:</strong> Feijoada e açaí.</p>`,
    `<p><strong>Melhor época:</strong> Maio a Outubro<br><strong>Comida típica:</strong> Moussaka e gyros.</p>`
  ];

  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    
    const botao = document.createElement('button');
    botao.textContent = 'Ver mais';
    botao.classList.add('btn-ver-mais');
    card.appendChild(botao);

    const infoExtra = document.createElement('div');
    infoExtra.classList.add('info-extra', 'escondido');
    infoExtra.innerHTML = extras[index] || 'Mais informações em breve.';
    card.appendChild(infoExtra);

    botao.addEventListener('click', () => {
      infoExtra.classList.toggle('escondido');
      botao.textContent = infoExtra.classList.contains('escondido') ? 'Ver mais' : 'Ver menos';
    });
  }); 