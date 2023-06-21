const { Crypto } = require('@peculiar/webcrypto');

// create a new Crypto object
const crypto = new Crypto();

// generate a random secret key for JWT
const generateJWTSecretKey = async () => {
	const secretKey = await crypto.subtle.generateKey(
		{
			name: 'HMAC',
			hash: 'SHA-256',
			length: 256,
		},
		true,
		['sign', 'verify']
	);

	// export the secret key as a base64-encoded string
	const exportedKey = await crypto.subtle.exportKey('raw', secretKey);
	const base64Key = Buffer.from(exportedKey).toString('base64');
	return base64Key;
}

module.exports = { generateJWTSecretKey };
