const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

// const box =  document.querySelector('.box')

document.getElementById('cards-place').innerHTML = posts.map(post =>
  `
  <div class="card">
    <div class="card-header">
      <img class="user-img" src="${post.avatar}" alt="Vincent Van Gogh in a circle">
      <div class="info-container">
        <div class="name"><p>${post.name}</p></div>
        <div class="location"><p>${post.location}</p></div>
      </div>    
    </div>
    <img class="post-img" src="${post.post}" alt="" srcset="">
    <div class="post-icons">
      <div id="heart"><img class="post-icon" src="/images/icon-heart.png" alt="heart icon"></div>
      <div><img class="post-icon" src="/images/icon-comment.png" alt="comment icon"></div>
      <div><img class="post-icon" src="/images/icon-dm.png" alt="dm icon"></div>
    </div>
    <div class="post-likes"><p id="likes">${post.likes} likes</p></div>
    <div class="post-comments"><p><span>${post.username}</span> ${post.comment}</p></div>
  </div>
  `).join('')

const heart = document.getElementById('heart')

heart.addEventListener('click', () => {
  heart.classList.toggle('red')
})