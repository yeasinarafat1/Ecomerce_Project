declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    nextArrow?: React.ReactNode;
    prevArrow?: React.ReactNode;
    [key: string]: any;
  }

  export class Slider extends React.Component<Settings> {}
  export default Slider;
}
