# desafio-des-web
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Planejamento de Rota de Entregas</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <h1>Planejamento de Rota</h1>
    <form id="route-form">
      <input type="text" id="start" placeholder="Endereço de partida" required>
      <textarea id="waypoints" placeholder="Digite os endereços intermediários, separados por vírgula"></textarea>
      <input type="text" id="end" placeholder="Endereço de destino" required>
      <button type="submit">Calcular Rota</button>
    </form>
    <div id="map"></div>
    <div id="summary"></div>
  </div>
  <script src="script.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD242YXyCqSI5UgB6ujLa8HclZz9qSXYBU"></script>
</body>
</html>
