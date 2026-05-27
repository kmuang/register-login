import { AuthPanel } from "./ui/auth-panel";

export default function Home() {
  return (
    <main className="page-shell">
      <AuthPanel />
      <h1 className="page-title">Register/Login Page</h1>
    </main>
  );
}
