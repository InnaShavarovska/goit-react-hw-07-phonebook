import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: circle;
`;
export const Li = styled.li`
  display: list-item;
  font-size: 15px;
  list-style: none;
`;

export const Delete = styled.button`
  display: inline-block;
  margin-left: 30px;
  background-color: grey;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  &:hover,
  &:active,
  &:focus {
    background-color: black;
  }
`;
