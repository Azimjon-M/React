import './app.css';
import KinolarSoni from '../kinolar-soni/kinolar-soni'
import QidirPanel from '../qidirish-panili/qidirish-panili';
import Klist from '../kinolar-list/kinolar-list';
import KinoQoshish from '../kino-qoshish/kino-qoshish';
// import Counter from './Counter'

const App = () => {
    const data = [
        {name: 'Qasoskorlar', seen: 4520, colorY: true, id: 1},
        {name: 'Tarnado', seen: 26400, colorY: false, id: 2},
        {name: 'Ovchilar', seen: 5612, colorY: false, id: 3},
        {name: 'Clear is not', seen: 14520, colorY: false, id: 4}
    ];

    return (
        <div className="app">
            <KinolarSoni />
            <QidirPanel />
            <Klist data= {data} />
            <KinoQoshish />
            {/* <Counter /> */}
        </div>
    );
};

export default App;
