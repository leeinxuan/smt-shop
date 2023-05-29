import Banner from "../Banner";
import News from "../News";
import Video from "../Video";
import Album from "../Album";
import FadeInDiv from "../MotionDiv";
import FadeInDiv2 from "../MotionDiv2";


export default function ContentList({ artists, video }) {
    return (
        <div>
            <Banner />
            <FadeInDiv>
                <News />
            </FadeInDiv>
            <FadeInDiv2>
                <Video video={video} />
            </FadeInDiv2>
            <FadeInDiv>
                <Album images={artists} />
            </FadeInDiv>
        </div>
    )
}
