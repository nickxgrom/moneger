const module = {
    state: {
        currentWorkspace: undefined,
        workspaces: [
            {
                name: "Test#1",
                balance: "999,999",
                percents: 4.2,
                monthLimit: 1200,
                spentThisMonth: 600,
                categories: [
                    {
                        name: "h1",
                        value: 200,
                    },
                    {
                        name: "p1",
                        value: 200,
                    },
                    {
                        name: "s1",
                        value: 200,
                    },
                ]
            },
            {
                name: "Test#2",
                balance: "101,299",
                percents: -3.4,
                monthLimit: 340,
                spentThisMonth: 4320,
                categories: [
                    {
                        name: "h2",
                        value: 20,
                    },
                    {
                        name: "p2",
                        value: 2200,
                    },
                    {
                        name: "s2",
                        value: 2100,
                    },
                ]
            },
        ]
    },
    mutations: {
        changeWorkspace(state, item) {
            state.currentWorkspace = item
        }
    },
    getters: {
        currentWorkspace(state) {
            return state.currentWorkspace || state.workspaces[0]
        }
    }
}

export default module