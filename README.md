## baseURL
```bash
http://localhost:8080
```

## CATEGORIES:

```javascript
GET {{baseUrl}}/api/categories 
get all categories
```

```javascript
POST {{baseUrl}}/api/categories 
create category
```

```javascript
PUT {{baseUrl}}/api/categories/:id
update category by id
```

```javascript
GET {{baseUrl}}/api/categories/:id
get category by id
```

## ARTICLES:

```javascript
GET {{baseUrl}}/api/articles
get all articles
```
```javascript
POST {{baseUrl}}/api/articles 
create article
```

```javascript
PUT {{baseUrl}}/api/articles/:id
update articles by id
```

```javascript
GET {{baseUrl}}/api/articles/:id
get article by id
```

```javascript
GET {{baseUrl}}/api/articles/category/:categoryId
get articles by category id
```

```javascript
POST {{baseUrl}}/api/articles/publish/:id
publish article by id
```

```javascript
POST {{baseUrl}}/api/articles/unpublish/:id
unpublish article by id
```

```javascript
GET {{baseUrl}}/api/articles/published
get all published articles
```

```javascript
GET {{baseUrl}}/api/articles/unpublished
get all unpublished articles
```

```javascript
DELETE {{baseUrl}}/api/articles/:id
delete one article by id
```

```javascript
DELETE {{baseUrl}}/api/articles
delete all articles
```

## MODELS:

```javascript
Article {
    title: String,
    description: String,
    published: Boolean,
    categoryId: String
}
```

```javascript
Category { 
    name: String,
    id: String
}
```
CRUD NODE EXPRESS @no1see