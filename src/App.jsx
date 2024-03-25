import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './assets/components/Header'
import MyCard from './assets/components/MyCard'
import Footer from './assets/components/Footer'

function App() {
  return (
    <>
<Header/>
    <Header Header="Adopta un perrito"/>
    
<div className='tarjetas'>
    <MyCard 
    image = "https://content.nationalgeographic.com.es/medio/2022/12/12/perro-1_514aad3b_221212161023_1280x720.jpg"
    text = "Black"
    description= "Black es un perro encantador, docil y amigable" 
    />

    <MyCard 
    image = "https://content.nationalgeographic.com.es/medio/2024/03/05/perros-moviendo-cola-1_00000000_240305210929_960x658.jpg"
    text = "Bobby"
    description= "Bobby es un perro feliz, le gustan los niños y compartir con otros animales" 
    />

    <MyCard 
    image = "https://content.nationalgeographic.com.es/medio/2024/03/07/border-collie_00000000_240307091517_480x480.jpg"
    text = "Leon"
    description= "Leon es un perro encantador, a crecido en las frondosas praderas del sur de Chile" 
    />
</div>

    <Footer Footer="No compres, ¡adopta! Cientos de amigos esperan en calles y refugios una oportunidad"/>
    </>
  )
}

export default App
