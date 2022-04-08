import abi from '../data/abis/LightGeneralizedTCR.json';
import { vars } from '$lib/env-variables';
import { getSignerOrProvider } from './wallet';
let gtcr;

/**
 * Add an item to the GTCR registry
 * @param {string} ipfsUri
 * @param {*} inputs
 * @returns
 */
export async function addItem(ipfsUri, inputs) {
	gtcr = getGTCRContract();
	return gtcr.addItem(ipfsUri, inputs);
}

function getGTCRContract() {
	return new ethers.Contract(vars.CURATE_CONTRACT_ADDRESS, abi, getSignerOrProvider());
}
