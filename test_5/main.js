async function getObject() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    let object
    data.map(item => {
        if (item.id == 5) {
            object = item
        }
    })
    return object
}
