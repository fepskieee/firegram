import { motion } from 'framer-motion';

const Card = ({doc}) => {

  return (
    <motion.li
      layout
    >
      <motion.img
        src={doc.url}
        alt="uploaded pic"
        className="w-40 h-40 sm:w-80 sm:h-80 object-cover shadow-md"
        width="1080"
        height="1080"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </motion.li>
  )
}

export default Card