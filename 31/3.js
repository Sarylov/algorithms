const tree = {
    type: "nested",
    children: [
        { type: "added", value: 42 },
        {
            type: "nested",
            children: [
                { type: "added", value: 43 },
            ]
        },
        { type: "added", value: 44 },
    ]
}

// необходимо написать функцию getNodes(thee, type) которая возвращает все ноды в порядке следования, соответствующие переданному типу.
// глубина вложенности - любая.

function getNodes(tree, type) {
    const result = []; 

    function traverse(node) {
        if (node.type === type) {
            result.push(node)
        }

        if (node.children) {
            for (let child of node.children) {
                traverse(child)
            }
        }
    }

    traverse(tree)
    return result;
}

const addedItems = getNodes(tree, "added")
console.log(addedItems)
// результат:
// [
// { type: "added", value: 42 },
// { type: "added", value: 43 },
// { type: "added", value: 44 },
// ]