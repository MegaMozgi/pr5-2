window.onload = function() {
    // Отримання посилань на кнопки
    var buttonG = document.getElementById("G");
    var buttonGr = document.getElementById("Gr");
    var buttonC = document.getElementById("C");
    var buttonCI = document.getElementById("CI");
    var buttonSH = document.getElementById("SH");
  
    // Додавання обробників подій для кожної кнопки
    buttonG.addEventListener("click", function() {
      alert("Українці — стародавній народ, а мова їхня мова багатша і всеосяжніша, ніж персидська, китайська, монгольська і всілякі інші.");
    });
  
    buttonGr.addEventListener("click", function() {
      alert("Нема на світі України, немає другого Дніпра");
    });
  
    buttonC.addEventListener("click", function() {
      alert("Ще не вмерла України і слава, і воля.");
    });
  
    buttonCI.addEventListener("click", function() {
      alert("Мова вмирає, коли наступне покоління втрачає розуміння значення слів.");
    });
  
    buttonSH.addEventListener("click", function() {
      alert("М. Гоголь Дивуєшся дорогоцінності мови нашої: в ній що не звук, то подарунок, все крупно, зернисто, як самі перла.");
    });
  };