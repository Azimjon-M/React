import './qidirish-panili.css';

const QidirPanel = () => {
    return (
        <div className="panel mt-3">
            <input type="text" className='form-control p-2' placeholder="Kinolarni qidirish" />
            <div className='input-group mt-3'>
                <button type="button" className="btn btn-dark">Barcha kinolar</button>
                <button type="button" className="btn btn-outline-dark">Barcha kinolar</button>
                <button type="button" className="btn btn-outline-dark">Barcha kinolar</button>
            </div>
        </div>
    );
};

export default QidirPanel;
