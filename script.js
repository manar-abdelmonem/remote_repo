 fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const tabs = document.getElementById('tabs');
    users.forEach(user => {
      const tab = document.createElement('div');
      tab.className = 'tab';
      tab.textContent = user.username;
      tab.onclick = () => showUserPosts(user.id);

      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });

      tabs.appendChild(tab);
    });
  })
  .catch(error => console.error('Error fetching users:', error));


async function showUserPosts(userId) {
  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = 'Loading...';
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    postsDiv.innerHTML = posts.map(post => `<p>• ${post.title}</p>`).join('');
  } catch (error) {
    postsDiv.innerHTML = 'Failed to load posts.';
    console.error('Error fetching posts:', error);
  }
}
