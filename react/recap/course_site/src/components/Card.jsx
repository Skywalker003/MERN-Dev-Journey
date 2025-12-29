export default function Card(props){
    if(props.shown==true){
        return(
            <div className="card"> {/* can use props.shown&& if there is no else part */}
                <img className="inner-img" src={props.image} alt="img" />
                <div className="inner-text">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <p>{props.difficulty}</p>
                    <p>{props.level}</p>
                </div> 
            </div>
        )
    }
    else{
        return(
            <div className="card">
                <h1 className="update">This course is coming soon!</h1>
            </div>
        )
    }
}

/*
export default function Card(props) {
  return (
    <div className="card">
      {props.shown ? (
        <>
          <img className="inner-img" src={props.image} alt="img" />
          <div className="inner-text">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.difficulty}</p>
            <p>{props.level}</p>
          </div>
        </>
      ) : (
        <h1 className="update">This course is coming soon!</h1>
      )}
    </div>
  );
}*/