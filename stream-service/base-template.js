/**
 * Type: Stream Service
 * Description: A service that does not have an execution timeout which allows for infinite execution of logic.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

function TestStream(req, resp) {
  
  const client = new MQTT.Client();
  const TOPIC = "hello";

  client.subscribe(TOPIC, function (topic, message) {
    console.log("received message on topic " + topic + ": " + message.payload)
    processMessage(message, topic);
  })
    .catch(function (reason) {
      resp.error("failed to subscribe: " + reason.message)
    });

  function processMessage(msg, topic) {
    // DEBUG MESSAGE
    client.publish("processedmessage", "Received message " + msg.payload + " " + topic)
      .then(function () {
        console.log("successfully published message");
      }, function (reason) {
        console.error("failed to publish message : " + reason.message);
      });
    // Examples of process message tasks:
    // - Storing message in a collection: https://github.com/ClearBlade/native-libraries/blob/master/clearblade.md#collectioncreatenewitem-callback
    // - Process and publish to another topic: https://github.com/ClearBlade/native-libraries/blob/master/clearblade.md#messagepublishtopic-payload
    // - Update a Device State: https://github.com/ClearBlade/native-libraries/blob/master/clearblade.md#deviceupdatequery-changes-callback
  }
}
