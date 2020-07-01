สามารถสอบถามได้ตรงนี้เลยนะครับ............
-->

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### GIT
or create a new repository on the command line
echo "# myweb" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jaykittiwat/myweb.git
git push -u origin master
                
…or push an existing repository from the command line
git remote add origin https://github.com/jaykittiwat/myweb.git
git push -u origin master



### git
1.git remote -v
2.git remote add origin https://github.com/jaykittiwat/myweb.git
3.git push origin master

### GIT add update
1. git add .
2. git commit -m "update to remote githup"
3. git push origin master



5/26/2020 +++ 
npm install @material-ui/core
npm i --save date-fns@next @date-io/date-fns
npm i @material-ui/pickers
npm i --save date-fns@next @date-io/date-fns@1.x
npm install chart.js --save
npm insta//
npm install axios
react-bootstrap
react-router-dom
ืnpm install axios --save
npm install firebase react-router-dom axios react-bootstrap
npm i mdbootstrap
npm install simple-react-calendar
npm install bulma --save
npm install react-bootstrap-table-next --save

npm update http-proxy --depth 4

--เกร็จเล๋กเก็ดน้อย   //น่าจะไม่ได้ใช้   React hook

function FormExample() {
  const [validated, setValidated] = useState(false); -->เซต validater = false

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



  1.res.Json แปลงเป็น json


  var d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

