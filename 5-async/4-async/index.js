async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const result = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    document.writeln(result.name);
  } catch (error) {
    console.error(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
