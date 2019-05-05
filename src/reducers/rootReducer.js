const initState = {
    posts: [
        {id: 1, title: "Lambda Labs Week 1-2", body: "The first two weeks of Lambda Labs were good" },
        {id: 2, title: "Lambda Labs Week 3-4", body: "The first two weeks of Lambda Labs were good" },
        {id: 3, title: "Lambda Labs Week 5-6", body: "The first two weeks of Lambda Labs were good" },
        {id: 4, title: "Lambda Labs Week 7-8", body: "The first two weeks of Lambda Labs were good" }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;