const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");
const profileButton = js.getEl("update-profile");
const profileEmail = js.getEL("profile-email");
const profileLocation = js.getEl("profile-location");


function displayProfile(userName, userInfo) {

	profileName.value = userName;

	if (userInfo.bio) {
		profileBio.value = userInfo.bio;
	}

	if (userInfo.email){
		profileEmail.value = userInfo.email;
	}

	if (userInfo.location){
		profileLocation.value =userInfo.location;
	}

}


profileButton.onclick = function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', profileBio.value);
	fb.updateProfile(profileUID, 'email', profileEmail.value);
	fb.updateProfile(profileUID, 'location',profileLocation.value);
};


function profileLoggedIn(uid) {
	if (uid == profileUID) {
		profileButton.style.display = 'block';
	}
}