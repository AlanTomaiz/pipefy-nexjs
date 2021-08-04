import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 320px;
  padding: 0 15px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 75px;
    padding: 15px;
    background: #fff;
    margin: 0 -15px 15px;

    .title {
      user-select: none;
    }

    .title h2 {
      font-size: 1.6rem;
      margin-bottom: 2px;
    }

    .title .count {
      color: #bfbfbf;
      font-weight: 500;
    }

    button {
      width: 42px;
      height: 42px;

      border: 0;
      border-radius: 18px;
      background: #7284ff;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
