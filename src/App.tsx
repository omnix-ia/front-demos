import "./App.css"
import Maps from "./components/Maps"

function App() {
  return <div className="App">
    <div>
      <select>
        <option value="novalue">Seleccione una region</option>
        <option value="value1">Metropolitana de santiago</option>
        <option value="value1">Valparaiso</option>
      </select>
      <select>
        <option value="novalue">Seleccione una comuna</option>
        <option value="value1">Las condes</option>
        <option value="value1">Santiago</option>
      </select>
    </div>
    <div>
      <Maps />
    </div>
  </div>
}

export default App
