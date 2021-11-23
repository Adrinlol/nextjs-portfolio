import styled from "styled-components";

export const NotificationContainer = styled.div`
  top: 6rem;
  right: 1rem;
  z-index: 99;
  position: fixed;
  padding: 4px;
  box-sizing: border-box;
  color: #fff;
`;

export const NotificationContent = styled.div`
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  padding: 8px 12px;
  max-width: 280px;
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  color: #000;

  p {
    margin: 0 0 0 0.5rem;
    font-size: 1rem;
    line-height: 20px;
  }
`;
