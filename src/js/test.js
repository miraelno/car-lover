body_res = {
    "email": "admin@example.com",
    "password": "admin"
  }

fetch('http://localhost:8000/api/login/',{
    method: "POST",
    body: JSON.stringify(body_res),
    headers: {
        "Content-Type": "application/json"
      },
}
).
then(response => response.json()) 
.then(data => console.log(data['token'])) 
.catch(error => console.error(error)); 