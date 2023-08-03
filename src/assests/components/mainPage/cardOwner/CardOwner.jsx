import './cardOwner.scss';

function CardOwner({ item }) {

    return (<>
        <div className='wrapper-owner'>
            <img src={item.image} alt="user" className='image' />
            <span className='quotes'>,,</span>
            <div className='owner-text'>
                <div className='name'>{item.name}</div>
                <span className='jobTitle'>{item.jobTitle}<span className='company'>{item.company}</span></span>
                <div className='text'>{item.text}</div>
            </div>
        </div>
    </>
    )
}

export default CardOwner;