import React from 'react'
import '../css/card.css'

class Card extends React.Component
{


render(props)
{
    const { title, subtitle, description } = this.props;

return(

    <div className="card">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p style={{color:'white'}}>{description}</p>
        <br/>
    </div>
)
}
}

export default Card;