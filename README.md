# Axa - Frontend Asessment
## Create List and Detail page For ORCS

1. Get Orcs
2. Get Filtered Orcs.
3. Get Orc Detail.

## Geting started

1. Clone the repo
```
 $ git clone https://github.com/edalandete/axa-frontend-assesment.git
```
2. Install dependencies
```
 npm install
```
3. Set environment variables following the example in ```.env.example```.
4. Run the server 
```
 $ npm start
```

## Test
1. Run test
```
 $ npm test
 ```
2. See the coverage file in folder ```lcov_report```

## Components

### Orcs List
List of all the orcs to be found, can be filtered by hair color.
### Orc Detail
Details of the selected orc and links to his friends
### Filtering
At the meantime, you can only filter by hair color. But the idea is to implement new filters in the future

   
## Architecture

### Project folders organization
The project is organized in a folder structure so it can be easy to find all the files related to a component and every file has his own purpose. All the redux configuration and files can be found in a redux folder.

### React Hooks
  useSelector, useDispatch: we can use them to avoid using the "connect" from react-redux giving us a readable component code.

### Store
  We have two properties in our store: orcs and filteredOrcs. 
  We can have only one property but in order to the aplication to be faster, we used orcs to save the orcs from the api and filteredOrcs in order to change them appliynig the filters.

### Testing
JEST testing library: it's very fast and very intuitive to use. You don't need any extra libraries to mock modules, with jest is already included. Also allows you to see the status of your test with a simple --watch parameter.
--collect-coverage: by doing so, you have an HTML interface that gives you a fast snapshot of your tests and also you can see what parts of your code it's not tested yet.

### AXIOS
AXIOS has many advantatges over Fetch integrated in JS. To sum up, has a wide browser support over conventional fetch and also has the data property that returns a JSON object and can intercept HTTP Requests.

### Other Dependencies
  - SASS: to use scss files. 
  - redux-thunk as a middleware
  - composeEnhancer to use REDUX DEVELOPER TOOLS
