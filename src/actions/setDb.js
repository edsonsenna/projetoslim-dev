const setDb = (localDb, remoteDb) => {
    return {
        type: "SET_DB",
        localDb,
        remoteDb
    }
}

export default setDb;