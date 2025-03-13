import { useEffect, useState } from "react"

function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(() => {
    function loadApi() {
      fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        }
      )
    }

    loadApi()
  }, [])

  console.log(nutri);
  return (
    <div className="App">
      <h1>React</h1>

      {nutri.map((item) => {
        return (
          <article key={item.id}>
            <h2>{item.titulo}</h2>
            <img src={item.capa} alt={item.titulo} />
            <p>{item.subtitulo}</p>
          </article>
        )
      })}
    </div>
  );
}

export default App;
