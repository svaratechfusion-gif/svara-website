import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl mb-8 text-white/20">404</div>
        <h1 className="text-4xl md:text-5xl mb-6">Page Not Found</h1>
        <p className="text-xl text-white/60 mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
