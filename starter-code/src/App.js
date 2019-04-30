import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class App extends React.Component {
  render() {
    // const Navbar = Navbar
    const element = (
      <div>
        <header>
          <Navbar />
        </header>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
      </div>
    );
    return element;
  }
}
export default App;
