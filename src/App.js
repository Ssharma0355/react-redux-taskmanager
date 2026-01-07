import StateManagement from "./components/StateManagement";
import Users from "./components/Users";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <HomePage />
      <Users />
      <StateManagement />
    </div>
  )
}