import { Row, Col, Typography, Card } from "antd";
const { Title, Paragraph } = Typography;

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => (
  <section style={{ padding: "50px 20px", backgroundColor: "#f5f5f5" }}>
    <Title level={3}>What Our Users Say</Title>
    <Row gutter={[16, 16]}>
      {testimonials.map((testimonial) => (
        <Col key={testimonial.author} xs={24} sm={12} lg={8}>
          <Card hoverable>
            <Paragraph>"{testimonial.quote}"</Paragraph>
            <Paragraph>- {testimonial.author}</Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default TestimonialsSection;
