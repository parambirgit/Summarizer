import Hero from './components/Hero';
import Demo from './components/Demo';
import './App.css';
const App = () => {
  return (
    <main>
      <div className='main overflow-scroll h-screen'>
        <div className='gradient'/>
        <div className='App '>
          <Hero/>
          <Demo/>
         
        </div>
      </div>
    </main>
  )
}

export default App