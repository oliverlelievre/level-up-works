let token;
let role;
let email;

const setToken = (newToken) => {
	token = newToken;
}

const getToken = () => {
	return token;
}

const setRole = (newRole) => {
	role = newRole;
}

const getRole = () => {
	return role;
}

const setEmail = (newEmail) => {
	email = newEmail;
}

const getEmail = () => {
	return email;
}


const setUserID = (newUserId) => {
	UserID = newUserId;
}

const getUserID = () => {
	return UserID;
}
module.exports = { setToken, getToken, setRole, getRole, setEmail, getEmail, setUserID, getUserID };
