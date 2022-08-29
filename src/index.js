// write your code here


//Task 001

let title = document.getElementById("card-title");

let image = document.getElementById("card-image");


fetch('http://localhost:3000/images/1')

//Fetch request to the json server

    .then(response => response.json())
    .then(function(data) {
        let imageSrc = data.image;
        let imgTitle = data.title;
        title.textContent = imgTitle;
        image.src = imageSrc;
    });

    function fetchComments() {
        fetch('http://localhost:3000/images/1')
            .then(res => res.json())
            .then(obj => {
                let array = obj.comments
                array.forEach(element => {
                    let li = document.createElement('li')
                    li.textContent = element.content
                    document.querySelector('#comments-list').appendChild(li)
                })
            })
    }
    fetchComments()

//Task 002

let likeBtn = document.getElementById("like-button")

likeBtn.addEventListener("click", () => {
    


    likes += 1;
    


    showLikes();
});

fetch("http://localhost:3000/images/1")

    .then(response => response.json())
    .then(res);

function res(data) {
    likes = data.likes;
    showLikes();
}

function showLikes() {
    document.getElementById("like-count").textContent = `${likes} likes`;
}

//Task 003

let inputVal = document.getElementById("comment")
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => { 
        e.preventDefault()
        handleComment(e.target.comment.value)

        inputVal.value = ''
    })
})
let commentList =  document.querySelector('#comments-list')

function handleComment(comment) {
    let ul = document.createElement('li')
    ul.textContent = comment
    
   commentList.appendChild(ul);
   

}