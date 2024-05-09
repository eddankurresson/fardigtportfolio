import { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";  // Ensure motion is imported
import "./Cursor.scss";

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});  // Corrected to y: 0 for proper initialization

    useEffect(() => {
        const mouseMove = (e) => {
            setTimeout(() => {
                setPosition({x: e.clientX, y: e.clientY});
            }, 100);         };
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);  // Dependency array is empty to ensure this runs only once after initial render

    return (
        <motion.div className="cursor" style={{ x: position.x-20, y: position.y -18}}></motion.div>  // Use style prop to animate position
    );
}

export default Cursor;
