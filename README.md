# Decentralized NFT Verification

## Packages

- Frontend

### Custom subgraph

See https://github.com/mizu-eth/gtcr-subgraph and its [The Graph playground](https://thegraph.com/hosted-service/subgraph/mizu-eth/curate-gnosischain?selected=playground)

The forked subgraph by Mizu adds 2 important features:

- Index **Evidences** which are fetch from RPC logs in Curate Website to only use The Graph for fetching data
- Add identifiers in LItem object as `key{0..4}` to be easily searchable withouth relying on `keywords`

Identifiers key in GTCR

| Identifier | Matching prop    |
| ---------- | ---------------- |
| key0       | Name             |
| key1       | Artist           |
| key2       | Contract address |
| key3       | Item ID          |
| key4       | Chain ID         |

#### Collection status

From https://github.com/kleros/gtcr-subgraph/blob/master/src/LightGeneralizedTCRMapping.ts#L38

> - (0) **Absent**: The item is not registered on the TCR and there are no pending > requests.
> - (1) **Registered**: The item is registered and there are no pending requests.
> - (2) **Registration Requested**: The item is not registered on the TCR, but there is a pending registration request.
> - (3) **Clearing Requested**: The item is registered on the TCR, but there is a pending removal request. These are sometimes also called removal requests.
