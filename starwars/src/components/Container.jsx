import styled from 'styled-components'

const margin = '10px';
const phone = '(max-width: 500px)';
const tablet = '(max-width: 800px)';

const Container = styled.div`
  width: 20%;
  border: 1px solid rgb(210, 210, 210);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 3px;
  margin: ${margin};
  padding: 16px 8px 12px 16px;
  background-color: black;
  color: ${props => {
    return props.danger ? 'red' : 'inherit';
  }};
  @media ${tablet} {
    color: yellow;
    background-color: blue;
  }
  @media ${phone} {
    color: coral;
    background-color: coffee;
  }
`
export default Container;