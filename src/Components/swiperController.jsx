import React from "react";
import {Link} from "react-router-dom";

const SwiperController = (props) => {
  return (
    <>
        <div className="landing-swiper__controller">
      <div>       
        <div className="flex relative">
          <Link to={`/rooms/${props.link}`} className="landing-swiper__seemore">see more</Link>
          <Link>book now</Link>
        </div>       
      </div>
  </div>
    </>
  );
}

export default SwiperController;