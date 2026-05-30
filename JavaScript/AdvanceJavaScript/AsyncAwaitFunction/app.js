// Async/Await example in JavaScript

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserData() {
  console.log('Fetching user data...');
  await wait(1000); // simulate an async operation like fetching from a server
  return {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
  };
}

async function showUser() {
  try {
    const user = await getUserData();
    console.log('User loaded:', user);
  } catch (error) {
    console.error('Error loading user:', error);
  }
}

showUser();
