/*
Требуется написать функцию printFolders, которая принимает объект. У объекта есть два ключа: name и children. name - имя папки или файла. 
children - массив объектов с теми же ключами (name и children). Если у объекта есть массив children, то объект является папкой, иначе - файлом.
Вложенность определяется 2-мя пробелами. Допустим, папка images находится на 1-м уровне вложенности, значит отделяется 2-мя пробелами. 
Файл image1.jpg находится на 2-м уровне вложенности, соответственно, будет отделен 4-мя пробелами.
Нельзя использовать рекурсию.
*/


// обход в ширину 
function printFoldersBFS(root) {
    if (!root || typeof root !== "object") {
        console.log("Некорректный входной объект");
        return;
    }

    let stack = [{ el: root, level: 0 }]
    let res = ""

    while (stack.length > 0) {
        const { el, level } = stack.pop()

        res += " ".repeat(level * 2) + el.name + "\n"

        if (el.children.length > 0) {
            for (let i = el.children.length - 1; i >= 0; i--) {
                stack.push({ el: el.children[i], level: level + 1 })
            }
        }
    }

    return res
}

// обход в глубину
function printFoldersDFS(root) {
    if (!root || typeof root !== "object") {
        console.log("Некорректный входной объект");
        return;
    }
    let res = ''

    function traverse(el, level = 0) {
        res += " ".repeat(level * 2) + el.name + "\n"

        if (el.children.length > 0) {
            el.children.forEach((child) => {
                traverse(child, level + 1)
            })
        }
    }

    traverse(root)

    return res
}

const folderStructure = {
    name: "root",
    children: [
        {
            name: "folder1",
            children: [
                { name: "file1.txt", children: [] },
                { name: "file2.txt", children: [] },
            ],
        },
        {
            name: "folder2",
            children: [
                {
                    name: "subfolder1",
                    children: [
                        { name: "file3.txt", children: [] },
                    ],
                },
                { name: "file4.txt", children: [] },
            ],
        },
        { name: "file5.txt", children: [] },
    ],
};

console.log(printFoldersDFS(folderStructure))
console.log(printFoldersBFS(folderStructure))
// результат
// root
//   folder1
//     file1.txt
//     file2.txt
//   folder2
//     subfolder1
//       file3.txt
//   file4.txt
// file5.txt