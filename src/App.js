import { useEffect, useState } from "react";

function App() {
    const [zoodarzs, setZoodarzs] = useState([]);

    useEffect(() => {
      async function getData() {
        const response = await fetch("animals.json");
        const animals = await response.json();
        setZoodarzs(animals);
      }

      getData();
    }, []);


    console.log(zoodarzs);
    const renderZoodarzs = zoodarzs.map(nebrunurupucis => {
      return (
        <article>
        <img src={nebrunurupucis["image"]}></img>
        <div className="info"></div>
        <h2>{nebrunurupucis["animal"]}</h2>
        <p> {nebrunurupucis["description"]} </p>

        <ul>
          <li>{nebrunurupucis["answers"][0]}</li>
          <li>{nebrunurupucis["answers"][1]}</li>
          <li>{nebrunurupucis["answers"][2]}</li>
        </ul>

        </article>


      )
    });

    return <main>{ renderZoodarzs } </main>;
}

export default App;