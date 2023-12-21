import useStorage from "@hooks/useStorage";

import { useEffect } from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file)

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      url && setFile(null)
    }, 1000);

    return () => {
      clearTimeout(timeoutID)
    }
  }, [url, setFile]);

  return (
    <motion.div className="h-1 mt-6 self-start w-full bg-pink-500"
      initial={{ width: 0}}
      animate={{ width: progress + '%'}}
    />
  )
}

export default ProgressBar