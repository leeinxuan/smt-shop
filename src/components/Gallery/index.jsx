import styles from "./gallery.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export default function Gallery({ artist }) {
    return (
        <div className={styles.gallery}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="10px">
                    {artist.map(artist => (
                        <div class={styles.grid}>
                            <figure className={styles.effectSadie}>
                                <img
                                    key={artist.id}
                                    src={artist.image}
                                    style={{ width: "100%", display: "block" }}
                                    alt=""
                                />
                                <figcaption>
                                    <h2><span>{artist.name}</span></h2>
                                    <p>{artist.slogan}</p>
                                    <a href="#">View more</a>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </Masonry>

            </ResponsiveMasonry>
        </div>
    )
}
