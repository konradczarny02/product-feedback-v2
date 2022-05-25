import styled from 'styled-components';

export const ModalBackground = styled.div`
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 2000px;
    width: 100%;
    opacity: 0.5;
    background-color: #000;
  }
`;

export const ModalWrapper = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: ${({ theme }) => theme.colors.white};

  a {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.pink};
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    height: 40px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  a:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
