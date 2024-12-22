import { Features } from "./features.js";
import styles from "./FeaturesCards.module.scss";

function FeaturesCards() {
  return (
    <div className={styles.featuresContainer}>
    {Features.map((feature, index) => (
        <div key={index} className={styles.card}>
        
        <div className={styles.topPart}>
            <div className={styles.iconContainer}>
                <img
                    src={feature.icon}
                    alt={feature.title}
                    className={styles.icon}
                />
            </div>
            
            <h3>{feature.title}</h3>
        </div>
        
        <p className={styles.desc}>{feature.description}</p>
        
        </div>
    ))}
    </div>
  );
}

export default FeaturesCards;