import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  background: #fff;
  padding: 15px;
  border-radius: 5px;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  user-select: none;
  cursor: grabbing;

  & + div {
    margin-top: 10px;
  }

  header {
    position: absolute;
    top: -12px;
  }
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

export const Content = styled.div`
  color: #999;
  margin: 8px 0 10px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  }
`;
