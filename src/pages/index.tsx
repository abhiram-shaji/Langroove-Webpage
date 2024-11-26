// src/pages/index.tsx
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Title>Hello World</Title>
      <Paragraph>Welcome to my Next.js app with Ant Design!</Paragraph>
      <Button type="primary">Click Me</Button>
    </div>
  );
}
