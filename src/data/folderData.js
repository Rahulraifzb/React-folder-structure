const explorers = [
    {
        name:"root",
        isFolder:true,
        items:[
            {
                name:"public",
                isFolder:true,
                items:[
                    {
                        name:"index.html",
                        isFolder:false
                    }
                ]
            },
            {
                name:"src",
                isFolder:true,
                items:[
                    {
                        name:"components",
                        isFolder:true,
                        items:[
                            {
                                name:"Folder.js",
                                isFolder:false
                            }
                        ]
                    },
                    {
                        name:"App.js",
                        isFolder:false
                    },
                    {
                        name:"index.css",
                        isFolder:false
                    },
                    {
                        name:"index.js",
                        isFolder:false
                    },
                ]
            },
            {
                name:".gitignore",
                isFolder:false
            },
            {
                name:"package-lock.json",
                isFolder:false
            },
            {
                name:"package.json",
                isFolder:false
            },
            {
                name:"README.md",
                isFolder:false
            },
        ]
    }
]

export default explorers