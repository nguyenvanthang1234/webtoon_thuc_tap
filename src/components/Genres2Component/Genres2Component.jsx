import React from "react";
import {
  MainContent,
  Top,
  TopItem,
  ContentGenres,
  ButtonFind,
  SectionContent,
  RightOutlinedWrapper
} from "./style";
import cate01 from "../../asset/gener1.jpg";
import cate02 from "../../asset/gener2.png";
import cate03 from "../../asset/gener3.jpg";
import cate04 from "../../asset/gener4.png";
import cate05 from "../../asset/gener5.jpg";
import cate06 from "../../asset/gener6.jpg";
import cate07 from "../../asset/gener7.jpg";
import cate08 from "../../asset/gener8.jpg";
import cate09 from "../../asset/gener9.jpg";
import cate10 from "../../asset/gener10.jpg";

const images = [
  { src: cate01, link: "https://example.com/read/1" },
  { src: cate02, link: "https://example.com/read/2" },
  { src: cate03, link: "https://example.com/read/3" },
  { src: cate04, link: "https://example.com/read/4" },
  { src: cate05, link: "https://example.com/read/5" },
  { src: cate06, link: "https://example.com/read/6" },
  { src: cate07, link: "https://example.com/read/7" },
  { src: cate08, link: "https://example.com/read/8" },
  { src: cate09, link: "https://example.com/read/8" },
  { src: cate10, link: "https://example.com/read/8" }
];

// Thành phần LinkTopItem
const LinkTopItem = ({ link, children }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const generateTopItems2 = (count) => {
  const items = Array.from({ length: count }, (_, i) => (
    <LinkTopItem key={i} link={images[i % images.length].link}>
      <TopItem bg={images[i % images.length].src}>
        <SectionContent>
          <p>Wintapo for item {i + 1}</p>
          <span>Arnichii</span>
        </SectionContent>
      </TopItem>
    </LinkTopItem>
  ));
  return items;
};

const contentForDays = generateTopItems2(10);

const Genres2 = () => {
  return (
    <MainContent>
      <ContentGenres>
        <h2>WEBTOON</h2>
        <h2>CANVAS</h2>
        <div className="span">
          <p>Have a story to tell?</p>
          <p>Share it on WEBTOON CANVAS.</p>
          <p>Find everything you need to get it published.</p>
        </div>

        <ButtonFind>
          Find out more <RightOutlinedWrapper />
        </ButtonFind>
      </ContentGenres>
      <Top>{contentForDays}</Top>
    </MainContent>
  );
};

export default Genres2;
