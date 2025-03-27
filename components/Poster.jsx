import styles from "../styles/Poster.module.css";

const Poster = ({ title, description, buttonText }) => {
return (
    <div className={`${styles.main} text-center relative`}>
    <div className={`${styles.mainBg} absolute inset-0`}></div>
    <h1 className={`${styles.heading} font-bold relative z-10`}>
        {title} 
    </h1>
    <p className="text-gray-600 mt-2 relative z-10">
        {description}  
    </p>
    <button className={`${styles.button} text-white relative z-10`}>
        {buttonText}  
    </button>
    </div>
    );
};

export default Poster;