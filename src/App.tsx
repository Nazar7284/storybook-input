import "./App.css";
import InputGroup from "./components/InputGroup";

function App() {
  return (
    <div className="App">
      <InputGroup
        direction="row"
        labelText="Label is"
        labelSize="md"
        tooltip="This is a first tooltip"
        sizeInput="md"
        placeholder="Input..."
        annotationText="Please enter your email"
        typeInput="email"
        // disabled
        required
        rightPosition={false}
      />
    </div>
  );
}

export default App;
