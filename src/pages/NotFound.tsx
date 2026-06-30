import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';
import { DotPattern } from '../components/ui/Patterns';

export function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6">
      <DotPattern className="opacity-30" />
      
      <div className="max-w-md w-full glass-premium p-10 rounded-3xl border border-border-default shadow-2xl relative text-center flex flex-col items-center gap-6 overflow-hidden">

        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-7xl font-extrabold tracking-tighter text-primary font-sans">404</h1>
          <h2 className="text-xl font-bold font-sans text-heading mt-2">Page Not Discovered</h2>
          <p className="text-xs text-body leading-relaxed mt-2.5">
            The resource you are attempting to query does not exist or has been refactored under a new workspace path.
          </p>
        </div>

        <div className="flex gap-4 w-full mt-2">
          <Link
            to="/"
            className="flex-1 btn-primary py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg"
          >
            <Home className="w-4 h-4" /> Home Panel
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
