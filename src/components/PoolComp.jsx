import ImgWithText from "../reusable-components/ImgWithText";
import PoolImage from "../assets/images/pool-img.png";

export default function PoolComp() {
  const btn = "REGISTER TO PLAY";
  const btnClass = "btn-pool";

  const header = (
    <h3>
      the largest POOL
      <br />
      <span>COMPETITION </span>
      <br />
      IN NIGERIAN HISTORY
    </h3>
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
