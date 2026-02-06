import PocketBase from 'pocketbase';


const pb = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    try {
        let data = await pb.collection('maison').getFullList({
            sort: '-created',
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}


 // TP 4 //


export async function AgentsId(id) {
    const records = await pb.collection('agents').getOne(id);
    return records;
}

export async function allMaisonsAgents() {
    const records = await pb.collection('maison').getFullList({
        expand: 'agents'
    });
    return records;
}

export async function allMaisonsByAgentId(id) {
    const records = await pb.collection('maison').getFullList({
        filter: `agents.id = "${id}"`,
        expand: 'agents'
    });
    return records;
}

export async function allMaisonsByAgentName(name) {
    const records = await pb.collection('maison').getFullList({
        filter: `agents.nom = "${name}"`,
        expand: 'agents'
    });
    return records;
}

export async function allMaisonsSortedAgent() {
    const records = await pb.collection('maison').getFullList({
        sort: 'agents',
        expand: 'agents'
    });
    return records;
}

export async function bySurfaceAgent(s, a) {
    const records = await pb.collection('maison').getFullList({
        filter: `surface >= ${s} && agents.id = "${a}"`,
        expand: 'agents'
    });
    return records;
}

export async function maisonFavoriAgent(a) {
    const records = await pb.collection('maison').getFullList({
        filter: `favori = true && agents.id = "${a}"`,
        expand: 'agents'
    });
    return records;
}

