const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");
const profileButton = js.getEl("update-profile");


function displayProfile(userName, userInfo) {

	profileName.value = userName;

	if (userInfo.bio) {
		profileBio.value = userInfo.bio;
	}

}


profileButton.onclick = function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', profileBio.value);
};


function profileLoggedIn(uid) {
	if (uid == profileUID) {
		profileButton.style.display = 'block';
	}
}