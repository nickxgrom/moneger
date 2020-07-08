const module = {
    state: {
        currentWorkspace: {},
        workspaces: [
            {
                name: "Test#1",
                balance: "999,999",
                percents: 4.2,

            },
            {
                name: "Test#2",
                balance: "101,299",
                percents: -3.4,
            },
        ]
    },
    mutations: {
        changeWorkspace(state, item) {
            state.currentWorkspace = item
        }
    },
    getters: {

    }
}

export default module