export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Radial Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.02),transparent_50%)]" />
      
      {/* Floating color blobs */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-secondary/8 rounded-full blur-[110px] animate-blob" />
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-accent/5 rounded-full blur-[130px] animate-blob-delayed" />
      <div className="absolute bottom-10 left-1/4 w-[380px] h-[380px] bg-secondary/5 rounded-full blur-[100px] animate-blob" />
    </div>
  );
}
