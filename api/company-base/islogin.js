/**
 * Created by xiaobxia on 2017/5/5.
 */
module.exports = {
    api: 'sys/isLogin',
    response: function (req, res) {
        console.log(req.query)
        console.log(req.method)
        res.json({
            "success": true,
            "result": {
                "userCode": "admin",
                "userName": "admin",
                "login": true
            }
        })
    }
}
