import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import notFound from "../../public/assets/notfound.png";
const NotFound = () => {
  return (
    <div className="bg-gradient-to-t from-periwinkle-200 h-screen flex flex-col gap-4 justify-center items-center">
      <img width={"55%"} src={notFound} alt="404 page not found" />
      <Link to={"/"}>
        <Button size="lg">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
