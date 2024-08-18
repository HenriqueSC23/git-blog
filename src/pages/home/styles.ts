import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  width: 864px;
  min-height: 212px;
  border-radius: 10px;
  margin: -5.5rem auto 0;
  padding: 2rem 2.5rem;
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;
  }
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: left;
`;

export const HeaderProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.blue};

    svg {
      margin-bottom: 2px;
    }
  }
`;

export const FooterProfile = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;