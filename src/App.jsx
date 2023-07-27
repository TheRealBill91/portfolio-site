import { MyWork } from "./components/MyWork";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import "./main.css";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col ">
      <Header />
      <main className="flex h-screen flex-1 flex-col items-center gap-6 bg-slate-100 p-6">
        <About />
        <MyWork />
      </main>
      <Footer />
    </div>
  );
}

export default App;
