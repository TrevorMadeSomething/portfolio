import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

import "./app.scss";
import { useSpring, animated } from "react-spring";
import { useState, useCallback } from "react";
import Menu from "./components/menu/Menu";

function Text({ children, offset, pos, start, end, leftRightValue, height }) {
  const [transform] = useState(() =>
    offset
      .to({
        range: [start, end],
        output: [leftRightValue, 0],
        extrapolate: "clamp",
      })
      .to((s) => `translate3d(${s}px,0,0)`)
  );

  const [opacity] = useState(() => offset.to([start, end], [0, 1]));
  return (
    <animated.div
      style={{
        position: "absolute",
        height: `${height}vh`,
        left: 0,
        top: `${pos * 100}vh`,
        transform,
        opacity,
      }}
    >
      {children}
    </animated.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }));
  const onScroll = useCallback(
    (e) => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }),
    // eslint-disable-next-line
    []
  );
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections" onScroll={onScroll}>
        <Intro />

        <Text
          offset={scroll}
          pos={1}
          leftRightValue={400}
          start={1.3}
          end={1.9}
          height={100}
          children={<Portfolio />}
        />
        <Text
          offset={scroll}
          pos={2}
          start={3}
          end={4}
          height={100}
          leftRightValue={-400}
          topDownValue={0}
          children={<Works />}
        />
        <Text
          offset={scroll}
          pos={3}
          start={4}
          leftRightValue={400}
          end={5}
          height={70}
          children={<Contact />}
        />
      </div>
    </div>
  );
}

export default App;
