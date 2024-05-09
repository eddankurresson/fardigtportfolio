import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button className="sidebarbutton" onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Top line */}
        <motion.path
          initial="closed"  // Ensure initial state is set
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", opacity: 1 },
            open: { d: "M 3 16.5 L 17 2.5", opacity: 1 }
          }}
          animate="open"
        />

        {/* Middle line - this path fades out/in based on the sidebar state */}
        <motion.path
          initial="closed"  // Ensure initial state is set
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          animate="open"
        />

        {/* Bottom line */}
        <motion.path
          initial="closed"  // Ensure initial state is set
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", opacity: 1 },
            open: { d: "M 3 2.5 L 17 16.346", opacity: 1 }
          }}
          animate="open"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
