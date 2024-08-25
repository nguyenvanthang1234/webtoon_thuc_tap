import React, { useEffect, useState } from "react";
import Footer from "../../components/FooterComponent/FooterComponent";
import {
  CardList,
  CardItem,
  CardItem1,
  CardItem2,
  CardItem3,
  CardItem4,
  CardItem5,
  CardItem6,
  CardList1,
  CardList2,
  CardList3,
  CardList4,
  CardList5,
  CardList6,
  CardFront,
  Info,
  Subj,
  GradeArea,
  StylePauseCircleOutlined,
  GradeEm,
  StyledHeartOutlined,
  Week,
  WeekList,
  WeekItem,
  MainContent,
  Top,
  Text,
  WeekItem1,
  WeekList1,
  RightOutlinedWrapper,
  Line,
  ScrollButton,
  RightOutlinedWrapperButton,
  TextBottom,
  DropdownToggle,
  DropdownContainer,
  DropdownItem,
  Title
} from "./style.js";
import { CheckOutlined } from "@ant-design/icons";
import cate01 from "../../asset/cate-01.webp";
import cate02 from "../../asset/cate-02.webp";
import cate03 from "../../asset/cate-03.webp";
import cate04 from "../../asset/cate-04.webp";
import cate05 from "../../asset/cate-05.webp";
import cate06 from "../../asset/cate-06.webp";
import cate08 from "../../asset/download (28).jpeg";
import cate09 from "../../asset/download (31).jpeg";
import cate10 from "../../asset/download (30).jpeg";
import cate11 from "../../asset/cate-03.webp";
import cate12 from "../../asset/cate-06.webp";
import cate13 from "../../asset/download (31).jpeg";
import cate14 from "../../asset/download (31).jpeg";
import cate15 from "../../asset/genres/0A_Heartfelt_Andante_thumbnail_desktop.jpg";
import cate16 from "../../asset/genres/0Back-to-You_ipad.jpg";
import cate17 from "../../asset/genres/0Bastard_ipad.jpg";
import cate18 from "../../asset/genres/0Boyfriend-of-the-Dead_ipad.jpg";
import cate19 from "../../asset/genres/0Caster_ipad.jpg";
import cate20 from "../../asset/genres/0DarkMortal_desktop_thumbnail.jpg";
import cate21 from "../../asset/genres/0DearX_desktop_thumbnail.jpg";
import cate22 from "../../asset/genres/0FromMorningtoNight_desktop_thumbnail.jpg";
import cate23 from "../../asset/genres/0Gepetto_ipad-2.jpg";
import cate24 from "../../asset/genres/0I_mDatingAPsychopath_Thumbnail_Desktop.jpg";
import cate25 from "../../asset/genres/0KillerPeter_thumbnail_desktop.jpg";
import cate27 from "../../asset/genres/0LetsPlay_desktop_thumbnail.jpg";
import cate32 from "../../asset/genres/0KillerPeter_thumbnail_desktop.jpg";
import cate28 from "../../asset/genres/0LetsPlay_desktop_thumbnail.jpg";
import cate29 from "../../asset/genres/0Lost-in-Translation_ipad.jpg";
import cate30 from "../../asset/genres/0Mom2C-I27m-Sorry_ipad.jpg";
import cate31 from "../../asset/genres/0My-Reason-to-Die_Launch__thumbnail_desktop.jpg";
import cate33 from "../../asset/genres/0MyLifeasaLoser_desktop_thumbnail.jpg";
import cate34 from "../../asset/genres/0Nice-To-Meet-You_ipad.jpg";
import cate35 from "../../asset/genres/0NoiseFromUpstairs_thumbnail_desktop.jpg";
import cate36 from "../../asset/genres/0OneofaKindRomance_thumbnail_desktop.jpg";
import cate40 from "../../asset/genres/0ShesHopeless_desktop_thumbnail.jpg";
import cate41 from "../../asset/genres/0TatatheCat_thumbnail_desktop.jpg";
import cate43 from "../../asset/genres/0The-Golden-Spoon_desktop_thumbnail.jpg";

const category1 = [
  "DRAMA",
  "FANTASY",
  "COMEDY",
  "ACTION",
  "SLICEOFLIFE",
  "ROMANCE",
  "SUPERHERO",
  "SCIFI",
  "THRILLER",
  "SUPERNATURAL"
];
const category2 = [
  "MYSTREY",
  "SPORTS",
  "HISTORICAL",
  "HEARTWARING",
  "HORROR",
  "INFORMATIVE"
];

