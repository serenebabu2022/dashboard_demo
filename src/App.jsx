// ----------------------------------------------------------------------

/* Imports */
import "./App.css";

/* Relative Imports */
import MainLayout from "./MainLayout";
import ThemeConfig from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeConfig>
        <MainLayout />
      </ThemeConfig>
    </div>
  );
}

export default App;
