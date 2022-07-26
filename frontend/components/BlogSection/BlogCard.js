import styled from "styled-components";

const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* margin: 0 20px 0 20px; */
  padding: 30px 30px 40px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 0px;
  /* max-width: 300px; */
  max-height: 386px;

  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 1.35;
    margin: 0;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    line-height: 1.55;
  }

  a {
    line-height: 1.55;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    color: #ff8562;
  }
`;

const BlogCard = (props) => {
    return (
      <CardWrapper>
        <h3>
          {props.title}
        </h3>
        <p>
          {props.text}
        </p>
        <a>Читать →</a>
      </CardWrapper>
    );
}

export default BlogCard;