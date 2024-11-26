import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

interface Cta {
  text: string;
  link: string;
}

interface HeroSectionProps {
  tagline: string;
  description: string;
  ctas: Cta[];
  herobackground: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  tagline,
  description,
  ctas,
  herobackground,
}) => (
  <section className="hero-section">
    {/* Background Image */}
    <div
      className="hero-background"
      style={{ backgroundImage: `url(${herobackground})` }}
    ></div>

    {/* Text Overlay */}
    <div className="hero-text">
      {/* Image Section: Now First */}
      <div className="hero-text-image">
        <img src="https://i.ibb.co/CB4kLsF/splash.png" alt="Splash" />
      </div>

      {/* Text and Buttons Section */}
      <div className="hero-text-content">
        <Title level={2} style={{ color: "white", marginBottom: "10px" }}>
          {tagline}
        </Title>
        <Paragraph style={{ color: "white", maxWidth: "600px" }}>
          {description}
        </Paragraph>
        <div style={{ marginTop: "20px" }}>
          {ctas.map((cta) => (
            <Button
              key={cta.text}
              type="primary"
              href={cta.link}
              style={{
                margin: "5px",
              }}
            >
              {cta.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
