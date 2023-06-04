import styled from 'styled-components';

export const ContactsUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContactsLi = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContactsText = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const ContactsButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #f38989;
  margin-left: 10px;
  padding: 4px 8px;
  &:hover {
    background-color: #f56b6b;
  }
`;
