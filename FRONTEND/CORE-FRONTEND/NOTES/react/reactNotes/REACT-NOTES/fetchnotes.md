# Comprehensive Fetch API Guide

## Table of Contents
1. [Introduction to Fetch API](#introduction-to-fetch-api)
2. [Basic Syntax and Structure](#basic-syntax-and-structure)
3. [Request Object](#request-object)
4. [Response Object](#response-object)
5. [HTTP Methods](#http-methods)
6. [Headers](#headers)
7. [Request Body](#request-body)
8. [Error Handling](#error-handling)
9. [Advanced Features](#advanced-features)
10. [Browser Support and Polyfills](#browser-support-and-polyfills)
11. [Best Practices](#best-practices)

---
# Fetch API Practice Tasks for Next.js

## Task 1: Basic GET Request
**Description**: Create a function that fetches user data from JSONPlaceholder API and returns the response.

**API Endpoint**: `https://jsonplaceholder.typicode.com/users/1`

**Task Requirements**:
- Use basic fetch syntax with .then() and .catch()
- Log the response status and status text
- Return the parsed JSON data

**Expected Output**:
```
Status: 200
Status Text: OK
User Data: {id: 1, name: "Leanne Graham", ...}
```

---

## Task 2: POST Request with Request Body
**Description**: Create a new post using JSONPlaceholder API with proper request body.

**API Endpoint**: `https://jsonplaceholder.typicode.com/posts`

**Task Requirements**:
- Set method to POST
- Add appropriate headers for JSON data
- Include request body with title, body, and userId
- Handle the response

**Expected Output**:
```
New Post Created with ID: 101
Response: {id: 101, title: "My New Post", body: "Post content", userId: 1}
```

---

## Task 3: Custom Request Object
**Description**: Create a fetch request using a custom Request object instead of URL string.

**API Endpoint**: `https://jsonplaceholder.typicode.com/todos/1`

**Task Requirements**:
- Create a Request object with URL and options
- Include headers and method in Request object
- Use the Request object in fetch()

**Expected Output**:
```
Todo Data: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
```

---

## Task 4: Response Object Handling
**Description**: Fetch data and demonstrate different ways to handle Response object.

**API Endpoint**: `https://jsonplaceholder.typicode.com/posts/1`

**Task Requirements**:
- Check response.ok status
- Extract headers from response
- Handle different response types (json(), text())
- Handle non-200 responses

**Expected Output**:
```
Response OK: true
Content-Type: application/json; charset=utf-8
Post Data: {userId: 1, id: 1, title: "...", body: "..."}
```

---

## Task 5: HTTP Methods Practice
**Description**: Implement CRUD operations using different HTTP methods.

**API Endpoint**: `https://jsonplaceholder.typicode.com/posts/1`

**Task Requirements**:
- GET: Fetch the post
- PUT: Update the post
- PATCH: Partially update the post
- DELETE: Delete the post

**Expected Output**:
```
GET Response: {original post}
PUT Response: {updated post}
PATCH Response: {partially updated post}
DELETE Response: {}
```

---

## Task 6: Headers Management
**Description**: Practice setting and reading headers in fetch requests.

**API Endpoint**: `https://jsonplaceholder.typicode.com/comments/1`

**Task Requirements**:
- Set custom headers (Authorization, Content-Type)
- Read and log response headers
- Handle CORS headers
- Set Accept header to specify response format

**Expected Output**:
```
Request Headers Set: Authorization, Content-Type
Response Headers: Content-Type, Date, etc.
Comment Data: {postId: 1, id: 1, name: "...", email: "...", body: "..."}
```

---

## Task 7: Error Handling Scenarios
**Description**: Create error handling for different failure scenarios.

**API Endpoints**:
- `https://jsonplaceholder.typicode.com/invalid-endpoint` (404)
- `https://invalid-url.com` (Network error)
- `https://jsonplaceholder.typicode.com/posts` (with malformed data)

**Task Requirements**:
- Handle 404 errors
- Handle network errors
- Handle JSON parsing errors
- Handle timeout scenarios

**Expected Output**:
```
Error 404: Not Found
Network Error: Failed to fetch
JSON Parse Error: Unexpected token
Timeout Error: Request timed out
```

---

## Task 8: Request Body with Different Formats
**Description**: Send requests with different content types in request body.

**API Endpoint**: `https://jsonplaceholder.typicode.com/posts`

**Task Requirements**:
- Send JSON data
- Send FormData
- Send URL-encoded data
- Send plain text

**Expected Output**:
```
JSON Response: {id: 101, ...}
FormData Response: {id: 101, ...}
URL-encoded Response: {id: 101, ...}
Text Response: {id: 101, ...}
```

---

## Task 9: Advanced Response Handling
**Description**: Handle complex response scenarios including redirects and blob data.

**API Endpoints**:
- `https://jsonplaceholder.typicode.com/posts` (with redirect)
- Image URL for blob handling

**Task Requirements**:
- Handle redirects
- Handle blob responses (images)
- Handle array buffer responses
- Handle response cloning

**Expected Output**:
```
Redirect handled successfully
Blob URL created: blob:http://...
ArrayBuffer length: 12345
Response cloned successfully
```

---

## Task 10: Real-world Integration Task
**Description**: Create a complete function that integrates multiple fetch concepts for a practical scenario.

**Scenario**: User registration and profile update flow

**API Endpoints**:
- Register: `https://jsonplaceholder.typicode.com/users`
- Update: `https://jsonplaceholder.typicode.com/users/1`
- Fetch profile: `https://jsonplaceholder.typicode.com/users/1`

**Task Requirements**:
- Register user with POST
- Update user profile with PUT
- Fetch updated profile
- Handle errors at each step
- Implement retry logic for failed requests

**Expected Output**:
```
User registered with ID: 11
Profile updated successfully
Updated Profile: {name: "Updated Name", email: "updated@email.com", ...}
All operations completed successfully
```

---

## Debugging Assignments

### Debug 1: Fix the Broken GET Request
**Problem Code Symptoms**:
- Request hangs indefinitely
- No response received
- Console shows network errors

**Expected Fix**: Identify and correct syntax errors, missing error handling, and improper URL formatting.

### Debug 2: POST Request Not Sending Data
**Problem Code Symptoms**:
- Request sends but server receives empty body
- 400 Bad Request errors
- Headers not being set properly

**Expected Fix**: Correct headers configuration, proper body serialization, and content-type settings.

### Debug 3: CORS Issues
**Problem Code Symptoms**:
- CORS policy errors in console
- Requests blocked by browser
- Preflight request failures

**Expected Fix**: Implement proper CORS handling, headers configuration, and error recovery.

### Debug 4: Memory Leaks with AbortController
**Problem Code Symptoms**:
- Requests not canceling properly
- Memory leaks in component unmounting
- Multiple requests overlapping

**Expected Fix**: Implement proper cleanup, abort controller usage, and request cancellation.

---

## Success Criteria:
After completing these tasks, you should be able to:
- Handle any type of HTTP request in frontend applications
- Implement proper error handling for network requests
- Manage request/response lifecycle effectively
- Debug common fetch-related issues
- Work with different data formats and APIs
- Implement advanced features like aborting requests and handling blobs

Looking at the topics you listed, I realize I missed some **critical real-world scenarios** that you'll definitely encounter in frontend development. Let me add those missing pieces:

## Missing Scenarios I Need to Cover:

### **11. Authentication & Authorization**
- JWT tokens in headers
- Refresh token flow
- Protected routes handling
- Authentication timeout

### **12. State Management Integration**
- Loading states
- Error states in UI
- Success states
- Data caching strategies

### **13. Performance Optimization**
- Request deduplication
- Request cancellation (AbortController)
- Caching strategies
- Pagination handling

### **14. Real-time Data**
- Polling mechanisms
- WebSocket fallbacks
- Optimistic updates
- Background sync

### **15. File Upload/Download**
- Progress tracking
- Large file handling
- Multipart form data
- Blob downloads

### **16. API Rate Limiting**
- Retry with exponential backoff
- Rate limit headers handling
- Queue management

### **17. Offline Support**
- Service Worker integration
- Request queuing
- Sync when online

---

## Revised Complete Task List:

### **Task 11: Authentication Flow**
**Scenario**: Implement login → get token → access protected resource → handle token expiry

### **Task 12: Loading & Error States**
**Scenario**: Show loading spinners, error messages, empty states, and success notifications

### **Task 13: Request Cancellation**
**Scenario**: Cancel requests when component unmounts or when new request is made

### **Task 14: Pagination & Infinite Scroll**
**Scenario**: Fetch paginated data and implement "Load More" functionality

### **Task 15: File Upload with Progress**
**Scenario**: Upload image with progress bar and preview

### **Task 16: API Rate Limiting Handling**
**Scenario**: Detect rate limits and implement retry logic

### **Task 17: Offline-First Approach**
**Scenario**: Queue requests when offline and sync when online

---


## Introduction to Fetch API

### What is Fetch API?
The Fetch API is a modern, promise-based interface for making HTTP requests in JavaScript. It's a replacement for the older XMLHttpRequest (XHR) and provides a more powerful and flexible feature set.

### Key Features
- **Promise-based**: Uses Promises and supports async/await
- **Streaming**: Supports streaming request and response bodies
- **Flexible**: Extensive configuration options
- **Modern**: Built for modern web applications
- **Standardized**: Part of the WHATWG Fetch specification

### Fetch vs XMLHttpRequest Comparison

```
XMLHttpRequest (Old Way)          →    Fetch API (Modern Way)
─────────────────────────────           ─────────────────────
• Callback-based                       • Promise-based
• Complex error handling                • Simplified error handling
• Verbose syntax                        • Clean, readable syntax
• Limited streaming support             • Built-in streaming
• Inconsistent across browsers          • Standardized specification
```

### Basic Flow Diagram

```
Request Initiation
       ↓
   fetch(url, options)
       ↓
   Promise<Response>
       ↓
   Response Object
       ↓
   Extract Data (.json(), .text(), etc.)
       ↓
   Final Data
```

---

## Basic Syntax and Structure

### Minimal Syntax
```javascript
fetch(resource)
fetch(resource, options)
```

### Simple GET Request
```javascript
// Basic GET request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Using Async/Await
```javascript
async function fetchUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}
```

### Parameters Breakdown

#### Resource (Required)
- **Type**: String or Request object
- **Purpose**: URL to fetch or Request object
- **Examples**:
  ```javascript
  // String URL
  fetch('https://api.example.com/data')
  
  // Relative URL
  fetch('/api/users')
  
  // Request object
  const request = new Request('https://api.example.com/users');
  fetch(request)
  ```

#### Options (Optional)
- **Type**: Object
- **Purpose**: Configure the request
- **Structure**:
  ```javascript
  {
    method: 'GET',        // HTTP method
    headers: {},          // Request headers
    body: null,           // Request body
    mode: 'cors',         // Request mode
    credentials: 'same-origin', // Credentials policy
    cache: 'default',     // Cache policy
    redirect: 'follow',   // Redirect policy
    referrer: 'about:client', // Referrer
    integrity: '',        // Subresource integrity
    signal: null          // AbortSignal
  }
  ```

---

## Request Object

### Creating Request Objects

#### Using the Request Constructor
```javascript
const request = new Request('https://api.example.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  }
});

// Use the request object
fetch(request)
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Request Properties
```javascript
const request = new Request('https://api.example.com/users');

console.log(request.url);         // "https://api.example.com/users"
console.log(request.method);      // "GET"
console.log(request.headers);     // Headers object
console.log(request.body);        // null (for GET)
console.log(request.bodyUsed);    // false
console.log(request.credentials); // "same-origin"
console.log(request.mode);        // "cors"
console.log(request.cache);       // "default"
```

#### Cloning Requests
```javascript
const originalRequest = new Request('https://api.example.com/users');
const clonedRequest = originalRequest.clone();

// Both requests can be used independently
fetch(originalRequest);
fetch(clonedRequest);
```

### Request Configuration Options

#### Method
```javascript
// GET (default)
fetch('/api/users')

// POST
fetch('/api/users', { method: 'POST' })

// PUT
fetch('/api/users/1', { method: 'PUT' })

// DELETE
fetch('/api/users/1', { method: 'DELETE' })

// PATCH
fetch('/api/users/1', { method: 'PATCH' })
```

#### Mode
```javascript
// cors (default) - allows cross-origin requests
fetch('/api/data', { mode: 'cors' })

// same-origin - only same-origin requests
fetch('/api/data', { mode: 'same-origin' })

// no-cors - limited cross-origin requests
fetch('/api/data', { mode: 'no-cors' })

// navigate - for navigation requests
fetch('/page', { mode: 'navigate' })
```

#### Credentials
```javascript
// same-origin (default) - send credentials for same-origin
fetch('/api/data', { credentials: 'same-origin' })

// include - always send credentials
fetch('/api/data', { credentials: 'include' })

// omit - never send credentials
fetch('/api/data', { credentials: 'omit' })
```

#### Cache
```javascript
// default - use browser's default cache behavior
fetch('/api/data', { cache: 'default' })

// no-store - bypass cache completely
fetch('/api/data', { cache: 'no-store' })

// reload - fetch from network, update cache
fetch('/api/data', { cache: 'reload' })

// no-cache - validate cache before use
fetch('/api/data', { cache: 'no-cache' })

// force-cache - use cache, even if stale
fetch('/api/data', { cache: 'force-cache' })

// only-if-cached - only use cache
fetch('/api/data', { cache: 'only-if-cached' })
```

---

## Response Object

### Response Properties and Methods

#### Basic Properties
```javascript
fetch('/api/users')
  .then(response => {
    console.log(response.status);     // 200, 404, 500, etc.
    console.log(response.statusText); // "OK", "Not Found", etc.
    console.log(response.ok);         // true if status 200-299
    console.log(response.url);        // Final URL after redirects
    console.log(response.type);       // "basic", "cors", "opaque"
    console.log(response.redirected); // true if redirected
    console.log(response.headers);    // Headers object
    console.log(response.bodyUsed);   // false initially
  });
```

#### Response Status Flow
```
Response Status Codes
─────────────────────
1xx: Informational
2xx: Success (response.ok = true)
3xx: Redirection
4xx: Client Error (response.ok = false)
5xx: Server Error (response.ok = false)
```

### Reading Response Body

#### JSON Data
```javascript
// Reading JSON data
async function fetchUserData() {
  const response = await fetch('/api/users');
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const users = await response.json();
  return users;
}

// With error handling
fetch('/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
```

#### Text Data
```javascript
// Reading plain text
fetch('/api/message')
  .then(response => response.text())
  .then(text => console.log(text));

// Reading HTML
fetch('/template.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('content').innerHTML = html;
  });
```

#### Binary Data
```javascript
// Reading blob data
fetch('/api/image')
  .then(response => response.blob())
  .then(blob => {
    const imageUrl = URL.createObjectURL(blob);
    document.getElementById('myImage').src = imageUrl;
  });

// Reading array buffer
fetch('/api/binary')
  .then(response => response.arrayBuffer())
  .then(buffer => {
    const view = new Uint8Array(buffer);
    console.log(view);
  });
```

#### Form Data
```javascript
// Reading form data
fetch('/api/form')
  .then(response => response.formData())
  .then(formData => {
    for (let [key, value] of formData) {
      console.log(key, value);
    }
  });
```

### Response Methods Summary

| Method | Returns | Use Case |
|--------|---------|----------|
| `response.json()` | Promise\<Object> | JSON data |
| `response.text()` | Promise\<String> | Plain text, HTML |
| `response.blob()` | Promise\<Blob> | Binary data, files |
| `response.arrayBuffer()` | Promise\<ArrayBuffer> | Raw binary data |
| `response.formData()` | Promise\<FormData> | Form submissions |
| `response.clone()` | Response | Clone response |

### Important Response Behavior
```javascript
// ⚠️ Response body can only be read once
fetch('/api/data')
  .then(response => {
    response.json(); // First read
    return response.json(); // ❌ Error: body already read
  });

// ✅ Solution: Clone the response
fetch('/api/data')
  .then(response => {
    const clone = response.clone();
    response.json().then(data => console.log('First:', data));
    return clone.json();
  })
  .then(data => console.log('Second:', data));
```

---

## HTTP Methods

### GET Requests
```javascript
// Simple GET
const getUsers = async () => {
  try {
    const response = await fetch('/api/users');
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};

// GET with query parameters
const searchUsers = async (query) => {
  const params = new URLSearchParams({
    q: query,
    limit: 10,
    page: 1
  });
  
  const response = await fetch(`/api/users/search?${params}`);
  return response.json();
};
```

### POST Requests
```javascript
// POST with JSON data
const createUser = async (userData) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
};

// Usage
createUser({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});
```

### PUT Requests
```javascript
// PUT - Complete resource replacement
const updateUser = async (userId, userData) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  
  return response.json();
};

// Usage - replaces entire user object
updateUser(1, {
  name: 'Jane Doe',
  email: 'jane@example.com',
  age: 25,
  address: '123 Main St'
});
```

### PATCH Requests
```javascript
// PATCH - Partial resource update
const partialUpdateUser = async (userId, updates) => {
  const response = await fetch(`/api/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates)
  });
  
  return response.json();
};

// Usage - only updates specified fields
partialUpdateUser(1, {
  email: 'newemail@example.com'
});
```

### DELETE Requests
```javascript
// DELETE request
const deleteUser = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to delete user: ${response.status}`);
    }
    
    // Some APIs return empty body for DELETE
    if (response.status === 204) {
      return { success: true };
    }
    
    return response.json();
  } catch (error) {
    console.error('Delete operation failed:', error);
    throw error;
  }
};
```

### HEAD Requests
```javascript
// HEAD - Get only headers (no body)
const checkResourceExists = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return {
      exists: response.ok,
      lastModified: response.headers.get('Last-Modified'),
      contentLength: response.headers.get('Content-Length'),
      contentType: response.headers.get('Content-Type')
    };
  } catch (error) {
    return { exists: false, error: error.message };
  }
};
```

### OPTIONS Requests
```javascript
// OPTIONS - Check allowed methods
const checkAllowedMethods = async (url) => {
  try {
    const response = await fetch(url, { method: 'OPTIONS' });
    const allowedMethods = response.headers.get('Allow');
    return allowedMethods ? allowedMethods.split(', ') : [];
  } catch (error) {
    console.error('Failed to check allowed methods:', error);
    return [];
  }
};
```

---

## Headers

### Understanding Headers

#### What are Headers?
Headers are key-value pairs that provide additional information about the request or response. They control various aspects of HTTP communication.

### Working with Headers Object

#### Creating Headers
```javascript
// Method 1: Using Headers constructor
const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Bearer token123');

// Method 2: Using object literal
const headers2 = new Headers({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token123'
});

// Method 3: Using plain object in fetch
fetch('/api/data', {
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'custom-value'
  }
});
```

#### Headers Methods
```javascript
const headers = new Headers();

// Adding headers
headers.append('Content-Type', 'application/json');
headers.set('Authorization', 'Bearer token123'); // set overwrites, append adds

// Reading headers
console.log(headers.get('Content-Type')); // "application/json"
console.log(headers.has('Authorization')); // true
console.log(headers.keys()); // Iterator of header names
console.log(headers.values()); // Iterator of header values

// Iterating headers
for (let [key, value] of headers) {
  console.log(`${key}: ${value}`);
}

// Deleting headers
headers.delete('Authorization');
```

### Common Request Headers

#### Content-Type
```javascript
// JSON data
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John' })
});

// Form data
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'name=John&email=john@example.com'
});

// Multipart form (don't set Content-Type, browser sets it)
const formData = new FormData();
formData.append('name', 'John');
formData.append('file', fileInput.files[0]);

fetch('/api/upload', {
  method: 'POST',
  body: formData // No Content-Type header needed
});
```

#### Authorization
```javascript
// Bearer token
fetch('/api/protected', {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
  }
});

// Basic auth
const credentials = btoa('username:password');
fetch('/api/protected', {
  headers: {
    'Authorization': `Basic ${credentials}`
  }
});

// API key
fetch('/api/data', {
  headers: {
    'X-API-Key': 'your-api-key-here'
  }
});
```

#### Accept
```javascript
// Accept JSON
fetch('/api/users', {
  headers: {
    'Accept': 'application/json'
  }
});

// Accept multiple types
fetch('/api/data', {
  headers: {
    'Accept': 'application/json, text/plain, */*'
  }
});

// Accept specific version
fetch('/api/users', {
  headers: {
    'Accept': 'application/vnd.api+json; version=1'
  }
});
```

#### Custom Headers
```javascript
// Request ID for tracking
fetch('/api/data', {
  headers: {
    'X-Request-ID': crypto.randomUUID(),
    'X-Client-Version': '1.2.3',
    'X-User-Agent': 'MyApp/1.0'
  }
});
```

### Response Headers

#### Reading Response Headers
```javascript
fetch('/api/users')
  .then(response => {
    // Get specific header
    const contentType = response.headers.get('Content-Type');
    const lastModified = response.headers.get('Last-Modified');
    const rateLimit = response.headers.get('X-RateLimit-Remaining');
    
    console.log('Content-Type:', contentType);
    console.log('Last-Modified:', lastModified);
    console.log('Rate limit remaining:', rateLimit);
    
    // Iterate all headers
    for (let [key, value] of response.headers) {
      console.log(`${key}: ${value}`);
    }
    
    return response.json();
  });
```

#### Common Response Headers
```javascript
// Checking cache headers
fetch('/api/data')
  .then(response => {
    const cacheControl = response.headers.get('Cache-Control');
    const etag = response.headers.get('ETag');
    const expires = response.headers.get('Expires');
    
    console.log('Cache-Control:', cacheControl); // "max-age=3600"
    console.log('ETag:', etag); // "W/\"abc123\""
    console.log('Expires:', expires); // Date string
  });

// Checking CORS headers
fetch('/api/data')
  .then(response => {
    const corsOrigin = response.headers.get('Access-Control-Allow-Origin');
    const corsMethods = response.headers.get('Access-Control-Allow-Methods');
    
    console.log('CORS Origin:', corsOrigin);
    console.log('CORS Methods:', corsMethods);
  });
```

### Headers Security Considerations

#### Safe Headers (Can be set by fetch)
```javascript
// These headers can be set freely
const safeHeaders = {
  'Accept': 'application/json',
  'Accept-Language': 'en-US,en;q=0.9',
  'Content-Language': 'en-US',
  'Content-Type': 'application/json', // with restrictions
  'Range': 'bytes=0-1023'
};
```

#### Forbidden Headers (Cannot be set by fetch)
```javascript
// These headers are controlled by the browser
const forbiddenHeaders = [
  'Host',
  'User-Agent',
  'Referer',
  'Origin',
  'Cookie',
  'Set-Cookie'
];

// ❌ This won't work
fetch('/api/data', {
  headers: {
    'Host': 'malicious-site.com', // Ignored by browser
    'Origin': 'fake-origin.com'   // Ignored by browser
  }
});
```

---

## Request Body

### Types of Request Bodies

#### JSON Body
```javascript
// Sending JSON data
const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
});
```

#### Form Data (URL Encoded)
```javascript
// Method 1: Using URLSearchParams
const formData = new URLSearchParams();
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');

fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: formData
});

// Method 2: Manual string construction
const formBody = 'name=John%20Doe&email=john%40example.com';

fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: formBody
});
```

#### Multipart Form Data
```javascript
// File upload with additional fields
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');
formData.append('avatar', fileInput.files[0]);
formData.append('documents', fileInput.files[1]);

// Don't set Content-Type header - browser will set it with boundary
fetch('/api/upload', {
  method: 'POST',
  body: formData
});

// Multiple files
const multipleFiles = Array.from(fileInput.files);
multipleFiles.forEach((file, index) => {
  formData.append(`file${index}`, file);
});
```

#### Text Body
```javascript
// Plain text
fetch('/api/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: 'This is a plain text note'
});

// CSV data
const csvData = `name,email,age
John Doe,john@example.com,30
Jane Smith,jane@example.com,25`;

fetch('/api/import', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/csv'
  },
  body: csvData
});
```

#### Binary Data
```javascript
// Sending binary data
const binaryData = new Uint8Array([1, 2, 3, 4, 5]);

fetch('/api/binary', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream'
  },
  body: binaryData
});

// Sending a Blob
const blob = new Blob(['Hello, World!'], { type: 'text/plain' });

fetch('/api/blob', {
  method: 'POST',
  body: blob
});
```

#### Stream Body
```javascript
// Sending a ReadableStream
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue(new TextEncoder().encode('chunk 1\n'));
    controller.enqueue(new TextEncoder().encode('chunk 2\n'));
    controller.close();
  }
});

fetch('/api/stream', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
  },
  body: stream
});
```

### Body Processing Examples

#### Processing Form Inputs
```javascript
// Convert form to JSON
function formToJSON(form) {
  const formData = new FormData(form);
  const object = {};
  
  for (let [key, value] of formData) {
    if (object[key]) {
      // Handle multiple values (checkboxes, multiple selects)
      if (Array.isArray(object[key])) {
        object[key].push(value);
      } else {
        object[key] = [object[key], value];
      }
    } else {
      object[key] = value;
    }
  }
  
  return JSON.stringify(object);
}

// Usage
document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const jsonBody = formToJSON(e.target);
  
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonBody
    });
    
    const result = await response.json();
    console.log('User created:', result);
  } catch (error) {
    console.error('Error:', error);
  }
});
```

#### File Upload with Progress
```javascript
// File upload with progress tracking
async function uploadFileWithProgress(file, onProgress) {
  const formData = new FormData();
  formData.append('file', file);
  
  const xhr = new XMLHttpRequest();
  
  return new Promise((resolve, reject) => {
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const progress = (e.loaded / e.total) * 100;
        onProgress(progress);
      }
    });
    
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`Upload failed: ${xhr.status}`));
      }
    });
    
    xhr.addEventListener('error', () => {
      reject(new Error('Upload failed'));
    });
    
    xhr.open('POST', '/api/upload');
    xhr.send(formData);
  });
}

// Usage
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  try {
    const result = await uploadFileWithProgress(file, (progress) => {
      console.log(`Upload progress: ${progress.toFixed(2)}%`);
    });
    console.log('Upload complete:', result);
  } catch (error) {
    console.error('Upload error:', error);
  }
});
```

### Body Size Limitations

#### Checking Body Size
```javascript
// Check if body is too large before sending
function checkBodySize(body, maxSize = 10 * 1024 * 1024) { // 10MB default
  let size = 0;
  
  if (typeof body === 'string') {
    size = new Blob([body]).size;
  } else if (body instanceof FormData) {
    // FormData size is harder to calculate precisely
    for (let [key, value] of body) {
      if (value instanceof File) {
        size += value.size;
      } else {
        size += new Blob([value]).size;
      }
    }
  } else if (body instanceof Blob) {
    size = body.size;
  } else if (body instanceof ArrayBuffer) {
    size = body.byteLength;
  }
  
  if (size > maxSize) {
    throw new Error(`Request body too large: ${size} bytes (max: ${maxSize})`);
  }
  
  return size;
}

// Usage
try {
  const bodySize = checkBodySize(JSON.stringify(largeObject));
  console.log(`Body size: ${bodySize} bytes`);
  
  const response = await fetch('/api/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(largeObject)
  });
} catch (error) {
  console.error('Body size error:', error.message);
}
```

---

## Error Handling

### Types of Fetch Errors

#### Network Errors vs HTTP Errors
```javascript
/*
Network Errors (Fetch Promise Rejects):
- No internet connection
- Server unreachable
- DNS lookup failed
- Request timeout
- CORS policy violations

HTTP Errors (Fetch Promise Resolves):
- 4xx Client errors (400, 401, 403, 404)
- 5xx Server errors (500, 502, 503, 504)
*/
```

### Basic Error Handling

#### Checking Response Status
```javascript
async function fetchWithErrorHandling(url, options) {
  try {
    const response = await fetch(url, options);
    
    // Check if response is ok (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle both network errors and HTTP errors
    console.error('Fetch error:', error.message);
    throw error;
  }
}

// Usage
try {
  const data = await fetchWithErrorHandling('/api/users');
  console.log(data);
} catch (error) {
  // Handle error in UI
  showErrorMessage(error.message);
}
```

### Advanced Error Handling

#### Comprehensive Error Handler
```javascript
class FetchError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = 'FetchError';
    this.status = status;
    this.response = response;
  }
}

async function robustFetch(url, options = {}) {
  let response;
  
  try {
    response = await fetch(url, options);
  } catch (error) {
    // Network error
    throw new FetchError(
      'Network error: Unable to reach server',
      0,
      null
    );
  }
  
  // Handle different status codes
  if (!response.ok) {
    let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
    let errorData = null;
    
    try {
      // Try to get error details from response body
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } else {
        const text = await response.text();
        if (text) errorMessage = text;
      }
    } catch (parseError) {
      // If parsing fails, use original error message
      console.warn('Failed to parse error response:', parseError);
    }
    
    // Handle specific status codes
    switch (response.status) {
      case 400:
        throw new FetchError(`Bad Request: ${errorMessage}`, 400, errorData);
      case 401:
        throw new FetchError(`Unauthorized: ${errorMessage}`, 401, errorData);
      case 403:
        throw new FetchError(`Forbidden: ${errorMessage}`, 403, errorData);
      case 404:
        throw new FetchError(`Not Found: ${errorMessage}`, 404, errorData);
      case 429:
        throw new FetchError(`Too Many Requests: ${errorMessage}`, 429, errorData);
      case 500:
        throw new FetchError(`Internal Server Error: ${errorMessage}`, 500, errorData);
      case 502:
        throw new FetchError(`Bad Gateway: ${errorMessage}`, 502, errorData);
      case 503:
        throw new FetchError(`Service Unavailable: ${errorMessage}`, 503, errorData);
      default:
        throw new FetchError(errorMessage, response.status, errorData);
    }
  }
  
  return response;
}

// Usage with comprehensive error handling
async function getUser(id) {
  try {
    const response = await robustFetch(`/api/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    if (error instanceof FetchError) {
      switch (error.status) {
        case 0:
          console.error('Network error - check connection');
          break;
        case 401:
          console.error('Authentication required');
          // Redirect to login
          window.location.href = '/login';
          break;
        case 404:
          console.error('User not found');
          break;
        case 500:
          console.error('Server error - try again later');
          break;
        default:
          console.error(`API error: ${error.message}`);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}
```

#### Retry Logic with Exponential Backoff
```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  const { retryDelay = 1000, backoffFactor = 2, ...fetchOptions } = options;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, fetchOptions);
      
      // Don't retry client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        throw new FetchError('Client error', response.status, response);
      }
      
      // Return successful response
      if (response.ok) {
        return response;
      }
      
      // Retry server errors (5xx) if attempts remaining
      if (attempt < maxRetries) {
        const delay = retryDelay * Math.pow(backoffFactor, attempt);
        console.warn(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      throw new FetchError('Max retries exceeded', response.status, response);
      
    } catch (error) {
      // Network errors - retry if attempts remaining
      if (attempt < maxRetries && !(error instanceof FetchError)) {
        const delay = retryDelay * Math.pow(backoffFactor, attempt);
        console.warn(`Network error on attempt ${attempt + 1}, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      throw error;
    }
  }
}

// Usage
try {
  const response = await fetchWithRetry('/api/data', {
    method: 'GET',
    retryDelay: 1000,    // Start with 1 second delay
    backoffFactor: 2,    // Double delay each retry
  }, 3); // Max 3 retries
  
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('All retry attempts failed:', error);
}
```

#### Timeout Handling
```javascript
// Create timeout helper
function createTimeoutSignal(timeoutMs) {
  const controller = new AbortController();
  
  const timeout = setTimeout(() => {
    controller.abort();
  }, timeoutMs);
  
  return {
    signal: controller.signal,
    cleanup: () => clearTimeout(timeout)
  };
}

// Fetch with timeout
async function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
  const { signal: existingSignal, ...otherOptions } = options;
  const { signal: timeoutSignal, cleanup } = createTimeoutSignal(timeoutMs);
  
  // Combine existing signal with timeout signal
  const controller = new AbortController();
  
  const abortBoth = () => controller.abort();
  
  if (existingSignal) {
    if (existingSignal.aborted) {
      controller.abort();
    } else {
      existingSignal.addEventListener('abort', abortBoth);
    }
  }
  
  if (timeoutSignal.aborted) {
    controller.abort();
  } else {
    timeoutSignal.addEventListener('abort', abortBoth);
  }
  
  try {
    const response = await fetch(url, {
      ...otherOptions,
      signal: controller.signal
    });
    
    cleanup();
    return response;
  } catch (error) {
    cleanup();
    
    if (error.name === 'AbortError') {
      if (timeoutSignal.aborted) {
        throw new Error(`Request timeout after ${timeoutMs}ms`);
      }
      throw new Error('Request was cancelled');
    }
    
    throw error;
  }
}

// Usage
try {
  const response = await fetchWithTimeout('/api/slow-endpoint', {
    method: 'GET'
  }, 3000); // 3 second timeout
  
  const data = await response.json();
  console.log(data);
} catch (error) {
  if (error.message.includes('timeout')) {
    console.error('Request timed out');
  } else {
    console.error('Request failed:', error);
  }
}
```

---

## Advanced Features

### AbortController and Request Cancellation

#### Basic Cancellation
```javascript
// Create abort controller
const controller = new AbortController();

// Start the request
const fetchData = async () => {
  try {
    const response = await fetch('/api/data', {
      signal: controller.signal
    });
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled');
    } else {
      console.error('Request failed:', error);
    }
  }
};

fetchData();

// Cancel the request (e.g., on button click)
document.getElementById('cancelBtn').addEventListener('click', () => {
  controller.abort();
});
```

#### Component-based Cancellation (React Example)
```javascript
import { useEffect, useState, useRef } from 'react';

function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef();
  
  useEffect(() => {
    const fetchData = async () => {
      // Cancel previous request if exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      // Create new controller
      abortControllerRef.current = new AbortController();
      
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/data', {
          signal: abortControllerRef.current.signal
        });
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Cleanup on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{JSON.stringify(data)}</div>;
}
```

### Streaming Responses

#### Reading Streams
```javascript
async function readStream(url) {
  try {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        console.log('Stream complete');
        break;
      }
      
      // Process chunk
      const chunk = decoder.decode(value, { stream: true });
      console.log('Received chunk:', chunk);
      
      // Process the chunk (e.g., update UI)
      processChunk(chunk);
    }
  } catch (error) {
    console.error('Stream reading error:', error);
  }
}

function processChunk(chunk) {
  // Example: Append to a div
  const output = document.getElementById('output');
  output.textContent += chunk;
}
```

#### Server-Sent Events (SSE) Pattern
```javascript
async function connectToSSE(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'text/event-stream',
        'Cache-Control': 'no-cache'
      }
    });
    
    if (!response.ok) {
      throw new Error(`SSE connection failed: ${response.status}`);
    }
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    
    while (true) {
      const { done, value } = await reader.read();
      
      if (done) break;
      
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          try {
            const event = JSON.parse(data);
            handleSSEEvent(event);
          } catch (e) {
            console.log('SSE text data:', data);
          }
        }
      }
    }
  } catch (error) {
    console.error('SSE error:', error);
  }
}

function handleSSEEvent(event) {
  console.log('SSE event received:', event);
  // Update UI based on event
}

// Usage
connectToSSE('/api/events');
```

### Request/Response Interception

#### Global Request Interceptor
```javascript
// Store original fetch
const originalFetch = window.fetch;

// Create intercepted fetch
window.fetch = async (resource, options = {}) => {
  // Request interceptor
  console.log('Intercepted request:', resource, options);
  
  // Add common headers
  const modifiedOptions = {
    ...options,
    headers: {
      'X-Request-ID': crypto.randomUUID(),
      'X-Client-Version': '1.0.0',
      ...options.headers
    }
  };
  
  // Add authentication token
  const token = localStorage.getItem('authToken');
  if (token && !modifiedOptions.headers.Authorization) {
    modifiedOptions.headers.Authorization = `Bearer ${token}`;
  }
  
  try {
    // Make the actual request
    const response = await originalFetch(resource, modifiedOptions);
    
    // Response interceptor
    console.log('Intercepted response:', response.status, response.statusText);
    
    // Handle specific status codes globally
    if (response.status === 401) {
      console.warn('Unauthorized request detected');
      localStorage.removeItem('authToken');
      window.location.href = '/login';
      return response;
    }
    
    if (response.status >= 500) {
      console.error('Server error detected:', response.status);
      // Could show global error notification
    }
    
    return response;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};

// Restore original fetch if needed
// window.fetch = originalFetch;
```

#### API Client with Interceptors
```javascript
class ApiClient {
  constructor(baseURL = '') {
    this.baseURL = baseURL;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }
  
  // Add request interceptor
  addRequestInterceptor(interceptor) {
    this.requestInterceptors.push(interceptor);
  }
  
  // Add response interceptor
  addResponseInterceptor(interceptor) {
    this.responseInterceptors.push(interceptor);
  }
  
  async fetch(url, options = {}) {
    let finalUrl = url.startsWith('http') ? url : `${this.baseURL}${url}`;
    let finalOptions = { ...options };
    
    // Apply request interceptors
    for (const interceptor of this.requestInterceptors) {
      const result = await interceptor(finalUrl, finalOptions);
      if (result) {
        finalUrl = result.url || finalUrl;
        finalOptions = result.options || finalOptions;
      }
    }
    
    try {
      let response = await fetch(finalUrl, finalOptions);
      
      // Apply response interceptors
      for (const interceptor of this.responseInterceptors) {
        response = (await interceptor(response)) || response;
      }
      
      return response;
    } catch (error) {
      throw error;
    }
  }
  
  // Convenience methods
  async get(url, options = {}) {
    return this.fetch(url, { ...options, method: 'GET' });
  }
  
  async post(url, data, options = {}) {
    return this.fetch(url, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data)
    });
  }
  
  async put(url, data, options = {}) {
    return this.fetch(url, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data)
    });
  }
  
  async delete(url, options = {}) {
    return this.fetch(url, { ...options, method: 'DELETE' });
  }
}

// Usage
const api = new ApiClient('https://api.example.com');

// Add auth interceptor
api.addRequestInterceptor((url, options) => {
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`
    };
  }
  return { url, options };
});

// Add logging interceptor
api.addResponseInterceptor((response) => {
  console.log(`Response: ${response.status} ${response.url}`);
  return response;
});

// Use the client
const users = await api.get('/users').then(r => r.json());
const newUser = await api.post('/users', { name: 'John' }).then(r => r.json());
```

---

## Browser Support and Polyfills

### Browser Compatibility

#### Native Support
```javascript
// Check if fetch is supported
if ('fetch' in window) {
  // Native fetch available
  console.log('Native fetch supported');
} else {
  // Need polyfill
  console.log('Fetch polyfill required');
}

// Feature detection for specific features
const supportedFeatures = {
  fetch: 'fetch' in window,
  abortController: 'AbortController' in window,
  readableStream: 'ReadableStream' in window,
  request: 'Request' in window,
  response: 'Response' in window,
  headers: 'Headers' in window
};

console.log('Supported features:', supportedFeatures);
```

#### Browser Support Matrix
```
Feature                Chrome  Firefox  Safari  Edge    IE
─────────────────────  ──────  ───────  ──────  ──────  ──
Basic fetch()          42      39       10.1    14      No
Request/Response       42      39       10.1    14      No  
Headers                42      39       10.1    14      No
AbortController        66      57       11.1    16      No
ReadableStream         43      65       10.1    14      No
Request.clone()        42      39       10.1    14      No
Response.clone()       42      39       10.1    14      No
```

### Polyfills

#### Fetch Polyfill Installation
```bash
# Using npm
npm install whatwg-fetch

# Using yarn
yarn add whatwg-fetch

# Using CDN
<script src="https://polyfill.io/v3/polyfill.min.js?features=fetch"></script>
```

#### Manual Polyfill Implementation
```javascript
// Simple fetch polyfill for older browsers
(function() {
  'use strict';
  
  if ('fetch' in window) return;
  
  window.fetch = function(resource, init) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.onload = function() {
        const response = {
          status: xhr.status,
          statusText: xhr.statusText,
          ok: xhr.status >= 200 && xhr.status < 300,
          headers: parseHeaders(xhr.getAllResponseHeaders()),
          url: xhr.responseURL || resource,
          text: () => Promise.resolve(xhr.responseText),
          json: () => Promise.resolve(JSON.parse(xhr.responseText)),
          blob: () => Promise.resolve(new Blob([xhr.response])),
          clone: function() { return Object.assign({}, this); }
        };
        resolve(response);
      };
      
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      
      xhr.ontimeout = function() {
        reject(new TypeError('Network request timed out'));
      };
      
      xhr.onabort = function() {
        reject(new TypeError('Network request aborted'));
      };
      
      const method = (init && init.method) || 'GET';
      const body = init && init.body;
      const headers = init && init.headers;
      
      xhr.open(method, resource, true);
      
      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }
      
      if (init && init.timeout) {
        xhr.timeout = init.timeout;
      }
      
      xhr.send(body);
    });
  };
  
  function parseHeaders(headersString) {
    const headers = {};
    if (!headersString) return headers;
    
    headersString.split('\r\n').forEach(line => {
      const parts = line.split(': ');
      if (parts.length === 2) {
        headers[parts[0]] = parts[1];
      }
    });
    
    return {
      get: key => headers[key],
      has: key => key in headers,
      keys: () => Object.keys(headers),
      values: () => Object.values(headers),
      entries: () => Object.entries(headers)
    };
  }
})();
```

#### AbortController Polyfill
```javascript
// AbortController polyfill
(function() {
  'use strict';
  
  if ('AbortController' in window) return;
  
  window.AbortController = function() {
    this.signal = {
      aborted: false,
      addEventListener: function(type, listener) {
        if (type === 'abort' && typeof listener === 'function') {
          this._listener = listener;
        }
      },
      removeEventListener: function() {
        this._listener = null;
      }
    };
    
    this.abort = () => {
      if (this.signal.aborted) return;
      
      this.signal.aborted = true;
      if (this.signal._listener) {
        this.signal._listener();
      }
    };
  };
})();
```

### Progressive Enhancement

#### Graceful Degradation
```javascript
// API client that works with and without fetch
class UniversalApiClient {
  constructor() {
    this.supportsFetch = 'fetch' in window;
    this.supportsAbort = 'AbortController' in window;
  }
  
