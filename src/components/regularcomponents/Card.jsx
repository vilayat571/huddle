import { CardStyled } from "../styled/Card.styled";

function Card({ item: { id, title, body, image } }) {
  return (
    <CardStyled layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="the paragraf bio" />
      </div>
    </CardStyled>
  );
}

export default Card;
