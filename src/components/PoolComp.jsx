import ImgWithText from "../reusable-components/ImgWithText";
import PoolImage from "../assets/images/pool-img.png";

export default function PoolComp() {
  const btn = "REGISTER TO PLAY";
  const btnClass = "btn-pool";

  const header = (
    <>
      <h3>the largest POOL</h3>
      <h1 className="blue">COMPETITION </h1>
      <h3>IN NIGERIAN HISTORY</h3>
    </>
  );

  return (
    <ImgWithText
      sectionClass={"ImgWithText__2"}
      src={PoolImage}
      button={btn}
      h3={header}
      btnClass={btnClass}
    />
  );
}
