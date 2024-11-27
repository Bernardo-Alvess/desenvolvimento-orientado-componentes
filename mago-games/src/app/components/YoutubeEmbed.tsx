import React from 'react';
import PropTypes from 'prop-types';

interface Props {
	embedId: string | undefined;
}

const YoutubeEmbed = ({ embedId }: Props) => (
	<div className="video-responsive">
		<iframe
			// height={461}
			// width={798}
			src={`https://www.youtube.com/embed/${embedId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
			className="border border-primary rounded-lg w-4/5 h-[461px]"
		/>
	</div>
);

export { YoutubeEmbed };
