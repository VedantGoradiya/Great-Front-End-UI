import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ title, path }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(path)}
      className="feature-card shadow-sm border-0"
    >
      <Card.Body className="text-center fw-semibold fs-5">
        {title}
      </Card.Body>
    </Card>
  );
};

export default FeatureCard;