const categoryColors = {
  DRAMA: "#FF6347",
  FANTASY: "#6A5ACD",
  COMEDY: "#FFD700",
  ACTION: "#DC143C",
  SLICEOFLIFE: "#32CD32",
  ROMANCE: "#FF69B4",
  SUPERHERO: "#4682B4",
  SCIFI: "#00CED1",
  THRILLER: "#8B0000",
  SUPERNATURAL: "#4B0082",
  MYSTREY: "#7B68EE",
  SPORTS: "#FF4500",
  HISTORICAL: "#DAA520",
  HEARTWARING: "#FFB6C1",
  HORROR: "#8B0000",
  INFORMATIVE: "#20B2AA"
};
const Data = {
  DRAMA: [
    <CardList key="1">
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate08} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
      <CardItem>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem>
    </CardList>
  ],
  FANTASY: [
    <CardList1 key="2">
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate09} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
      <CardItem1>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem1>
    </CardList1>
  ],
  COMEDY: [
    <CardList2 key="3">
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate10} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate28} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
      <CardItem2>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem2>
    </CardList2>
  ],
  ACTION: [
    <CardList3 key="4">
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate11} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate29} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
      <CardItem3>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem3>
    </CardList3>
  ],
  SLICEOFLIFE: [
    <CardList4 key="5">
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate15} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate12} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate30} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
      <CardItem4>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem4>
    </CardList4>
  ],
  ROMANCE: [
    <CardList5 key="6">
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate16} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate03} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate31} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
      <CardItem5>
        <a href="#/">
          <CardFront>
            <img src={cate13} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem5>
    </CardList5>
  ],
  SUPERHERO: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate17} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate32} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  SCIFI: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate18} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate34} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  THRILLER: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate19} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate33} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  SUPERNATURAL: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate20} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate34} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  MYSTREY: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate21} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate35} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  SPORTS: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate22} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate36} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  HISTORICAL: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate23} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={37} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  HEARTWARING: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate24} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate40} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  HORROR: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate25} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate41} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ],
  INFORMATIVE: [
    <CardList6 key="7">
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate27} alt="nice" />
            <Info>
              <Subj>Solo Leveling</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <StylePauseCircleOutlined />
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate02} alt="nice" />
            <Info>
              <Subj>Noblesse</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>9.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate14} alt="nice" />
            <Info>
              <Subj>Sweet Home</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>4.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate04} alt="nice" />
            <Info>
              <Subj>True Beauty</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>3.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Dr.Frost</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate06} alt="nice" />
            <Info>
              <Subj>Tower of God </Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>1.2M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate05} alt="nice" />
            <Info>
              <Subj>Suicide Hunter</Subj>

              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Charming You</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>2.3M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate43} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
      <CardItem6>
        <a href="#/">
          <CardFront>
            <img src={cate01} alt="nice" />
            <Info>
              <Subj>Villain to Kill</Subj>
              <GradeArea>
                <StyledHeartOutlined color="#00dc64" />
                <GradeEm>8.9M</GradeEm>
                <p className="scan">Up</p>
              </GradeArea>
            </Info>
          </CardFront>
        </a>
      </CardItem6>
    </CardList6>
  ]
};
const genres = ["by Popularity", "by Likes", "by Date"];

const GenresPage = () => {
  const [activeCate, setActiveCate] = useState("DRAMA");
  const [showButton, setShowButton] = useState(false);
  const [currentGenre, setCurrentGenre] = useState("by Popularity");
  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  const [othersDropdownOpen, setOthersDropdownOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("DRAMA");
  const [currentTitleColor, setCurrentTitleColor] = useState("#000");

  const toggleGenreDropdown = () => {
    setGenreDropdownOpen(!genreDropdownOpen);
  };

  const toggleOthersDropdown = () => {
    setOthersDropdownOpen(!othersDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleActive = (cate) => {
    setActiveCate(cate);
    setCurrentTitleColor(categoryColors[cate]); // Cập nhật màu của tiêu đề
    setCurrentTitle(cate);
  };

  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    toggleGenreDropdown(false);
  };
  return (
    <>
      <Week>
        <WeekList>
          {category1.map((cate) => (
            <WeekItem
              key={cate}
              className={activeCate === cate ? "active" : "inactive"}
              onClick={() => {
                handleActive(cate);
                setCurrentTitle(cate);
              }}
            >
              {cate}
            </WeekItem>
          ))}
          <Text
            onClick={toggleOthersDropdown}
            className={activeCate ? "active" : "inactive"}
            dropdownOpen={othersDropdownOpen}
          >
            OTHERS <RightOutlinedWrapper dropdownOpen={othersDropdownOpen} />
            <Line dropdownOpen={othersDropdownOpen} />
          </Text>
        </WeekList>
        {othersDropdownOpen && (
          <WeekList1>
            {category2.map((cate, index) => (
              <WeekItem1 key={index} onClick={() => handleActive(cate)}>
                {cate}
              </WeekItem1>
            ))}
          </WeekList1>
        )}
      </Week>

      <DropdownToggle onClick={toggleGenreDropdown}>
        {currentGenre}
        <CheckOutlined style={{ marginLeft: "8px" }} />
      </DropdownToggle>

      {genreDropdownOpen && (
        <DropdownContainer>
          {genres.map((genre) => (
            <DropdownItem key={genre} onClick={() => handleGenreChange(genre)}>
              <span>{genre}</span>
              {currentGenre === genre && (
                <CheckOutlined
                  style={{
                    position: "absolute",
                    right: "-12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#A9A9A9"
                  }}
                />
              )}
            </DropdownItem>
          ))}
        </DropdownContainer>
      )}

      <MainContent>
        <Title style={{ color: currentTitleColor }}>{currentTitle}</Title>
        <Top>
          {Data[activeCate].map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </Top>
      </MainContent>
      <ScrollButton onClick={scrollToTop} show={showButton}>
        <RightOutlinedWrapperButton />
        <TextBottom>TOP</TextBottom>
      </ScrollButton>
      <Footer />
    </>
  );
};

export default GenresPage;
