import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
function LoadingPage() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-screen">
      <Bouncy size="60" speed="1.85" color="#0C2C3F" />
      
    </div>
  );
}
export default LoadingPage;
// Default values shown
