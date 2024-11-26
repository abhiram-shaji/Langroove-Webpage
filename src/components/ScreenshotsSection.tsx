import { Carousel, Typography } from "antd";
const { Title } = Typography;

interface Slide {
  image: string;
  alt: string;
}

interface ScreenshotsSectionProps {
  title: string;
  carousel: Slide[];
}

const ScreenshotsSection: React.FC<ScreenshotsSectionProps> = ({ title, carousel }) => (
  <section style={{ padding: "50px 20px" }}>
    <Title level={3}>{title}</Title>
    <Carousel autoplay>
      {carousel.map((slide) => (
        <div key={slide.alt}>
          <img
            src={slide.image}
            alt={slide.alt}
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  </section>
);

export default ScreenshotsSection;
