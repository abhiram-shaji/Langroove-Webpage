import React from "react";
import { Row, Col, Typography } from "antd";
import styles from "../styles/FeaturesSection.module.css";

const { Title, Paragraph } = Typography;

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeaturesSectionProps {
  coreFeatures: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ coreFeatures }) => (
  <section className={styles.featuresSection}>
    {coreFeatures.map((feature, index) => (
      <Row
        key={feature.title}
        gutter={[16, 16]}
        align="middle"
        className={
          index % 2 === 0
            ? styles.featuresRow
            : `${styles.featuresRow} ${styles.featuresRowReverse}`
        }
      >
        <Col xs={24} md={12}>
          <img
            src={feature.image}
            alt={feature.title}
            className={styles.featuresImage}
          />
        </Col>
        <Col xs={24} md={12}>
          <Title className="title-font" level={4}>{feature.title}</Title>
          <Paragraph className="paragraph">{feature.description}</Paragraph>
        </Col>
      </Row>
    ))}
  </section>
);

export default FeaturesSection;
