import React, {useState, useEffect} from 'react'

const useScript = (src) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      let script = document.querySelector(`script[src="${src}"]`);
  
      if (!script) {
        script = document.createElement("script");
        // script.async = true;
        script.src = src;
      }
  
      const handleLoad = () => setLoading(false);
      const handleError = (error) => setError(error);
  
      script.addEventListener("load", handleLoad);
      script.addEventListener("error", handleError);
  
      document.head.appendChild(script);
  
      return () => {
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      };
    }, [src]);
  
    return [loading, error];
}

export default useScript