import KLitem from '../kinolar-list-item/kinolar-list-item';
import './kinolar-list.css';

const Klist = ({data, del}) => {
    return (
        <ul className="kino-list">
            {data.map( (item) => {
                return <KLitem key={item.id} name={item.name} seen={item.seen} colorY={item.colorY} del={ () => del(item.id)} />
            })}
        </ul>
    );
};

export default Klist;