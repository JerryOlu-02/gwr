import ImgWithText from "../reusable-components/ImgWithText";
import PoolImage from "../assets/images/pool-img.png";
import PoolImageClear from "../assets/images/pool-img-clear.png";

export default function PoolComp() {
  const btn = "REGISTER TO PLAY";
  const btnClass = "btn-pool";
  const text =
    "The largest eight-ball pool competition in Nigerian history—an unprecedented gathering of the nation’s finest cue sports talents, showcasing elite skill, fierce competition, and record-breaking participation. A landmark event that elevates the profile of billiards in Nigeria, and sets a new standard of excellence in the sport.";

  const header = (
    <>
      <h3>the largest POOL</h3>
      <h1 className="blue">COMPETITION </h1>
      <h3>IN NIGERIAN HISTORY</h3>
    </>
  );

  return (
    <ImgWithText
      btnLink={"https://tix.africa/discover/poolfestng"}
      sectionClass={"ImgWithText__2"}
      srcPlaceholder={PoolImage}
      src={PoolImageClear}
      button={btn}
      h3={header}
      btnClass={btnClass}
      text={text}
    />
  );
}
