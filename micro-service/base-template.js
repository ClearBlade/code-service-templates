/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {CbServer.Resp} resp
 */
function ServiceName(req,resp){
    // These are parameters passed into the code service
    var params = req.params
    resp.success("Success");
}
