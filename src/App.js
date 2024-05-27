import './App.css';
import { Card } from './Card';

const data = [
  { id: 1, title: 'Бюджет', number: 94, description: 'Проверка настройки лимитов бюджета, работу со ставками и динамика расходов', borderColor: '#E14F4D',gridArea: 'a' },
  { id: 2, title: 'Структура аккаунта', number: 234, description: 'Правильность распределения рекламных кампаний по структуре аккаунта', borderColor: '#E14F4D',gridArea: 'b' },
  { id: 3, title: 'Настройки кампании', number: 12, description: 'Корректность настроек рекламных кампаний', borderColor: '#799F18',gridArea: 'c' },
  { id: 4, title: 'Качество объявлений', number: 76, description: 'Тексты, ссылки, доступность посадочных страниц и модерация', borderColor: '#E8AF4E',gridArea: 'd' },
  { id: 5, title: 'Таргетинг и семантическое ядро', number: 321, description: 'Наличие минус-слов, показы по запросам и черного списка, а также скачки в динамике охвата', borderColor: '#E14F4D',gridArea: 'e' }
];

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1>Замечания и рекомендации</h1>
        <div className="recommendations">
          {data.map(item => (
            <Card key={item.id} borderColor={item.borderColor} title={item.title} number={item.number} description={item.description} gridArea={item.gridArea}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
