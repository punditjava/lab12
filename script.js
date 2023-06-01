$(document).ready(function() {
      // Действие при двойном щелчке
      $('#doubleClickDiv').on('dblclick', function() {
        var randomColor = getRandomColor();
        $(this).css('background-color', randomColor);
      });

      // Действие при перемещенииaмыши
      $('#moveMouseDiv').on('mousemove', function() {
        var randomColor = getRandomColor();
        $(this).css('background-color', randomColor);
      });

      // Вспомогательная функция для генерации случайного цвета
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    });
