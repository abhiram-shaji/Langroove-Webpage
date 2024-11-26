import { Row, Col, Typography, Card } from "antd";
const { Title, Paragraph } = Typography;

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  coreFeatures: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ coreFeatures }) => (
  <section style={{ padding: "50px 20px" }}>
    <Title level={3}>Core Features</Title>
    <Row gutter={[16, 16]}>
      {coreFeatures.map((feature) => (
        <Col key={feature.title} xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Title level={4}>{feature.title}</Title>
            <Paragraph>{feature.description}</Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default FeaturesSection;
