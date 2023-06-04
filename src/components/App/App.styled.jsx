import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  padding: 10px;
  margin: 20px auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const SectionComponents = styled.div`
  max-width: 320px;
  padding: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const WarningText = styled.p`
  background-color: #fdf89f;
  color: #ee4a4a;
  padding: 10px;
  border: 1px solid #f38989;
  border-radius: 4px;
`;