  async request(url, options = {}) {
    if (this.supportsFetch) {
      return this._fetchRequest(url, options);
    } else {
      return this._xhrRequest(url, options);
    }
  }
  
  async _fetchRequest(url, options) {
    const controller = this.supportsAbort ? new AbortController() : null;
    
    const fetchOptions = {
      ...options,
      ...(controller && { signal: controller.signal })
    };
    
    try {
      const response = await fetch(url, fetchOptions);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request cancelled');
      }
      throw error;
    }
  }
  
  _xhrRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const method = options.method || 'GET';
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve({
              status: xhr.status,
              statusText: xhr.statusText,
              json: () => Promise.resolve(JSON.parse(xhr.responseText)),
              text: () => Promise.resolve(xhr.responseText)
            });
          } else {
            reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
          }
        }
      };
      
      xhr.onerror = () => reject(new Error('Network error'));
      xhr.ontimeout = () => reject(new Error('Request timeout'));
      
      xhr.open(method, url, true);
      
      // Set headers
      if (options.headers) {
        Object.entries(options.headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }
      
      // Set timeout
      if (options.timeout) {
        xhr.timeout = options.timeout;
      }
      
      xhr.send(options.body || null);
    });
  }
}

// Usage works the same regardless of browser support
const client = new UniversalApiClient();

try {
  const response = await client.request('/api/data');
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error('Request failed:', error);
}
```

---

