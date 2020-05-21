import React from "react"
import styles from "../../Styling/Meme.module.css"

function Header(props) {
    return (
        <center>
            <header className={styles.MemeHeader}>
                <span className={styles.MemeTag}>Meme generator</span>
                <img
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="meme emoji"
                    className={styles.MemeHeaderImage} />
            </header>
        </center>
    )
}

export default Header