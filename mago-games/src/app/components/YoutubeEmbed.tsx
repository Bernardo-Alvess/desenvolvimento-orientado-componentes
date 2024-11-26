import React from 'react';
import PropTypes from 'prop-types';

interface Props {
	embedId: string | undefined;
}

const YoutubeEmbed = ({ embedId }: Props) => (
	<div className="video-responsive">
		<iframe
			height={461}
			src={`https://www.youtube.com/embed/${embedId}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
			className="w-10/12"
		/>
	</div>
);

export { YoutubeEmbed };
