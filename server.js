const app = require('./src')
const config = require('./src/config');
const port = config.port;

app.listen(port, () => {
    console.log(`Backend REST API running on Port - ${port}`);
});