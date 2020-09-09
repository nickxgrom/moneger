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
                        color: '#FF6384'
                    },
                    {
                        name: "p1",
                        color: '#36A2EB'
                    },
                    {
                        name: "s1",
                        color: '#FFCE56'
                    },
                ],
                transactions: [
                    {
                        title: 'Shop',
                        type: "replenishment",
                        date: new Date(),
                        value: 100,
                        category: "p1",
                    },
                    {
                        title: 'Shop',
                        type: "replenishment",
                        date: new Date(),
                        value: 30,
                        category: "s1",
                    },
                    {
                        title: 'Workout team',
                        type: "replenishment",
                        date: new Date(),
                        value: 200,
                        category: "h1",
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
                        color: '#FF6384'
                    },
                    {
                        name: "p2",
                        color: '#36A2EB'
                    },
                    {
                        name: "s2",
                        color: '#FFCE56'
                    },
                ],
                transactions: [
                    {
                        title: 'Coffee',
                        type: "replenishment",
                        date: new Date(),
                        value: 20,
                        category: "p1",
                    },
                    {
                        title: 'Service',
                        type: "replenishment",
                        date: new Date(),
                        value: 200,
                        category: "o2",
                    },
                    {
                        title: 'Rent',
                        type: "replenishment",
                        date: new Date(),
                        value: 400,
                        category: "o2",
                    },
                    {
                        title: 'Toothbrush',
                        type: "replenishment",
                        date: new Date(),
                        value: 20,
                        category: "h1",
                    },
                ]
            },
        ]
    },
    mutations: {
        changeWorkspace(state, item) {
            state.currentWorkspace = item
        },
        addTransaction(state, item) {
            this.getters.currentWorkspace.transactions.push(item)
        },
        addWorkspace(state, item) {
            state.workspaces.push(item)
        },
        addCategory(state, category) {
            this.getters.currentWorkspace.categories.push(category)
        }
    },
    getters: {
        currentWorkspace(state) {
            return state.currentWorkspace || state.workspaces[0]
        }
    }
}

export default module