import './Container.css'



function Container({titulo, subtit }){
    return (
        <div>
            <h5 className="color">{titulo}</h5>
            <h6 className="color">{subtit}</h6>
        </div>
    )
}

export default Container