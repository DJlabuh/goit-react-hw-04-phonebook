import styled from 'styled-components';

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 300px;
  margin-bottom: 5px;
  padding: 5px;
`;

export const FormButton = styled.button`
  width: 50%;
  border: none;
  border-radius: 10px;
  background-color: #aaffaa;
  padding: 5px 10px;
  margin-bottom: 20px;
  &:hover {
    background-color: #73f873;
  }
`;
