
function App() {
  return (
    <nav class="flex justify-between items-center py-4 px-6 bg-gray-800">
    <div class="flex items-center">
      <div class="text-white font-semibold text-xl">DataLick</div>
    </div>
    <div class="flex items-center">
      <input type="text" id="busqueda" placeholder="Buscar..." class="px-4 py-2 rounded-md mr-4 focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white hidden lg:block"></input>
      <a href="/login" class="text-white mr-4">Login/Registro</a>
      <a href="/config" class="text-white">
        Configuracion
      </a>
    </div>
  </nav>
  )
}

export default App
