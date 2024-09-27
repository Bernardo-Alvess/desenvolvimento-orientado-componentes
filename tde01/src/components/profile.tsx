import '../assets/css/profile.css';
import person from '../assets/thispersondoesnotexist.jpeg';

function Profile() {
	return (
		<div>
			<img src={person} alt="person" />
		</div>
	);
}

export default Profile;
