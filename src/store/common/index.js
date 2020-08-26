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
                        label: "h1",
                        value: 200,
                        color: '#FF6384'
                    },
                    {
                        label: "p1",
                        value: 200,
                        color: '#36A2EB'
                    },
                    {
                        label: "s1",
                        value: 200,
                        color: '#FFCE56'
                    },
                ],
                transactions: [
                    {
                        title: 'Shop',
                        type: "replenishment",
                        date: new Date(),
                        value: '100',
                        category: "Products",
                    },
                    {
                        title: 'Shop',
                        type: "replenishment",
                        date: new Date(),
                        value: '30',
                        category: "Shopping",
                    },
                    {
                        title: 'Workout team',
                        type: "replenishment",
                        date: new Date(),
                        value: '200',
                        category: "Sport",
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
                        label: "h2",
                        value: 200,
                        color: '#FF6384'
                    },
                    {
                        label: "p2",
                        value: 2200,
                        color: '#36A2EB'
                    },
                    {
                        label: "s2",
                        value: 2100,
                        color: '#FFCE56'
                    },
                ],
                transactions: [
                    {
                        title: 'Coffee',
                        type: "replenishment",
                        date: new Date(),
                        value: '20',
                        category: "Products",
                    },
                    {
                        title: 'Service',
                        type: "replenishment",
                        date: new Date(),
                        value: '200',
                        category: "Other",
                    },
                    {
                        title: 'Rent',
                        type: "replenishment",
                        date: new Date(),
                        value: '400',
                        category: "Other",
                    },
                    {
                        title: 'Toothbrush',
                        type: "replenishment",
                        date: new Date(),
                        value: '20',
                        category: "Health",
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
    },
    getters: {
        currentWorkspace(state) {
            return state.currentWorkspace || state.workspaces[0]
        }
    }
}

export default module