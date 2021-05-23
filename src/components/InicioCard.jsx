import React from 'react'

function InicioCard(props) {
    return (
        <div className="container">
            <div className="row">
                {props.card.map((card) => {
                    return (
                        <div className="col-12 col-md-3">
                            <div className="card cardHero mt-3 md-3">
                                <div className="card-body">
                                    <h5 className="card-title icoFont"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                                        class={card.ico} viewBox="0 0 16 16">
                                        <path d={card.d1} />
                                        <path fill-rule={card.fr} d={card.d2} />
                                    </svg></h5>
                                    <h5 className="card-title mt-4 icoFont"><b>{card.title} </b></h5>
                                    <p className="card-text">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default InicioCard