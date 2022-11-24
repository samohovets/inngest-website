export default function Container({ children, className = "" }) {
  return (
    <div
      className={`max-w-container-desktop m-auto px-10 lg:px-20 relative z-10 ${className}`}
    >
      {children}
    </div>
  );
}
