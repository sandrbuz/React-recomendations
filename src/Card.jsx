import s from "./Card.module.css"


export const Card = (props) => {
    return (
        <div className={s.recommendationItem} style={{ borderLeft: `4px solid ${props.borderColor}`, gridArea: props.gridArea }}>
            <div className={s.topCard}>
                <h3>{props.title}</h3>
                <p className={s.number}>{props.number}</p>
            </div>
            <p className={s.description}>{props.description}</p>
        </div>
    )
}