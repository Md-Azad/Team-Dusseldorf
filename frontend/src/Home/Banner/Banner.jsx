import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/c1.png";
const Banner = () => {
  return (
    <div className=" mt-8 grid grid-cols-2 gap-4 h-full">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam,
        quod enim, velit ut nobis temporibus ab sit assumenda at molestias unde
        dolorem, tempore omnis illum vel iste distinctio laudantium. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Hic aliquam, quod enim,
        velit ut nobis temporibus ab sit assumenda at molestias unde dolorem,
        tempore omnis illum vel iste distinctio laudantium. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Hic aliquam, quod enim, velit ut
        nobis temporibus ab sit assumenda at molestias unde dolorem, tempore
        omnis illum vel iste distinctio laudantium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Hic aliquam, quod enim, velit ut nobis
        temporibus ab sit assumenda at molestias unde dolorem, tempore omnis
        illum vel iste distinctio laudantium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Hic aliquam, quod enim, velit ut nobis
        temporibus ab sit assumenda at molestias unde dolorem, tempore omnis
        illum vel iste distinctio laudantium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Hic aliquam, quod enim, velit ut nobis
        temporibus ab sit assumenda at molestias unde dolorem, tempore omnis
        illum vel iste distinctio laudantium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Hic aliquam, quod enim, velit ut nobis
        temporibus ab sit assumenda at molestias unde dolorem, tempore omnis
        illum vel iste distinctio laudantium.
      </div>
      <div className="h-[500px] overflow-hidden">
        <Carousel>
          <div>
            <img src={image1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={image1} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={image1} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={image1} />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img src={image1} />
            <p className="legend">Legend 5</p>
          </div>
          <div>
            <img src={image1} />
            <p className="legend">Legend 6</p>
          </div>
        </Carousel>
      </div>
     
    </div>
  );
};

export default Banner;
