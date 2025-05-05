"use client"

import style from "@/app/styles/media.module.scss";

interface BackgroundVideoProps {
	src: string;
}

const BackgroundVideo = (props: BackgroundVideoProps) => {
	return (
		<video
			autoPlay
			loop
			muted
			playsInline
			className={style.backgroundVideo}
		>
			<source src={props.src} type="video/mp4"/>
		</video>
	)
}

export default BackgroundVideo;
