import styled from 'styled-components';

export const ThumbNailsS = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props: { img: string }) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: 'red';
`;

export const BasicCardS = styled.div`
  width: 100%;
  height: 100%;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  background-color: rgba(252, 252, 252);
  border-radius: 10px;
  /* margin-right: 20px; */
  font-size: 0.8rem;
  box-shadow: 1px 3px 5px #999;
  text-align: left;
  margin-top: auto;
  margin-right: 10px;
`;

export const TitleP = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-left: 10px;
  margin-top: 10px;
  font-family: 'NotoSansKR';
`;

export const DescriptionP = styled.p`
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 5px;
`;
export const ButtonContainerS = styled.div`
  height: 160px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const ButtonS = styled.button`
  height: 100%;
  background-color: #f1f1f152;
  border: 0.5px solid rgba(216, 208, 253, 0.377);
  text-align: center;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'NotoSansKR';
  display: flex;
  justify-content: center;
  align-items: center;
`;
