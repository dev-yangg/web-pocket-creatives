import { Link } from "gatsby";
import EmptyStateHandler from "../components/EmptyStateHandler";

export default function NotFoundPage() {
  return (
    <main className="pt-app-padding-top">
      <div className="content-boundary flex flex-col items-center gap-y-6 py-16">
        <EmptyStateHandler message="Page not found" />
        <Link to="/" className="underline">
          Back to home
        </Link>
      </div>
    </main>
  );
}
