import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let [topLeftWidth, setTopLeftWidth] = useState("60%");
  let [topLeftHeight, setTopLeftHeight] = useState("40%");

  let [bottomLeftWidth, setBottomLeftWidth] = useState("40%");
  let [bottomLeftHeight, setBottomLeftHeight] = useState("60%");

  let [bottomRightWidth, setBottomRightWidth] = useState("60%");
  let [bottomRightHeight, setBottomRightHeight] = useState("40%");

  let [topRightWidth, setTopRightWidth] = useState("40%");
  let [topRightHeight, setTopRightHeight] = useState("60%");

  let [positionLogo, setPositionLogo] = useState("translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");

  let [tickerMain, setTickerMain] = useState({ value: -0, style: "translate3d(-0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" });
  let [tickerLeft, setTickerLeft] = useState({ value: -0, style: "translate3d(-0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" });
  let [tickerRight, setTickerRight] = useState({ value: -0, style: "translate3d(-0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" });
  let [tickerBottom, setTickerBottom] = useState({ value: 0, style: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" });



  const onMouseEnter = (event) => {

    const currentElement = event.target.attributes.getNamedItem("class").value;



    switch (currentElement) {
      case "home_topleft":
        setTopLeftWidth("70%");
        setBottomLeftWidth("50%");
        setBottomRightWidth("50%");
        setTopRightWidth("30%");

        setTopLeftHeight("50%");
        setBottomLeftHeight("50%");
        setBottomRightHeight("30%");
        setTopRightHeight("70%");

        setPositionLogo("translate3d(50%, 50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");
        break;
      case "home_bottomleft":
        setTopLeftWidth("75%");
        setBottomLeftWidth("55%");
        setBottomRightWidth("45%");
        setTopRightWidth("25%");

        setTopLeftHeight("40%");
        setBottomLeftHeight("60%");
        setBottomRightHeight("40%");
        setTopRightHeight("60%");

        setPositionLogo("translate3d(75%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");
        break;
      case "home_bottomright":
        setTopLeftWidth("56%");
        setBottomLeftWidth("36%");
        setBottomRightWidth("64%");
        setTopRightWidth("44%");

        setTopLeftHeight("24%");
        setBottomLeftHeight("76%");
        setBottomRightHeight("56%");
        setTopRightHeight("44%");

        setPositionLogo("translate3d(-20%, -80%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");
        break;
      case "home_topright":
        setTopLeftWidth("44%");
        setBottomLeftWidth("24%");
        setBottomRightWidth("76%");
        setTopRightWidth("56%");

        setTopLeftHeight("52%");
        setBottomLeftHeight("48%");
        setBottomRightHeight("28%");
        setTopRightHeight("72%");

        setPositionLogo("translate3d(-80%, 60%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");
        break;
      default:
        break;
    }

  }

  const onMouseLeave = (event) => {
    setTopLeftWidth("60%");
    setTopLeftHeight("40%");
    setBottomLeftWidth("40%");
    setBottomLeftHeight("60%");
    setBottomRightWidth("60%");
    setBottomRightHeight("40%");
    setTopRightWidth("40%");
    setTopRightHeight("60%");
    setPositionLogo("translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");
  }

  useEffect(() => {
    const interval = setInterval(() => {

      const currentTicker = tickerMain.value - 0.010;
      if (currentTicker > -50) {
        setTickerMain({ value: currentTicker, style: `translate3d(${currentTicker}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      } else {
        setTickerMain({ value: -0, style: `translate3d(-0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      }

      const currentTickerLeft = tickerLeft.value - 0.010;
      if (currentTickerLeft > -50) {
        setTickerLeft({ value: currentTickerLeft, style: `translate3d(${currentTickerLeft}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      } else {
        setTickerLeft({ value: -0, style: `translate3d(-0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      }

      const currentTickerRight = tickerRight.value - 0.010;
      if (currentTickerRight > -50) {
        setTickerRight({ value: currentTickerRight, style: `translate3d(${currentTickerRight}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      } else {
        setTickerRight({ value: -0, style: `translate3d(-0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      }

      const currentTickerBottom = tickerBottom.value + 0.010;
      if (currentTickerBottom < 50) {
        setTickerBottom({ value: currentTickerBottom, style: `translate3d(${currentTickerBottom}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      } else {
        setTickerBottom({ value: 0, style: `translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` });
      }

    }, 10);
    return () => clearInterval(interval);
  }, [tickerMain, tickerLeft, tickerRight, tickerBottom]);



  return (
    <>
      <Head>
        <title>ColorCrane</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        ></link>
      </Head>
      <>
        <div className='marquee right'><div className="inner"
          style={{ transform: tickerRight.style, transformStyle: 'preserve-3d', willChange: 'transform' }} >
          <div className="track-reverse">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image" ></img>
                  <div className="marquee-text">DON'T WORRY WE WON'T ASK YOU ABOUT THE METAVERSE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">OR RECOMMEND SELLING NFT MERCH</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">...UNLESS YOU WANNA?</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="track-reverse">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">DON'T WORRY WE WON'T ASK YOU ABOUT THE METAVERSE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">OR RECOMMEND SELLING NFT MERCH</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">...UNLESS YOU WANNA?</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="track-reverse">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">DON'T WORRY WE WON'T ASK YOU ABOUT THE METAVERSE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">OR RECOMMEND SELLING NFT MERCH</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">...UNLESS YOU WANNA?</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="track-reverse">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">DON'T WORRY WE WON'T ASK YOU ABOUT THE METAVERSE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">OR RECOMMEND SELLING NFT MERCH</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">...UNLESS YOU WANNA?</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="track-reverse">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">DON'T WORRY WE WON'T ASK YOU ABOUT THE METAVERSE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">OR RECOMMEND SELLING NFT MERCH</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">...UNLESS YOU WANNA?</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image w-condition-invisible"></img>
                  <div className="marquee-text w-dyn-bind-empty"></div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        <div className='marquee left' >
          <div className="inner"
            style={{ transform: tickerLeft.style, transformStyle: 'preserve-3d', willChange: 'transform' }} >
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">SAYING "WITH PROSECCO"</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">AFTER NEGRONI SBAGLIATO</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">IS REDUNDANT</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">BUT WE STILL STAN EMMA D'ARCY</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">SAYING "WITH PROSECCO"</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">AFTER NEGRONI SBAGLIATO</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">IS REDUNDANT</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">BUT WE STILL STAN EMMA D'ARCY</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">SAYING "WITH PROSECCO"</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">AFTER NEGRONI SBAGLIATO</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">IS REDUNDANT</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">BUT WE STILL STAN EMMA D'ARCY</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">SAYING "WITH PROSECCO"</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">AFTER NEGRONI SBAGLIATO</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">IS REDUNDANT</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">BUT WE STILL STAN EMMA D'ARCY</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">SAYING "WITH PROSECCO"</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">AFTER NEGRONI SBAGLIATO</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">IS REDUNDANT</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">BUT WE STILL STAN EMMA D'ARCY</div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img
                      src="/point.png"
                      loading="lazy" alt="" className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='marquee bottom' ><div className="inner bottom"
          style={{ transform: tickerBottom.style, transformStyle: 'preserve-3d', willChange: 'transform' }} >
          <div className="track">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div>
                </div>
              </div>
            </div>
          </div>
          <div className="track">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div>
                </div>
              </div>
            </div>
          </div>
          <div className="track">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div>
                </div>
              </div>
            </div>
          </div>
          <div className="track">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="row w-dyn-item"><img
                  src="/point.png"
                  loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CREATIVE STRATEGY </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">SOCIAL MEDIA </div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">BRANDING</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">CONTENT CREATIVE</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">VIDEO PRODUCTION</div><img
                    src="/point.png"
                    loading="lazy" alt="" className="image"></img>
                  <div className="marquee-text">WEB DESIGN</div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        <div className='marquee' >
          <div className="inner" style={{ transform: tickerMain.style, transformStyle: 'preserve-3d', willChange: 'transform' }} >
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img src="/point.png" loading="lazy" alt=""
                    className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt=""
                        className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img src="/point.png" loading="lazy" alt=""
                    className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt=""
                        className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img src="/point.png" loading="lazy" alt=""
                    className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt=""
                        className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img src="/point.png" loading="lazy" alt=""
                    className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt=""
                        className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="track">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="row w-dyn-item"><img src="/point.png" loading="lazy" alt=""
                    className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt="" className="image"></img>
                    <div className="marquee-text">WE’RE AN AWARD-WINNING, PURPOSE-DRIVEN, CREATIVE AGENCY. BUT YOU CAN
                      JUST CALL US COLORCRANE.</div><img src="/point.png" loading="lazy" alt=""
                        className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div><img src="/point.png" loading="lazy" alt=""
                      className="image w-condition-invisible"></img>
                    <div className="marquee-text w-dyn-bind-empty"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home_wrapper'>
          <motion.div className='logo' animate={{ transform: positionLogo }} ><img src="/logo.png" ></img></motion.div>
          <motion.div className='home_topleft' animate={{ width: topLeftWidth, height: topLeftHeight }} onMouseEnter={(event) => onMouseEnter(event)} onMouseLeave={(event) => onMouseLeave(event)} ><div className='home__title' >Work</div></motion.div>
          <motion.div className='home_bottomleft' animate={{ width: bottomLeftWidth, height: bottomLeftHeight }} onMouseEnter={(event) => onMouseEnter(event)} onMouseLeave={(event) => onMouseLeave(event)}   ><div className='home__title' >About</div></motion.div>
          <motion.div className='home_bottomright' animate={{ width: bottomRightWidth, height: bottomRightHeight }} onMouseEnter={(event) => onMouseEnter(event)} onMouseLeave={(event) => onMouseLeave(event)}   ><div className='home__title' >Community</div></motion.div>
          <motion.div className='home_topright' animate={{ width: topRightWidth, height: topRightHeight }} onMouseEnter={(event) => onMouseEnter(event)} onMouseLeave={(event) => onMouseLeave(event)}   ><div className='home__title' >Connect</div></motion.div>
        </div>
      </>
    </>
  )
}
