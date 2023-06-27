import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  width: 300px;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
`;
export const Input = styled.input`
  display: block;
  width: 300px;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px;
`;
export const Submit = styled.button`
  display: inline-block;
  background-color: grey;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  &:hover,
  &:active {
    background-color: #333;
  }
`;
