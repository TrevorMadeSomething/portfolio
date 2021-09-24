import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

import "./app.scss";
import { useSpring, animated } from "react-spring";
import { useState, useCallback } from "react";
import Menu from "./components/menu/Menu";

function Text({ children, offset, pos, start, end }) {
  const [transform] = useState(() =>
    offset
      .interpolate({
        range: [start, end],
        output: [100, 0],
        extrapolate: "clamp",
      })
      .interpolate((s) => `translate3d(${s}px,0,0)`)
  );
  const [opacity] = useState(() => offset.interpolate([start, end], [0, 1]));
  return (
    <animated.div
      style={{
        position: "absolute",
        height: `${100}vh`,
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
          start={1}
          end={1.7}
          children={<Portfolio />}
        />
        <Text offset={scroll} pos={2} start={3} end={4} children={<Works />} />
        <Text
          offset={scroll}
          pos={3}
          start={5}
          end={5.5}
          children={<Contact />}
        />
      </div>
    </div>
  );
}

export default App;
