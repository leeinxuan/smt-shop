import styles from "./companyitro.module.css";
import { theme } from 'antd';
import { motion } from 'framer-motion';


export default function CompanyItro() {
    const {
        token: { colorTextBase,colorTextBase3 },
    } = theme.useToken();

    const typingContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
            }
        }
    }
    const typingText = {
        hidden: { opacity: 0, y: "-20px" },
        show: {
            opacity: 1,
            y: "0",
            transition: {
                ease: 'easeInOut',
            }
        }
    }
    const explainProduct = {
        hidden: { opacity: 0, y:"50px"},
        show: {
            opacity: 1,
            y: "0",
            transition: {
                delay: 1.5,
                ease: "easeInOut",
                duration:1.8
            }
        }
    }
    const pic = {
        hidden: { opacity: 0},
        show: {
            opacity: 1,
            y: "0",
            transition: {
                delay: 2,
                ease: "easeInOut",
                duration:1.5
            }
        }
    }
    return (
        <div className={styles.ContentArea}>
            <motion.p style={{color: colorTextBase3}} variants={typingContainer} initial="hidden" animate="show">
                {
                    Array.from("Asia’s No.1").map((word, i) => (
                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                    ))
                }
            </motion.p>
            <div className={styles.titleArea}>
                <div className={styles.kpoparea}>
                    <motion.h1 style={{color: colorTextBase}} variants={typingContainer} initial="hidden" animate="show">
                        {
                            Array.from("KPOP").map((word, i) => (
                                <motion.span key={i} variants={typingText}>{word}</motion.span>
                            ))
                        }
                    </motion.h1>
                    <motion.h1 style={{color: colorTextBase}} variants={typingContainer} initial="hidden" animate="show">
                        {
                            Array.from("Entertainment").map((word, i) => (
                                <motion.span key={i} variants={typingText}>{word}</motion.span>
                            ))
                        }
                    </motion.h1>
                </div>
                <motion.p className={styles.sment} variants={explainProduct} initial="hidden" animate="show">SM Entertainment</motion.p>
            </div>
            <motion.img className={styles.smpic} variants={pic} initial="hidden" animate="show" src="/images/smtown.jpg" alt="smtown" />
            <motion.p className={styles.description}
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:2}}
                viewport={{once:true}}
                style={{color: colorTextBase}}
            >SM Entertainment, founded in 1995 by Head Producer Lee Soo Man, is the first company in the industry to introduce systematic casting, training, producing, and management systems, and it has been discovering unique content by pinpointing demands for music and cultural trends. SM Entertainment entered the global marketplace using globalization and localization strategies through culture technology and has become a leading entertainment company in Asia.<br/>
            <br/>In 1997, SM Entertainment became the first company in the Korean entertainment industry to enter foreign markets and made remarkable achievements as the leader of Hallyu, or the Korean Wave.<br/>
            <br/>SM Entertainment has successfully set foot in North America, South America, and Europe while maintaining its base in Asia, and has enhanced the national brand of Korea and promoted the growth of the culture industry. SM Entertainment is promoting the unique culture of Korea through avenues such as K-POP, the Korean alphabet, and Korean cuisine, through 'Made by SM' content all over the world, and is elevating the prestige of Korea by promoting the consumption of Korean brand products. In particular, SM Entertainment has focused on the value of culture that can lead the national economy and has contributed to its growth under the catchphrase, "Culture First, Economy Next." SM Entertainment will continue to lead the entertainment industry until Korea becomes a ‘Cultural Powerhouse' as well as an ‘Economic Powerhouse' based on the idea that our economy will reach its heights only when our culture wins the heart of the entire world.
            </motion.p>
        </div>
    )
}