const mockserver = require('mockserver-node');

mockserver.start_mockserver({
    serverPort: 1080,
    trace: true
}).then(() => {
    console.log("Mock Server iniciado na porta 1080");
});

function stopServer() {
    mockserver.stop_mockserver({ serverPort: 1080 })
        .then(() => console.log("Mock Server parado"))
        .catch(err => console.error("Erro ao parar o Mock Server", err));
}

