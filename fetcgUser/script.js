const userList = document.getElementById('user-list');

async function getUsers() {
  try {
    //  Fetch data from the endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    //  Convert the response to JSON
    const users = await response.json();
    
    //  Loop through users and add them to the UI
    users.forEach(user => {
      const li = document.createElement('li');
      
      
      // Add user details to the element
      li.innerHTML = `
        <strong>${user.name}</strong> <br> 
        Email: ${user.email} <br>
        City: ${user.address.city}
      `;
      
      userList.appendChild(li);
    });

  } catch (error) {
    console.error('Error fetching data:', error);
    userList.innerHTML = '<li>Failed to load users.</li>';
  }
}

getUsers();
