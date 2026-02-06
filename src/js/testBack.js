import {
    AgentsId,
    allMaisonsAgents,
    allMaisonsByAgentId,
    allMaisonsByAgentName,
    allMaisonsSortedAgent,
    bySurfaceAgent,
    maisonFavoriAgent
}
    from './backend.mjs';

// const records = await AgentsId('wxehakzdqhk22ki');
// console.log(JSON.stringify(records, null, 2));

// const records = await allMaisonsAgents();
// console.log(JSON.stringify(records, null, 2));

// const records = await allMaisonsByAgentId('sxd97rys9pinr4a');
// console.log(JSON.stringify(records, null, 2));

// const records = await allMaisonsByAgentName('alexandre dans dokidoki');
// console.log(JSON.stringify(records, null, 2));

// const records = await allMaisonsSortedAgent();
// console.log(JSON.stringify(records, null, 2));

// const records = await bySurfaceAgent(100, 'v5o46xg4zxwlply');
// console.log(JSON.stringify(records, null, 2));

const records = await maisonFavoriAgent('sxd97rys9pinr4a');
console.log(JSON.stringify(records, null, 2));

