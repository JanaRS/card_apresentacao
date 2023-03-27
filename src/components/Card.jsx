import './card.css'

function Card({user}) {

    return (
        <div className="card">
            <img className="card-foto" src={user.foto} alt={user.nome}/>

            <div className="card-dados">
                <h1>{user.nome}</h1>
                <h2>Idade: {user.idade} anos</h2>

                <div className="card-redes">
                    <a href={user.github} target="_blank"><box-icon type='logo' name='github' color='white' size='md' title="Link para o GitHub"></box-icon></a>
                    <a href={user.linkedin} target="_blank"><box-icon type='logo' name='linkedin' color='white' size='md' title="Link para o LinkedIn"></box-icon></a>
                </div>
            </div>           
        </div>
    )
}

export default Card;