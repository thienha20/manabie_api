define({ "api": [
  {
    "type": "post",
    "url": "/tasks",
    "title": "Create task",
    "name": "Create_task",
    "group": "Task",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authentication\": \"Bearer (token)\",\n  \"Content-type\" : \"application\\json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of task. (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Thực thi task thành công!\",\n  \"status\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"...\",\n  \"status\": !=(200)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Controllers/api/demo/TaskController.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login user",
    "name": "Login",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-type\" : \"application\\json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>account login (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>your password  (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200\n   \"message\": \"Thành công!\",\n   \"data\": {\n       \"token\": \"...\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"message\": \"...\",\n  \"status\": !=(200)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Controllers/api/demo/UserController.js",
    "groupTitle": "User"
  }
] });
