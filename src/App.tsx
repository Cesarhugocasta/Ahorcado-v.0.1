import { useState } from "react";
import Hangman from "./components/Hangman";
import Welcome from "./components/Welcome";

type WordCategories = {
  [key in 'animales' | 'cosas' | 'comida' | 'peliculas' | 'juegos']: {
    words: string[];
    hints: { [key: string]: string };
  };
};

const wordCategories: WordCategories = {
  animales: {
    words: ['gato', 'perro', 'elefante', 'león', 'tigre', 'cebra'],
    hints: {
      gato: 'Dice "miau"',
      perro: 'Dice "guau"',
      elefante: 'Tiene una trompa',
      león: 'Es el rey de la selva',
      tigre: 'Tiene rayas',
      cebra: 'Tiene rayas negras y blancas'
    }
  },
  cosas: {
    words: ['coche', 'silla', 'computadora', 'teléfono', 'mesa', 'reloj'],
    hints: {
      coche: 'Tiene ruedas',
      silla: 'Te sientas en ella',
      computadora: 'La usas para navegar por Internet',
      teléfono: 'Lo usas para hacer llamadas',
      mesa: 'Pones cosas encima de ella',
      reloj: 'Lo llevas en la muñeca'
    }
  },
  comida: {
    words: ['manzana', 'plátano', 'cereza', 'uva', 'kiwi', 'naranja'],
    hints: {
      manzana: 'Es una fruta',
      plátano: 'Es amarillo cuando está maduro',
      cereza: 'Es pequeña y roja',
      uva: 'Crece en racimos',
      kiwi: 'Tiene piel marrón y peluda',
      naranja: 'Es redonda y naranja'
    }
  },
  películas: {
    words: ['avatar', 'inception', 'tiburón', 'titanic', 'matrix', 'starwars'],
    hints: {
      avatar: 'Está ambientada en un planeta distante llamado Pandora',
      inception: 'Trata sobre los sueños dentro de los sueños',
      tiburón: 'Trata sobre un tiburón asesino',
      titanic: 'Trata sobre el hundimiento de un famoso barco',
      matrix: 'Explora el concepto de la realidad',
      starwars: 'Está ambientada en una galaxia muy, muy lejana'
    }
  },
  juegos: {
    words: ['minecraft', 'pokemon', 'tetris', 'zelda', 'mario', 'fortnite'],
    hints: {
      minecraft: 'Es un juego de mundo abierto donde puedes construir cualquier cosa',
      pokemon: 'Involucra atrapar y luchar contra criaturas',
      tetris: 'Es un juego de rompecabezas donde colocas bloques que caen',
      zelda: 'Presenta a un héroe aventurero llamado Link',
      mario: 'Es un juego de plataformas protagonizado por un fontanero',
      fortnite: 'Es un juego de batalla real con mecánicas de construcción'
    }
  }
};

function App() {
  const [currentCategory, setCurrentCategory] = useState<keyof WordCategories | null>(null);

  const selectRandomCategory = () => {
    const categories = Object.keys(wordCategories) as (keyof WordCategories)[];
    const randomIndex = Math.floor(Math.random() * categories.length);
    setCurrentCategory(categories[randomIndex]);
  };

  return (
    <div className="App">
      <Welcome />
      <div className="category-container">
        <button onClick={selectRandomCategory} className="random-button">
          Seleccionar categoría al azar
        </button>
        {currentCategory && (
          <div className="category-animation">
            <h2>{currentCategory}</h2>
            <Hangman
              words={wordCategories[currentCategory].words}
              hints={wordCategories[currentCategory].hints}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
