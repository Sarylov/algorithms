// Задача: Найти суммарный размер всех файлов в директории (включая вложенные папки)
function getTotalSizeDFS(dirs) {
    let sumSize = 0

    function traverse(dirs) {
        if (dirs.type === "file") {
            sumSize = sumSize + dirs.size
        }
        else if (dirs.type === "directory")
            for (let dir of dirs.children) {
                traverse(dir)
            }
    }

    traverse(dirs)

    return sumSize
}

// пример использования

const project = {
    name: "project",
    type: "directory",
    children: [
        {
            name: "file1.txt",
            type: "file",
            size: 100 // размер в байтах
        },
        {
            name: "file2.txt",
            type: "file",
            size: 200 // размер в байтах
        },
        {
            name: "folder1",
            type: "directory",
            children: [
                {
                    name: "file3.txt",
                    type: "file",
                    size: 50 // размер в байтах
                },
                {
                    name: "folder2",
                    type: "directory",
                    children: [
                        {
                            name: "file4.txt",
                            type: "file",
                            size: 150 // размер в байтах
                        }
                    ]
                }
            ]
        }
    ]
};

console.log(getTotalSizeDFS(project))

