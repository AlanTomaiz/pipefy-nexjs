import styled, { css } from 'styled-components';

interface ContainerProps {
  isDragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  background: #fff;
  padding: 15px;
  border-radius: 5px;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  user-select: none;
  cursor: pointer;

  & + div {
    margin-top: 10px;
  }

  header {
    position: absolute;
    top: -12px;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.3);
      padding: 33px 13px 47px;
      background: transparent;

      div {
        color: transparent;
      }

      footer,
      span,
      img {
        display: none;
      }
    `}
`;

export const Content = styled.div`
  color: #999;
  margin: 8px 0 10px;
`;

interface LabelProps {
  color?: string;
}

export const Label = styled.span<LabelProps>`
  display: inline-block;

  color: #fff;
  font-size: 1.2rem;
  line-height: 20px;
  font-weight: 700;

  padding: 0 10px;
  border-radius: 2px;
  background: ${props => props.color || '#ecf0f1'};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;

  .date {
    display: flex;
    align-items: center;

    color: #999;
    font-weight: 500;

    svg {
      margin-left: -2px;
      margin-right: 5px;
    }
  }

  img {
    width: 34px;
    border-radius: 4px;
    pointer-events: none;
  }
`;
