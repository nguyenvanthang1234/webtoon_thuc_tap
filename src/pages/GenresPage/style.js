import styled from "styled-components";
import {
  HeartFilled,
  PauseCircleOutlined,
  RightOutlined
} from "@ant-design/icons";

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h10";
  list-style: none;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const RightOutlinedWrapper = styled(RightOutlined)`
  margin-left: 5px;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  top: -2px;
  transform: ${({ dropdownOpen }) =>
    dropdownOpen ? "rotate(-90deg)" : "rotate(90deg)"};
`;
export const RightOutlinedWrapperButton = styled(RightOutlined)`
  font-size: 12px;
  font-weight: 500;
  position: relative;
  top: -5px;
  rotate: -90deg;
`;

export const CardList1 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h10";
  list-style: none;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList2 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h10";
  list-style: none;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList3 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h10";
  list-style: none;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList4 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h10";
  list-style: none;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList6 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h10";
  list-style: none;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;
export const CardList5 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1100px;
  margin: 0 auto;
  grid-template-areas:
    "h1 h2 h3 h4 h5"
    "h6 h7 h8 h9 h10";
  list-style: none;
  padding-top: 20px;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
`;

export const CardItem = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }
  &:nth-child(10) {
    grid-area: h10;
  }
`;
export const CardItem1 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(10) {
    grid-area: h10;
  }
`;
export const CardItem2 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }
  &:nth-child(10) {
    grid-area: h10;
  }
`;
export const CardItem3 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }
  &:nth-child(10) {
    grid-area: h10;
  }
`;
export const CardItem4 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(10) {
    grid-area: h10;
  }
`;
export const CardItem5 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }
  &:nth-child(10) {
    grid-area: h10;
  }
`;
export const CardItem6 = styled.div`
  &:nth-child(1) {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
  &:nth-child(6) {
    grid-area: h6;
  }
  &:nth-child(7) {
    grid-area: h7;
  }
  &:nth-child(8) {
    grid-area: h8;
  }
  &:nth-child(9) {
    grid-area: h9;
  }
  &:nth-child(10) {
    grid-area: h10;
  }
`;

export const CardFront = styled.div`
  position: relative;
  color: #00dc64;
  float: left;
  clear: both;
  margin: 0;
  padding: 0;
`;

export const Info = styled.div``;

export const GradeEm = styled.p`
  position: absolute;
  top: 9px;
  left: 35px;
  font-family: verdana !important;
`;

export const StyledHeartOutlined = styled(HeartFilled)`
  font-size: 15px;
  position: absolute;
  z-index: 10;
  top: 12px;
  left: 16px;
`;
export const StylePauseCircleOutlined = styled(PauseCircleOutlined)`
  font-size: 30px;
  position: absolute;
  z-index: 10;
  top: 40px;
  left: 15px;
  background-color: #a9a9a9;
  border-radius: 80px;
  color: #fff;
`;
export const Subj = styled.h3`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  font-family: hind, simhei, verdana, Helvetica, sans-serif !important;
`;
export const IconArea = styled.p`
  position: absolute;
  bottom: 0;
  left: 16px;
  color: ${(props) => props.Color};
`;
export const GradeArea = styled.div`
  position: absolute;
  top: 30px;
  left: 5px;

  .scan {
    position: absolute;
    top: 40px;
    left: 15px;
    z-index: 10;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00dc64;
    color: #f0ffff;
  }
`;

export const Week = styled.div`
  background: #fff;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  padding-right: 5px;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const WeekList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 1px solid #f4f4f4;
  white-space: nowrap;
  padding: 0;
  margin-bottom: 0;
`;

export const WeekItem = styled.li`
  padding: 18px 16px;
  font-size: 16px;
  list-style: none;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  color: #bbb;
  z-index: 20;
  font-family: hind, simhei, verdana, Helvetica, sans-serif !import;
  &:hover {
    color: #000 !important;
  }

  &::before {
    content: "";
    position: relative;
    bottom: -43px;
    width: 100%;
    height: 2px;
    background-color: #000;
    display: none;
  }
  &.active::before {
    display: block;
  }

  &.inactive {
    color: #ccc;
  }
  &.active {
    color: #000;
  }
`;

export const WeekList1 = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    margin-left: 540px;
  }
  @media screen and (min-width: 1920px) and (max-width: 2560px) {
    margin: 0 auto;
    width: 820px;
  }
`;

export const WeekItem1 = styled.li`
  padding: 18px 12px;
  font-size: 16px;
  list-style: none;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  color: #bbb;
  font-family: hind, simhei, verdana, Helvetica, sans-serif !import;
  &:hover {
    color: #000 !important;
  }
`;

export const Text = styled.h1`
  cursor: pointer;
  position: relative;
  font-family: hind, simhei, verdana, Helvetica, sans-serif !import;
  font-size: 16px;
  font-weight: 500;
  text-align: right;
  top: -18px;
  right: 0px;
  z-index: 15;
  margin: 0;
  padding: 0;
  color: ${({ dropdownOpen }) => (dropdownOpen ? "#000" : "#bbb")};
  &:hover {
    color: #000;
  }
`;

export const MainContent = styled.div`
  background-color: #f4f4f4;
  margin-top: 0;
  padding-bottom: 40px;
  @media (max-width: 960px) {
    min-width: 200vw;
  }
  @media screen and (min-width: 1920px) and (max-width: 2560px) {
    margin-left: 0;
  }
`;
export const Top = styled.div`
  padding-top: 25px;
  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    margin-left: 195px;
  }
  @media screen and (min-width: 1920px) and (max-width: 2560px) {
    box-sizing: border-box;
    margin: 0 auto;
    width: 1140px;
  }
`;

export const Line = styled.hr`
  background-color: #000;
  height: 1px;
  position: relative;
  top: 20px;
  display: ${({ dropdownOpen }) => (dropdownOpen ? "block" : "none")};
`;
export const ScrollButton = styled.button`
  position: fixed;
  font-size: 16px;
  bottom: 40px;
  right: 40px;
  z-index: 99;
  height: 49px;
  width: 50px;
  color: #bbb;
  background-color: white;
  border: 1px solid #bbb;
  display: ${({ show }) => (show ? "block" : "none")};
  text-align: center;
`;
export const TextBottom = styled.p`
  position: relative;
  top: -12px;
`;
export const DropdownContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  width: 140px;
  right: 200px;
  z-index: 30;
  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    right: 390px;
  }
  @media screen and (min-width: 1922px) and (max-width: 2560px) {
    right: 710px;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  text-align: right;
  position: relative;
  span {
    margin-right: 12px;
  }
`;
export const DropdownToggle = styled.div`
  cursor: pointer;
  display: inline-block;
  user-select: none;
  font-size: 16px;
  color: #333;
  position: absolute;
  right: 200px;
  top: 200px;
  z-index: 20;
  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    right: 400px;
  }
  @media screen and (min-width: 1922px) and (max-width: 2560px) {
    right: 720px;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  position: relative;
  top: 40px;
  left: 210px;
  font-weight: 500;
  display: block;
  width: 70px;
  color: ${(porps) => porps.color};

  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    left: 405px;
  }
  @media screen and (min-width: 1922px) and (max-width: 2560px) {
    left: 730px;
  }
`;
