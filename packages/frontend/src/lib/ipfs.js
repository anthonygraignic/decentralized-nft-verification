import { vars } from './env-variables';
let ipfsClient = null;

export async function connectIpfs() {
	if (!ipfsClient) {
		if (vars.DEV) {
			console.log('IPFS dev upload, data might be lost');
			// upload to infura without auth so file won't be pinned for long
			ipfsClient = window.IpfsHttpClient.create({
				url: vars.IPFS_NODE_URL,
				headers: {}
			});
		} else {
			ipfsClient = window.IpfsHttpClient.create({
				url: vars.IPFS_NODE_URL
				// headers: {
				// 	authorization: 'Basic ' + vars.IPFS_BASIC_AUTH
				// }
			});
		}
	}
}

export async function uploadFile(file) {
	// console.log(file);
	const result = await add(file, file.name);

	const ipfsUri = `ipfs://${result.cid}/${file.name}`;
	console.log(ipfsUri);
	return ipfsUri;
}

export async function add(content, fileName) {
	if (!ipfsClient) {
		console.warn('IPFS not connected');
		return;
	}

	try {
		return ipfsClient.add({ path: fileName, content }, { wrapWithDirectory: true });
	} catch (e) {
		console.error(e);
		throw e;
	}
}
