import styled, { css } from "styled-components";
import { HeartFilled } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 210px;
  padding-right: 210px;
  background-color: #f4f4f4;
  scroll-margin-top: 140px;
`;

// Mỗi cột ngày
export const DayColumn = styled.div`
  background-color: ${(props) => (props.isSelected ? "#00dc64" : "#f4f4f4")};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  padding-bottom: 8px;
  border-top: 1px solid #dcdcdc;
  box-sizing: border-box;
  height: 100%;
`;

// Tên ngày
export const DayTitle = styled.h3`
  margin-bottom: 10px;
  padding: 20px;
  &:hover {
    color: #00dc64;
  }

  ${(props) =>
    props.isSelected &&
    css`
      color: #fff;
      &:hover {
        color: #fff;
      }
    `}
`;
export const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 5px;
  font-family: hind, simhei, verdana, Helvetica, sans-serif !important;
`;
export const Title1 = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-top: 150px;
  margin-left: 8px;
  color: ${(props) => props.color};
`;
export const StyledHeartOutlined = styled(HeartFilled)`
  font-size: 15px;
  color: ${(props) => props.color || "#00dc64"};
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  top: 80px;
  left: 17px;
  opacity: 0;
`;

export const SeriesItem = styled.div`
  position: relative;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  width: 147px;
  height: 153px;
  border: 1px solid #ddd;
  transition: all 0.1s ease;

  .view {
    color: #00dc64;
    position: relative;
    top: 46px;
    left: 40px;
    opacity: 0;
    font-family: hind, simhei, verdana, Helvetica, sans-serif !important;
  }
  .hello {
    position: relative;
    top: 40px;
    left: 14px;
    text-transform: uppercase;
    opacity: 0;
    font-family: hind, simhei, verdana, Helvetica, sans-serif !important;
  }

  ${(props) =>
    props.isSelected &&
    css`
      width: 231px;
      height: 153px;

      ${Title1} {
        top: -145px;
      }

      .view,
      ${StyledHeartOutlined}, .hello {
        opacity: 1;
      }
    `}

  ${Title}, ${Title1}, .scan {
    position: absolute;
    z-index: 2;
  }

  ${Title} {
    left: 8px;
    top: 10px;
  }

  ${Title1} {
    bottom: -5px;
    left: 5px;
  }

  .scan {
    top: 55%;
    left: 15px;
    transform: translateY(-50%);
    background-color: #00dc64;
    color: #f0ffff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #f4f4f4;
  border-bottom: 2px solid #f4f4f4;
  position: sticky;
  top: 0;
  background-color: rgb(255, 255, 255);
  z-index: 20;
`;
export const Wrapper2 = styled.div`
  padding-left: 170px;

  background-color: #f4f4f4;
  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    padding-left: 350px;
  }
  @media screen and (min-width: 1922px) and (max-width: 2560px) {
    padding-left: 680px;
  }
`;
export const Text = styled.a`
  margin-right: 5px;
  display: block;
  font-size: 15px;
  font-weight: 500;
  line-height: 70px;
  padding: 0 20px;
  color: #000;
  &:hover {
    color: #000;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 2px;
    width: 70px;
    height: 2px;
    background-color: #000;
    display: none;
  }

  &.active::before {
    display: block;
  }
  &.inactive {
    color: #ccc;
    &:hover {
      color: #000;
    }
  }
  ${(props) =>
    props.active &&
    css`
      color: #000;
      &::before {
        display: block;
      }
    `}

  ${(props) =>
    props.inactive &&
    css`
      color: #ccc;
      &::before {
        display: none;
      }
    `}
`;
export const Text1 = styled(Text)`
  margin-right: 5px;
  display: block;
  font-size: 15px;
  font-weight: 500;
  line-height: 70px;
  padding: 0 55px;
  scroll-padding-top: 50px;
  color: #000;
  &:hover {
    color: #000;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 2px;
    width: 70px;
    height: 2px;
    background-color: #000;
    display: none;
  }
  &.active::before {
    display: block;
  }
  &.inactive {
    color: #ccc;
    &:hover {
      color: #000;
    }
  }
`;

export const Text3 = styled.a`
  margin-right: 5px;
  display: block;
  font-size: 15px;
  font-weight: 500;
  line-height: 70px;
  padding: 0 15px;
  color: #000;
  &:hover {
    color: #000;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  right: 170px;
  top: 175px;
  width: 140px;
  z-index: 20;
  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    right: 360px;
  }
  @media screen and (min-width: 1922px) and (max-width: 2560px) {
    right: 690px;
  }
`;

export const DropdownItem = styled.div`
  padding: 15px;
  padding-left: 40px;
  cursor: pointer;
`;
export const DropdownToggle = styled.div`
  cursor: pointer;
  display: inline-block;
  user-select: none;
  font-size: 16px;
  color: #333;
  position: absolute;
  right: 190px;
  top: 200px;
  @media screen and (min-width: 1537px) and (max-width: 1920px) {
    right: 370px;
  }
  @media screen and (min-width: 1922px) and (max-width: 2560px) {
    right: 690px;
  }
`;
