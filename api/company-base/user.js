/**
 * Created by xiaobxia on 2017/5/5.
 */
module.exports = {
    api: 'sys/login',
    response: function (req, res) {
        console.log(req.query)
        console.log(req.method)
        res.json({
            "success": true,
            "result": {
                "login": true,
                "token": "5a1eb3fa-ea0c-4c28-9853-efdf02e99b6d",
                "userCode": "admin",
                "userName": "admin"
            }
        })
    }
}
