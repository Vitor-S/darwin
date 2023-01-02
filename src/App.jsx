import './App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import empresa from './assets/empresa.png';
import darwin_vermelho from './assets/vermelho2222.png'
import autismo from './assets/autismo.png'
import livro from './assets/livro.png'
import Bubble from './components/bubble/bubble';
import ShowCard from './components/showCard/showCard';
import StaticBubble from './components/staticBubble/staticBubble';
import Showcase from './components/showcase/showcase';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='section'>
        <Bubble position={{top: '-450px', left: '-250px'}} width='600px'/>
        <Bubble position={{top: '50px', left: '800px'}} width='550px'/>
        <Card image={empresa} title="CREATIVE ?" alt="logo da empresa">
          A CREATIVE é uma empresa especializada em criação de personagens e histórias para o universo dos games. Oferecemos aos nossos clientes um portfólio diversificado de produtos e serviços, com soluções inovadoras para atender às suas necessidades, sempre em busca de oferecer cada dia melhores soluções criativas para seus clientes, desenvolvendo personagens e histórias que os ajudem a alcançar seus objetivos. 
        </Card>
      </section>
      <section className='section'>
        <Bubble position={{left: '-250px'}} width='430px'/>
        <Bubble position={{left: '850px', top: '-200px'}} width='600px'/>
        <Card image={darwin_vermelho} title="QUEM É DARWIN ?" alt="Darwin">
          Darwin é nossa mais nova criação, aonde decidimos explorar uma minoria quase esquecida pela mídia. Queriamos algo que falase com o publico infanto-juvenil e fosse educativo, tudo isso de uma forma divertida e leve, assim chegamos ao Darwin, nosso detetivo com sindrome de aspenger que tentar ajudar todos que estiverem necessitados, derrotando seus inimigos psicoloógicos sepre em busca do melhor. 
        </Card>
      </section>
      <section className='section'>
        <Bubble position={{left: '-300px'}}/>
        <Bubble position={{top: '-400px', left: '400px'}} width='600px' radius='50%'/>
        <Bubble position={{top: '180px', left: '800px' }} radius='54% 46% 50% 50% / 50% 42% 58% 50%'/>
        <Card image={autismo} title="Porque autismo ?" alt="Porque autismo ?">
          Observamos que, a representatividade no mundo artístico vem finalmente tendo o seu reconhecimento, mas em contrapartidada, percebemos certas minorias sendo deixadas de lado, que são as pessoas com Transtorno deo Expectro Autista. Pessoas com esse Transtorno apresentam muitas dificuldades no Âmbito social,e o ser humano é um animal social, então nosso objetivo era tentar inserir-los nesse novo universo,mostrando seus problemas que devem ser enfrentados, e suas qualidades que devem ser valorizadas.
        </Card>
      </section>
      <section className='section'>
        <Bubble position={{top: '-480px', left: '-450px'}} width='600px'/>
        <Bubble position={{left: '-200px', left: '800px'}}/>
        <Card image={livro} title="História do Darwin" alt="História do Darwin">
          Nasceu em Londres, no ano de 1999. Ficou conhecido como o “detetive cego”, pois apesar de ter sido diagnosticado com a síndrome de Asperger – um transtorno do espectro autista – isso não o impediu de se tornar um dos mais brilhantes detetives da história. O detetive Darwin era um detetive particular que trabalhava em Londres. Ele tinha uma síndrome de Asperger, o que significa que ele tinha dificuldades para se socializar e entender as nuances da linguagem. No entanto, ele era um excelente detetive e solucionava os casos que os outros não conseguiam.
        </Card>
      </section>
      <section className='section'>
        <ShowCard title="Roupas">
          O vermelho é uma cor forte, poderosa e com muita energia por trás dela. Pode ser ousado ou intenso, mas também é quente e convidativo. É uma cor ousada e apaixonada que pode fazer uma pessoa se sentir confiante e ousada em qualquer situação. O vermelho também pode ser usado para expressar raiva ou frustração quando você está se sentindo fortemente em relação a algo.
        </ShowCard>
      </section>
    </div>
  );
}

export default App;
