import { motion } from 'framer-motion';
import styles from './history.module.css'
import { Timeline } from 'antd';
import { Collapse } from 'antd';
import { ConfigProvider } from 'antd';


const { Panel } = Collapse;

export default function History() {

  return (
    <ConfigProvider theme={{
      components: {
        Timeline: {
          lineWidth: "1",
          padding: "30"
        },
      },
    }}
    >

      <motion.div
        className={styles.contentArea}
        initial={{ opacity: 0, y: 500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <Timeline
          className={styles.timeline}
          mode='alternate'
          items={[
            {
              label: (
                <>
                  <p className={styles.timeYear}>2022</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit", }} >
                    <Panel header="Establishment of a company specializing in metaverse content production technology" key="1" >
                      <p className={styles.desP}>Establishment of 'STUDIO KWANGYA'</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2021</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Integration of Content Business" key="1" >
                      <p className={styles.desP}>Established an intermediate holding company ‘SM Studios’ that integrates & manages non-music businesses–drama/variety shows/new-media sectors</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2020</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Global Online Concert Brand" key="1" >
                      <p className={styles.desP}>Established ‘Beyond LIVE Corporation (BLC)’ with JYP Entertainment</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2018</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Lifestyle, Digital Entertainment Platform Business" key="1" >
                      <p className={styles.desP}>Acquisition of Keyeast & FNC Add Culture
                        FNC Add Culture changed its name to SM Life Design Group</p>
                    </Panel>
                    <Panel header="Expansion of Music Genre" key="2">
                      <p className={styles.desP}>Acquisition of Million Market</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2017</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Advertising Business" key="1" >
                      <p className={styles.desP}>Merger & Acquisition of SK M&C (SM C&C)</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2016</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="F&B Business" key="1" >
                      <p className={styles.desP}>SMT SEOUL Opened<br />SMT TOKYO Opened</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2015</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Mobile Platform Business" key="1" >
                      <p className={styles.desP}>SM Mobile Communications Established</p>
                    </Panel>
                    <Panel header="Entertainment Theme Park Business" key="2" >
                      <p className={styles.desP}>SMTOWN@coexartium Opened</p>
                    </Panel>
                  </Collapse>
                </>),

            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2014</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Variety Show/Label Business" key="1" >
                      <p className={styles.desP}>HOON Media & Woolim Label Acquisition(SM C&C)</p>
                    </Panel>
                    <Panel header="Equity Investment in the label, BALJUNSO Co., Ltd." key="2" >
                      <p className={styles.desP}>Made an equity investment in the hip hop and band music label, BALJUNSO, and established partnerships that embrace underground and indie music.</p>
                    </Panel>
                    <Panel header="Mobile Karaoke Business" key="3" >
                      <p className={styles.desP}>Established ‘everysing Japan’, a three-party joint venture to intensify the digital music business with AVEX Vanguard and Universal Music Japan.</p>
                    </Panel>
                    <Panel header="Established Dragon Tiger 1 Inc. to Invest in the Culture Business" key="4" >
                      <p className={styles.desP}>Established a corporation for a strategic partnership with Media Asia Group Holdings Limited, the largest entertainment company in Hong Kong in order to establish Dragon Tiger Capital Partners L.P., (hereinafter, referred to as “DTCP”), as a media and entertainment investment fund to invest in films and TV program projects in the Chinese market.</p>
                    </Panel>
                  </Collapse>
                </>),

            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2013</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Actor, Actress Management" key="1" >
                      <p className={styles.desP}>SMT SEOUL Opened<br />AM Entertainment Acquisition(SM C&C)</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2012</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Wine Distribution Business" key="1" >

                    </Panel>
                    <Panel header="Established S.M. Entertainment Beijing" key="2" >
                      <p className={styles.desP}>Established S.M. Entertainment Beijing Co., Ltd.</p>
                    </Panel>
                    <Panel header="Visual Content Business" key="3" >
                      <p className={styles.desP}>Acquired KOSDAQ listed company, BT&I, and changed the title to S.M. Culture & Contents in order to establish the largest visual media production and actor/MC management company in Asia.The company has been engaged in global video content businesses including TV drama production.The company is also contributing to the propagation of the K-Culture Business Model by combining the existing tour, leisure, and travel businesses of BT&I with Korean Wave and K-POP content.</p>
                    </Panel>
                    <Panel header="Global Concert Business" key="4" >
                      <p className={styles.desP}>Full launch of the concert business through the Hong Kong-based affiliate, DREAM MAKER ENTERTAINMENT</p>
                    </Panel>
                  </Collapse>
                </>),

            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2011</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Established S.M. True Co., Ltd" key="1" >
                      <p className={styles.desP}>Established the first overseas joint venture, S.M. True with True of Thailand. Engaged in overall management operations for its artists inside Thailand including albums, digital music, product distribution, concerts, and promotion.</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2008</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Karaoke Business" key="1" >
                      <p className={styles.desP}>SM Amusement Established</p>
                    </Panel>
                    <Panel header="Food & Beverage" key="2" >
                      <p className={styles.desP}>SM F&B Established</p>
                    </Panel>
                    <Panel header="Retail/Fashion/Merchandising" key="3" >
                      <p className={styles.desP}>SM Brand Marketing Established</p>
                    </Panel>
                    <Panel header="SM Entertainment USA" key="4" >
                      <p className={styles.desP}>Established S.M. Entertainment USA Inc.</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2005</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="China Launch" key="1" >
                      <p className={styles.desP}>SM Entertainment China Branch office opened</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2001</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="JAPAN Expansion" key="1" >
                      <p className={styles.desP}>SM Entertainment JAPAN Established</p>
                    </Panel>
                    <Panel header="Online/Mobile Business" key="2" >
                      <p className={styles.desP}>Fandango KOREA Established
                        [Korea’s first entertainment Contents/Online/Mobile Service Company]</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>2000</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="IPO (KOSDAQ)" key="1" >
                      <p className={styles.desP}>- April 27, 2000 First company in the entertainment industry to be listed in KOSDAQ (IPO)</p>
                    </Panel>
                  </Collapse>
                </>),
            },
            {
              label: (
                <>
                  <p className={styles.timeYear}>1995</p>
                </>),
              children: (
                <>
                  <Collapse accordion style={{ fontFamily: "kanit" }}>
                    <Panel header="Establishment of S.M. ENTERTAINMENT Co., Ltd." key="1" >
                      <p className={styles.desP}>- Established S.M. Entertainment Co., Ltd. with capital of 50 million won.</p>
                    </Panel>
                  </Collapse>
                </>),
            },
          ]}
        />

      </motion.div>
    </ConfigProvider>

  );
};