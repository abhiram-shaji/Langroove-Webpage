import { Button, Typography } from "antd";
import DownloadOutlined from '@ant-design/icons/lib/icons/DownloadOutlined';
import GoogleOutlined from '@ant-design/icons/lib/icons/GoogleOutlined';


const { Title, Paragraph } = Typography;

interface HeroSectionProps {
  tagline: string;
  description: string;
  herobackground: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  tagline,
  description,
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
        <div style={{ marginTop: "20px"}}>
          <Button
            type="primary"
            href="your_playstore_link_here"
            className="custom-button"
            style={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <GoogleOutlined style={{ fontSize: "16px", marginRight: "8px" }} />
            Get it on Playstore
          </Button>
          <Button
            type="primary"
            href="your_apk_download_link_here"
            className="custom-button"
            style={{
              margin: "5px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DownloadOutlined
              style={{ fontSize: "16px", marginRight: "8px" }}
            />
            Download APK
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
