import styles from "./Stats.module.scss";

function Stats() {

    return (
        <>
            <div className={styles.statistics}>
                <h1>Statistics</h1>
                <div className={styles.categories}>
                    <div className={styles.category}>
                        <img src="/Stats/packs.svg" alt="" />
                        <h2>Sticker Packs</h2>
                        <h1>3+</h1>
                    </div>
                    <div className={styles.category}>
                        <img src="/Stats/projects.svg" alt="" />
                        <h2>Projects Listed</h2>
                        <h1>50+</h1>
                    </div>
                    <div className={styles.category}>
                        <img src="/Stats/community.svg" alt="" />
                        <h2>Community</h2>
                        <h1>2000+</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stats;