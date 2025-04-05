// pages/index.js
import Header from './Components/Header';
import Home from './Components/Home';
import TopTalents from './Components/Talent';


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className='h-[25px]'></div>
      <Header/>
      <main className=""> 
        <div className="container mx-auto text-center">

          <Home />
          <TopTalents />
        </div>
      </main>
    </div>
  )
}
