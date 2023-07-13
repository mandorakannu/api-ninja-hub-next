
# API Ninja Hub
API Ninja Hub is a REST API that provides fake data for testing and prototyping. It is a free to use service that provides a REST API to generate random and mock data without any restrictions. It provides endpoints for generating random user data, random data for posts, todos, comments, and much more.


## Why, You need to use this API ?

As a front-end developer, it can be challenging to source data when creating applications or websites. Traditional methods often involve relying on the backend or using hard-coded data, which can limit possibilities. Recently, I encountered similar difficulties and desired a more efficient solution.

My **API NINJA HUB** get response without server restrication so, developer can easily access any kind to data without hesistation.

## Features

- Zero-configuration
- Basic and Advanced API
- Resources relationships
- Supports GET, POST, PUT, PATCH, and DELETE HTTP Methods
- HTTP and HTTPS both works just fine
- Compatible with React, Angular, Vue, Ember, and vanilla JavaScript, PHP, etc.


## Installation

This is an API so you should directly fetch any type of data.

```bash
  fetch('https://api.mandorakannu.tech/api/users')
  .then(res => res.json())
  .then(json => console.log(json));  
```
OR

Use of *async await* function
```bash
const getUsers = async ()=> {
 const response = await fetch("https://api.mandorakannu.tech/api/users");
 const data = await response.json();
 return data;
}
```

OR

Use of *async await* function by **Axios**

```bash
const getUsers = async ()=> {
 const response = await axios.get("https://api.mandorakannu.tech/api/users");
 return response.data;
}
```

## Documentation

[Official Website](https://api.mandorakannu.tech/)




## API Reference


GET **/api/users** ====> **https://api.mandorakannu.tech/api/users/**

GET **/api/posts** ====> **https://api.mandorakannu.tech/api/posts/**

GET **/api/todos** ====> **https://api.mandorakannu.tech/api/todos/**

GET **/api/comments** ====> **https://api.mandorakannu.tech/api/comments/**

GET **/api/albums** ====> **https://api.mandorakannu.tech/api/albums/**

GET **/api/photos** ====> **https://api.mandorakannu.tech/api/photos/**



#### Get all users

```http
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `JSON` | Fetch all users |

#### Get only one user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Get all posts

```http
  GET /api/posts/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `null`      | `string` | Fetch all posts |

#### Get only one post

```http
  GET /api/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Get all todos

```http
  GET /api/todos/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `null`      | `string` | Fetch all todos |

#### Get only one todo

```http
  GET /api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of todo to fetch |

#### Get all comments

```http
  GET /api/comments/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `null`      | `string` | Fetch all comments |

#### Get only one comment

```http
  GET /api/comments/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of comment to fetch |

#### Get all albums

```http
  GET /api/albums/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `null`      | `string` | Fetch all albums |

#### Get only one album

```http
  GET /api/albums/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of album to fetch |

#### Get all photos

```http
  GET /api/photos/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `null`      | `string` | Fetch all photos |

#### Get only one photo

```http
  GET /api/photos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of photos to fetch |


## Tech Stack

**Client:** Tailwindcss, React.Js & Next.Js

**Server:** Node, Serverless Next.Js Server


## Support

For support, email mandorakannu@gmail.com or join follow me on GitHub.


## Environment Variables

To run this project, You don't need to add any API_KEY or other stuffs.

`API_KEY` ❌

`ANOTHER_API_KEY` ❌


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@mandorakannu](https://www.github.com/mandorakannu)


## Feedback

If you have any feedback, please reach out to us at mandorakannu@gmail.com

