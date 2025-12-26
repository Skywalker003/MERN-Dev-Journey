export default function Card(props){
    return(
        <div className="card">
                <img className="inner-img" src={props.image} alt="img" />
                <div className="inner-text">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <p>{props.duration}</p>
                    <p>{props.level}</p>
                </div> 
            </div>
    )
}