import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {

  const title = "Adopta un perrito"
  const perrito1 = {nombre : "Dug", imagenUrl : "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", texto : "Dog es un adorable cachorro con una personalidad juguetona y leal. Su pelaje suave y ojos brillantes hacen que sea imposible resistirse a su encanto. ¡Dale a Dog un hogar lleno de amor y diversión!", tipo: "Dachshund", color: "warning"}
  const perrito2 = {nombre : "Firulais", imagenUrl : "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", texto : "Forulais es un perrito lleno de energía y cariño. Con su pelaje esponjoso y ojos curiosos, se convertirá en el compañero perfecto para tus aventuras diarias. ¡Haz que la vida de Forulais esté llena de amor y aventuras!", tipo: "Maltés", color: "dark"}
  const perrito3 = {nombre : "Falcon", imagenUrl : "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", texto : "Falcon es un elegante amigo de cuatro patas con una mirada noble y afectuosa. Su lealtad y amistad son incomparables. Dale a Falcon la oportunidad de ser tu compañero de vida y compartir momentos inolvidables.", tipo: "Shiba Inu", color: "danger"}
  const perrito4 = {nombre : "Fred", imagenUrl : "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", texto : "Fred es un perrito dulce y gentil que busca un hogar amoroso. Con sus orejas caídas y expresión tierna, te derretirás al verlo. Brinda a Fred la seguridad y el afecto que merece en su nuevo hogar.", tipo: "Pug", color: "info"}


  return (
    <Container>
      <Header title={title} />
      <Row>
        <MyCard {...perrito1} />
        <MyCard {...perrito2} />
        <MyCard {...perrito3} />
        <MyCard {...perrito4} />
      </Row>
        <Footer />
    </Container>
  )
}

export default App
