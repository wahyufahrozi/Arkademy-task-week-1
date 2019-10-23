let lib = [{
        title: "Harry Potter and the Half Blood Prince",
        author: "J.K Rowling",
        status: true
    },
    {
        title: "Hujan",
        author: "tere liye",
        status: true
    },
    {
        title: "Gurindam 12",
        author: "Ali Haji bin Raja Haji Ahmad",
        status: false
    }
]

function getStatusFromlibary(title, array) {
    for (let j = 0; j < array.length; j++) {
        if (array[j].title === title) {
            return array[j].status;
        }
    }
}

//menampilkan status
let status = getStatusFromlibary("Gurindam 12", lib)
console.log(status);
// end

//menampilkan buku yang ada
let statusAda = lib.filter(function (data) {
    if (data.status === true) {
        console.log(data);

    }

})
//end