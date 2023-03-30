import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  //const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  //};
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
      <button onClick={ () => console.log('Clicked')}> My button</button>
      <button color='secondary' onClick={() => console.log('Clicked')}>My Button</button>
    </div>
  );
}
export default App;
