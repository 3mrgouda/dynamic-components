import Alert from "./components/ui/Alert";
import "./App.css";
import {
  Ban,
  Bell,
  CheckCheckIcon,
  TriangleAlert,
  CircleAlert,
} from "lucide-react";

function App() {
  return (
    <>
      <Alert
        type="alert-default"
        icon={<Bell size={20} />}
        title="Update your plan"
        describtioin="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta aut
      qui temporibus soluta nobis accusamus illo quis omnis sapiente."
      >
        <p>
          Lorem ipsum dolor sit amet consectetur <a href="/">hello! world.</a>{" "}
          adipisicing elit. Sunt, possimus?
        </p>
      </Alert>
      <Alert
        type="alert-info"
        icon={<CircleAlert size={20} />}
        title="Note"
        describtioin="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta aut
        qui temporibus soluta nobis accusamus illo quis omnis sapiente."
      />
      <Alert
        type="alert-success"
        icon={<CheckCheckIcon size={20} />}
        title="Your order has been processed"
        describtioin="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta aut
        qui temporibus soluta nobis accusamus illo quis omnis sapiente."
      />
      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title="Something went wrong"
        describtioin="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta aut
        qui temporibus soluta nobis accusamus illo quis omnis sapiente."
      />
      <Alert
        type="alert-warning"
        icon={<TriangleAlert size={20} />}
        title="Tips & Tricks"
        describtioin="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta aut
        qui temporibus soluta nobis accusamus illo quis omnis sapiente."
      />
    </>
  );
}

export default App;
