import './style.css'
import bitcoin from '/Bitcoin.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <img src="${bitcoin}" class="logo" alt="Vite logo" />
    <h1>Bitcoin Price</h1>
    <div class="card">
      <div id="counter"></div>
    </div>
    <p class="read-the-docs">
      - Made by Albin Johansson
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLDivElement>('#counter')!)
