import { Typography } from "antd";
const { Title } = Typography;

interface QuickLink {
  text: string;
  link: string;
}

interface SocialMedia {
  platform: string;
  link: string;
}

interface FooterProps {
  quickLinks: QuickLink[];
  socialMedia: SocialMedia[];
}

const Footer: React.FC<FooterProps> = ({ quickLinks, socialMedia }) => (
  <footer style={{ padding: "20px", textAlign: "center", backgroundColor: "#001529", color: "#fff" }}>
    <div>
      <Title level={4} style={{ color: "#fff" }}>Quick Links</Title>
      {quickLinks.map((link) => (
        <a key={link.text} href={link.link} style={{ margin: "0 10px", color: "#1890ff" }}>
          {link.text}
        </a>
      ))}
    </div>
    <div style={{ marginTop: "10px" }}>
      <Title level={4} style={{ color: "#fff" }}>Follow Us</Title>
      {socialMedia.map((social) => (
        <a key={social.platform} href={social.link} style={{ margin: "0 10px", color: "#1890ff" }}>
          {social.platform}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
