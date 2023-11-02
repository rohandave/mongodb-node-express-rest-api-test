const app = require('./src')
const port = '8001'; //try to pick from config file

app.listen(port, () => {
    console.log(`Backend REST API running on Port - ${port}`);
});