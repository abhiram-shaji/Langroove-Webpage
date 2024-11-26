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

const HeroSection: React.FC<HeroSectionProps> = ({ tagline, description, ctas, herobackground }) => (
  <section
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "40px",
      backgroundColor: "#f5f5dc", // Beige color
      borderRadius: "15px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Left side with text */}
    <div style={{ flex: 1, maxWidth: "60%", zIndex: 1 }}>
      <Title level={2}>{tagline}</Title>
      <Paragraph style={{ maxWidth: "600px" }}>{description}</Paragraph>
      <div style={{ marginTop: "20px" }}>
        {ctas.map((cta) => (
          <Button key={cta.text} type="primary" href={cta.link} style={{ margin: "5px" }}>
            {cta.text}
          </Button>
        ))}
      </div>
    </div>

    {/* Right side with background image */}
    <div
      style={{
        flex: 1,
        backgroundImage: `url(${herobackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        borderRadius: "15px",
      }}
    ></div>
  </section>
);

export default HeroSection;
