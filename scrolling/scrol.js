(function() {
    let nextPage = 1;
    const content = document.querySelector('.content');
    
    function renderUsers(users) {
      users.results.map(student => {
        const element = document.createElement('div');
        element.classList.add('student');
        element.innerHTML = student.name.first;
        content.appendChild(element);
      });
    }
  
    async function getUsers(page) {
      const users = await (
        await fetch(`https://randomuser.me/api/?page=${page}&results=25`)
      ).json();
      return users;
    }
  
    async function loadMoreUsers() {
      const { scrollTop, clientHeight, scrollHeight } = content;
      if (scrollHeight - scrollTop === clientHeight) {
        const users = await getUsers(nextPage);
        renderUsers(users);
        nextPage += 1;
      }
    }
  
    loadMoreUsers();
    nextPage += 1;
    content.addEventListener('scroll', loadMoreUsers);
  })();
