/*
nested html: for one element

const parent = React.createElement("div",{id: "parent"},
               React.createElement("div",{id: "child"},
                React.createElement("h1",{}, "This is a h1 tag"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

ReactElement(Objectt) ==> HTML(Browser understands);
*/


// for multiple elements and 
const parent = React.createElement("div",{id: "parent"},
               React.createElement("div",{id: "child"},
               [React.createElement("h1",{}, "This is a h1 tag"),React.createElement("h2",{}, "This is a h2 tag")]),

               React.createElement("div",{id: "child2"},
                [React.createElement("h1",{}, "This is a h1 tag"),React.createElement("h2",{}, "This is a h2 tag")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);