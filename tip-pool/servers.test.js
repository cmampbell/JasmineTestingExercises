describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    delete allServers['server' + serverId];
    for(let child of serverTbody.children){
      child.remove();
    }
    serverId = 0;
  });
});

//write a test for updateServerTable()
describe("Servers test with updating server table", function(){
  let testServers = ['Matt', 'Caroline', 'Jose', 'Talcum'];
  beforeEach(function (){
    //check if it adds all servers from an existing object
    for(let serverName of testServers){
      serverId++;
      allServers['server' + serverId] = { serverName };
    }
  })

  it('should update the table length to match the length of the array', function() {
    updateServerTable()

    expect(Object.keys(allServers).length).toEqual(testServers.length);
  })

  afterEach(function(){
    for(let key in allServers){
      delete allServers[key];
    }
    serverId = 0;
    updateServerTable();
  })
})