
import './style/main.css';

import logoImg  from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className="text-7xl text-white font-black mt-20">Seu 
        <span className="bg-nlw-gradiente text-transparent bg-clip-text">
          dou</span>está aqui.</h1>
    </div>

    <div className="grid grid-cols-6 gap-6 mt-16">

      <a href="" className="relative">
        <img src="/game-1.png"/>
        <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block"></strong>
          <span className="text-zinc-300 text-sm block"></span>
        </div>
      </a>

      <a href="" className="relative">
        <img src="/game-2.png"/>
        <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block"></strong>
          <span className="text-zinc-300 text-sm block"></span>
        </div>
      </a>

      <a href="" className="relative">
        <img src="/game-3.png"/>
        <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block"></strong>
          <span className="text-zinc-300 text-sm block"></span>
        </div>
      </a>

      <a href="" className="relative">
        <img src="/game-4.png"/>
        <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block"></strong>
          <span className="text-zinc-300 text-sm block"></span>
        </div>
      </a>

      <a href="" className="relative">
        <img src="/game-5.png"/>
        <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block"></strong>
          <span className="text-zinc-300 text-sm block"></span>
        </div>
      </a>

      <a href="" className="relative">
        <img src="/game-6.png"/>
        <div className="w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block"></strong>
          <span className="text-zinc-300 text-sm block"></span>
        </div>
      </a>

    </div>

    <div className="pt-1 bg-nlw-gradiente self-stretch rounded-lg mt-8 overflow-hidden">
      <div className=" bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Não encontrou seu dou?</strong>
          <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
        </div>

        <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded">
          Publicar anúncio
        </button>
      </div>
    </div>


  )
}   

export default App
