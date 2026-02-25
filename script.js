    // Tela cheia
    const fsBtn = document.getElementById('fsBtn');
    fsBtn.addEventListener('click', async () => {
      try{
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
          fsBtn.textContent = '⛶';
          // fsBtn.textContent = '⛶ Sair tela cheia';
        } else {
          await document.exitFullscreen();
          fsBtn.textContent = '⛶';
        }
      }catch(e){}
    });

    // Tecla "f" alterna tela cheia
    window.addEventListener('keydown', (ev) => {
      if(ev.key.toLowerCase() === 'f'){
        ev.preventDefault();
        fsBtn.click();
      }
    });