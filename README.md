Go to graph/services/kpi-service.ts
    Change the TOTAL_DISCOUNTS to actual

Go to subgraph.yaml
    Change the source.address to your contract address
    Change the source.startBlock to yours (you can find it on bscScan)

Upload your subgraph onto github public repo.

Go to The Graph dashboard. Sign up and create the graph.
    Install graph-cli: `npm install -g @graphprotocol/graph-cli`
    Run `graph codegen && graph build`
    Run `graph auth --product hosted-service <API_KEY>` (copy from Deploy step)
    Run `graph deploy --product hosted-service <SUBGRAPH_NAME>` (copy from Deploy step)

You will get your https endpoint, put into frontend .env NEXT_PUBLIC_GRAPH_API_SOURCE
