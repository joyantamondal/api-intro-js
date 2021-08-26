function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method='POST',
        body: JSON.stringify({
            title: 'this is title',
            body: 'this is post',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(res=>res.json())
    .then(data=>console.log(data));

}