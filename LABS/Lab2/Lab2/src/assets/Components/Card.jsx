export default function Card(props)

{
    return <div className='card-component'>
        <img src={props.image} alt="" width="150px"/>
        <h4 className="location">{props.location}</h4>
        <p className="resort">{props.resort}</p>
        <p className={props.review < 4.0 ? "card-bad-review" : "card-good-review"}>{props.review} ★</p>
        <p className="price">{props.price}/night</p>
    </div>

}