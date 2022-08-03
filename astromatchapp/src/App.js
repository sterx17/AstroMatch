import { AppContainer } from "./AppStyles";
import { ChoiceScreen } from "./components/ChoiceScreen/ChoiceScreen";
import { WelcomeScreen } from "./components/WelcomeScreen/WelcomeScreen";


function App() {
  return (
    <AppContainer>
      {/* <WelcomeScreen /> */}
      <ChoiceScreen />
    </AppContainer>
  );
}

export default App;
