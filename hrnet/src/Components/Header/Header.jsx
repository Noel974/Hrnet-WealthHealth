import { NavLink } from "react-router-dom";

const Header = () => {
    const cards = [
        { id: 1, title: "Create-Employee", content: "Formulaire pour créer une nouvelle employé", link: '/Create-Employee' },
        { id: 2, title: "List-Employee", content: "Visualier les list emmployée", link: '/list-Employee' },
    ];

    return (
        <header className="header">
            <div className="cards">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <header>
                            <h1 className="card-title">{card.title}</h1>
                        </header>
                        <article className="card-article">
                            <p>{card.content}</p>
                        </article>
                        <footer>
                            <NavLink to={card.link}>
                                {card.title}
                            </NavLink>
                        </footer>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;
