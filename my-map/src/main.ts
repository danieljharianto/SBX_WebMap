import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const PEDS_LAYER = {
  key: 'peds',
  tilesetId: 'danielharianto.as75q55k',
  layerId: 'peds-layer',
  sourceLayer: 'Peds_Analysis-1oesar',
  type: 'line',
  paint: {
    'line-color': [
      'case',
      ['>=', ['get', 'Res_Rational'], 5001], '#9d3605',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 1201],
        ['<=', ['get', 'Res_Rational'], 5000]
      ], '#b24508',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 501],
        ['<=', ['get', 'Res_Rational'], 1200]
      ], '#d59929',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 351],
        ['<=', ['get', 'Res_Rational'], 500]
      ], '#e97719',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 211],
        ['<=', ['get', 'Res_Rational'], 350]
      ], '#f68d23',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 151],
        ['<=', ['get', 'Res_Rational'], 210]
      ], '#fe9829',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 101],
        ['<=', ['get', 'Res_Rational'], 150]
      ], '#febb5e',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 71],
        ['<=', ['get', 'Res_Rational'], 100]
      ], '#fed080',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 51],
        ['<=', ['get', 'Res_Rational'], 70]
      ], '#fedf99',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 21],
        ['<=', ['get', 'Res_Rational'], 50]
      ], '#fff1ba',
      ['all', 
        ['>=', ['get', 'Res_Rational'], 11],
        ['<=', ['get', 'Res_Rational'], 20]
      ], '#fff8c7',
      '#ffffd4' // Default color
    ],
    'line-width': 10,
    'line-opacity': 0.5
  },
  layout: {
    'line-join': 'round',
    'line-cap': 'round'
  }
};
