import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  //const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  //};
  const [alertVisibile, setAlertVisibilty] = useState(false);
  return (
    //<div>
    // <ListGroup
    //   items={items}
    //   heading="Cities"
    //   onSelectItem={handleSelectItem}
    // />
    //</div>
    //<div>
    //  <Alert>
    //  Hello World
    //  </Alert>
    //</div>
    <div>
      {alertVisibile && <Alert onClose={() => setAlertVisibilty(false)}>My Alert</Alert>}
      <Button color='secondary' onClick={() => setAlertVisibilty(true)}>My Button</Button>
    </div>
  );
}
export default App;
